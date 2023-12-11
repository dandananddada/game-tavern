"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Spinner } from "@nextui-org/react";
import { motion } from "framer-motion"
import { observer } from 'mobx-react-lite';
import Cookies from 'js-cookie';
import moment from "moment";
import { isEmpty, find, remove, mean } from 'lodash';

import GradeModal from "./components/grade";
import GameBase from "./components/game";
import RadarScore from '../../components/scores/radar';
import Login from '../../components/login';
import Regist from '../../components/register';
import UserAvatar from '../../components/user-avatar';
import { PlusIcon } from '../../components/icons';

import { ajaxAPI, fetchAPI } from "../../lib/api"
import store from '../../store/game';
import userStore from '../../store/user';
import Expand from '../../components/expand';

const Game = ({ slug }) => {
const { isLogin, shouldLogin, shouldRegist } = store
const { user } = userStore

const [game, setGame] = useState()
const [scores, setScores] = useState()
const [couldGrade, setCouldGrade] = useState(true)

const init = async () => {
  const game = await ajaxAPI(`/games/${slug}`)
  const developers = game.developers.map(i => i.name)
  const publishers = game.publishers.map(i => i.name)
  setGame({
    ...game,
    released: game.released.split('-').join('.'),
    developer: developers.join(', '),
    publisher: publishers.join(', ')
  })
  await initScores()
}

const initScores = async () => {
  const scoresRes = await fetchAPI(`/scores/game`, { game: slug })
  const scores = scoresRes.results
  const userScore = remove(scores, ['users_permissions_user.username', user?.username]);
  setCouldGrade(!userScore.length)
  if (userScore) {
    setScores(userScore.concat(scores));
  } else {
    setScores(scores)
  }
}

useEffect(() => {
  const isAuthed = (![undefined, null, ''].includes(Cookies.get('jwt')))
  store.update({
    isLogin: isAuthed, shouldLogin: !isAuthed
  })
  init()
}, [])

const grade = (score) => {
  if (!isLogin) {
    store.update('shouldLogin', true)
  } else {
    store.update('shouldGrade', true)
  }
  if (score) {
    store.update('gameScore', score)
  }
}

const afterLoginOrRegist = (jwt, user) => {
  Cookies.set('jwt', jwt, { expires: 7 })
  Cookies.set('user', JSON.stringify(user), { expires: 7 })
  store.update({
    isLogin: true
  })
  const userScore = find(scores, ['users_permissions_user.username', user?.username]);
  setCouldGrade(!userScore)
}

const afterGrade = (score) => {
  initScores()
  store.update('shouldGrade', false)
  setScores([...scores])
  setCouldGrade(false)
}

if (!game) {
  return <div className="w-full flex justify-center mt-60">
    <Spinner size="lg" />
  </div>
}

return (<div className="dark">
  <Login
    isOpen={shouldLogin}
    onClose={() => store.update('shouldLogin', false)}
    onRegist={() => store.update('shouldRegist', true)}
    afterLogin={afterLoginOrRegist}
  ></Login>
  <Regist
    isOpen={shouldRegist}
    onClose={() => store.update('shouldRegist', false)}
    afterRegister={afterLoginOrRegist}
  ></Regist>

  <GradeModal game={game} afterGrade={afterGrade} />


  <GameBase game={game}></GameBase>
  <div className="col-span-1 mt-6">
        <div className="col-span-1">
          <div className="flex justify-between items-center mx-4 pb-4 border-b-1 border-b-[#4C4A57]">
            <p className="text-md">
              <span className="text-light-black">排序：</span>
              <span>最新</span>
            </p>
            <Button
              className="text-base h-10 px-4 rounded-full bg-button-blue"
              size="sm"
              startContent={<>
                { isLogin ? <PlusIcon></PlusIcon> : null }
              </>}
              isDisabled={isLogin && !couldGrade}
              onPress={grade}>
                { isLogin ? '游戏评分' : '登录' }
            </Button>
          </div>
          <div className="grid grid-cols-1 mt-6">
            { (scores || []).map(score => (<>
              <div className="flex justify-between mr-4">
                <div className="flex ml-4 lg:col-span-1">
                  <motion.button whileTap={{ scale: 0.8 }}>
                    <Link href={`/member/${score.users_permissions_user?.email}`} key={user.id}>
                      <UserAvatar user={score.users_permissions_user} />
                    </Link>
                  </motion.button>
                  <div className="ml-2">
                    <div className="text-sm text-white">{ score.users_permissions_user?.username }</div>
                    <div className="text-sm text-light-black">{moment(score.createdAt).format('YYYY年MM月DD日 发表评论')}</div>
                  </div>
                </div>
                { score.users_permissions_user?.id === user?.id && (
                  <Button size="sm" onPress={() => grade(score)}>修改评分</Button>
                )}
              </div>
              
              <div className="mt-2 flex justify-center items-center lg:col-span-1 lg:justify-end">
                <span className="text-md text-white">综合评分</span>
                <div className="text-2xl text-white text-bold bg-apple-green ml-2 px-3 py-1/2 rounded-md">{mean(Object.values(score.radar_score)).toFixed(1)}</div>
                {/* <div className="text-2xl text-white text-bold bg-apple-green ml-2 px-3 py-1/2 rounded">{score.score === 10 ? score.score : score.score.toFixed(1)}</div> */}
              </div>
              <div className="m-5 pb-6 border-b-1 border-b-[#4C4A57] last:border-b-0">
                { !isEmpty(score.radar_score) && (
                  <div className="flex justify-center">
                    <RadarScore score={score.radar_score}></RadarScore>
                  </div>
                ) }
                <div className="text-white text-sm mb-2">
                  <span>主观体验:  </span>
                  <span className="text-base text-bold">{ score.score.toFixed(1) }</span>
                </div>
                { score.comment && (
                  <Expand lines="3">
                    { score.comment }
                  </Expand>
                ) }
              </div>
            </>)) }
          </div>
        </div>
    </div>
</div>)
}

export async function getServerSideProps(ctx) {
const slug = ctx.query.slug
return {
  props: {
    slug
  }
}
}

export default observer(Game)

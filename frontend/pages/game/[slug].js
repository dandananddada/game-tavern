"use client";
import { useEffect, useState } from 'react';
import { Button, Avatar, Tabs, Tab, Spinner } from "@nextui-org/react";
import { observer } from 'mobx-react-lite';
import Cookies from 'js-cookie';
import moment from "moment";
import { isEmpty, find } from 'lodash';

import Platform from '../games/components/platform';
import GradeModal from "./components/grade";
import RadarScore from './components/radar';
import Login from '../../components/login';
import Regist from '../../components/register';
import UserAvatar from '../../components/user-avatar';
import { PlusIcon } from '../../components/icons';

import { ajaxAPI, fetchAPI } from "../../lib/api"
import store from '../../store/game';
import userStore from '../../store/user';

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
    const scoresRes = await fetchAPI(`/scores/game`, { game: slug })
    const scores = scoresRes.results
    setGame({
      ...game,
      released: game.released.split('-').join('.'),
      developer: developers.join(', '),
      publisher: publishers.join(', ')
    })
    const userScore = find(scores, ['users_permissions_user.username', user?.username]);
    setCouldGrade(!userScore)
    setScores(scores)
  }

  useEffect(() => {
    const isAuthed = (![undefined, null, ''].includes(Cookies.get('jwt')))
    store.update({
      isLogin: isAuthed, shouldLogin: !isAuthed
    })
    init()
  }, [])

  const grade = () => {
    if (!isLogin) {
      store.update('shouldLogin', true)
    } else {
      store.update('shouldGrade', true)
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
    scores.unshift({
      ...score,
      score: +score.score, // format to number
      users_permissions_user: {
        ...user
      }
    })
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

    <div className="grid grid-cols-1 lg:grid-cols-1 lg:w-[60%] lg:m-auto">
      <div className="col-span-1">
        <Tabs variant="underlined" className="flex justify-center" classNames={{
          tabList: 'mb-6',
          tab: 'px-0',
          tabContent: 'text-gray text-lg group-data-[selected=true]:text-white',
        }}>
          <Tab key="game" title="详情">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* content */}
              <div 
                className="w-[240px] h-[300px] m-auto rounded bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${game.background_image})`
                }}
              >
              </div> 
              <div className="grid-cols-2 lg:grid-cols-1 text-sm">
                <div className={`
                  text-center text-white text-2xl mt-3
                  lg:text-left
                `}>{ game.name }</div>
                <div className="text-center text-light-black mt-1 lg:text-left">发售日期：{ game.released }</div>
                <div className="flex justify-center mt-2 lg:justify-start">
                  { game.stores.map(({ store }) => (<Platform storeSlug={store.slug} className="flex mt-4 mr-2" />)) }
                </div>
                <div className="text-left ml-4 lg:ml-0">
                  <div className="mt-5">
                    <span className="text-light-black">类型：</span>
                    <div className='inline-flex'>
                      { game.genres.map(({ name }) => (
                        <span className="px-2 py-1 mr-2 text-tag-blue border border-tag-blue">{name}</span>)
                      ) }
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-light-black">开发：</span>
                    <span className="text-white">{ game.developer }</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-light-black">发行：</span>
                    <span className="text-white">{ game.publisher }</span>
                  </div>
                </div>

              </div>
            </div>
            <h3 className="m-4 text-white text-xl"> 关于游戏 </h3>
            <div className="w-full px-4 py-4 bg-back-brown text-white">{game.description_raw}</div>
          </Tab>
          <Tab key="comment" title="评分">
            <div className="col-span-1">
              <div className="text-right mx-4 pb-4 border-b-1 border-b-[#4C4A57]">
                <Button
                  className="text-base h-10 px-4"
                  size="sm" color="primary"
                  startContent={<>
                    { isLogin ? <PlusIcon></PlusIcon> : null }
                  </>}
                  isDisabled={isLogin && !couldGrade}
                  onPress={grade}>
                    { isLogin ? '评分' : '登录' }
                </Button>
              </div>
              <div className="grid grid-cols-1 mt-6">
                { (scores || []).map(score => (<>
                  <div className="flex ml-4 lg:col-span-1">
                    <UserAvatar user={score.users_permissions_user} />
                    <div className="ml-2">
                      <div className="text-sm text-white">{ score.users_permissions_user?.username }</div>
                      <div className="text-sm text-light-black">{moment(score.createdAt).format('YYYY年MM月DD日 发表评论')}</div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-center items-center lg:col-span-1 lg:justify-end">
                    <span className="text-md text-white">综合评分</span>
                    <div className="text-2xl text-white text-bold bg-apple-green ml-2 px-3 py-1/2 rounded">{score.score === 10 ? score.score : score.score.toFixed(1)}</div>
                  </div>
                  <div className="m-5 pb-6 border-b-1 border-b-[#4C4A57] last:border-b-0">
                    { !isEmpty(score.radar_score) && (
                      <div className="flex justify-center">
                        <RadarScore score={score.radar_score}></RadarScore>
                      </div>
                    ) }
                    <div className="text-white text-sm">{score.comment || '什么都没说'}</div>
                  </div>
                </>)) }
              </div>
            </div>
          </Tab>
        </Tabs>
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

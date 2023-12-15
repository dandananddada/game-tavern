"use client";
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Spinner, Card, Badge, Chip } from "@nextui-org/react";
import moment from "moment";
import { isEmpty, mean } from 'lodash';

import InfiniteScroll from 'react-infinite-scroller'

import Expand from '../../components/expand';
import UserAvatar from '../../components/user-avatar';
import RadarScore from '../../components/scores/radar';


import { fetchAPI } from "../../lib/api"


const getScores = ({ email, page = 1 }) => {
  return fetchAPI('/scores/user', { email, page, pageSize: 15 })
}

const Member = ({ user, slug }) => {

  const computeColor = (value)=> {
    if (value < 7) return 'bg-danger'
    else if (value < 9) return 'bg-warning'
    else return 'bg-success'
  }

  const [scores, setScores] = useState([])
  const [pagination, setPagination] = useState({})

  const hasMore = useMemo(() => {
    const { page, pageCount } = pagination
    console.log(page < pageCount);
    return page < pageCount
  }, [pagination])

  const loadMore = async (page) => {
    if (!hasMore) return;
    const scoresRes = await getScores({ email: slug, page });
    const { results = [], pagination } = scoresRes || {}
    setScores([...scores, ...results])
    setPagination(pagination)
  }


  const init = async () => {
    const scoresRes = await getScores({ email: slug })
    const { results = [], pagination } = scoresRes || {}
    setScores(results)
    setPagination(pagination)
  }

  useEffect(() => {
    init()
  }, [])

  return <div className="dark mx-5">
    <div className="flex items-center">
      <UserAvatar user={user} size="md" className="mr-2"></UserAvatar>
      <div className="">
        <p className="text-base">
          {user.username}
          <Chip size="sm" className="ml-2">#{user.id}</Chip>
        </p>
        <p className="text-xs text-light-black">{moment(user.createdAt).format('YYYY 年 MM 月 DD 日加入')}</p>
      </div>
    </div>
    <p className="mt-4 pb-4 text-sm text-center border-b-1 border-b-[#4C4A57]">
      截至到{moment().format('YYYY 年 MM 月 DD 日')}，已经评价 
      <span className="text-xl text-apple-green"> {pagination?.total} </span>个游戏
    </p>
    <div>
    <div className="mt-4">
      { scores.length < 1 && (
        <div className="w-full flex justify-center mt-60">
          <Spinner size="lg" />
        </div>
      ) }
      <InfiniteScroll className="w-full"
        pageStart={1} loadMore={loadMore} hasMore={hasMore} loader={
        <div className="text-center text-white" key={0}>
          <div className="w-full flex justify-center">
            <Spinner size="sm" label="加载中..." />
          </div>
        </div>
      }>
        { scores.map(score => (<>
            <p className="text-base">{score.games[0].name}</p>
            <div className="text-xs text-light-black">{moment(score.createdAt).format('YYYY年MM月DD日 发表评论')}</div>
            <div className="flex justify-between align-center">
              <div className="flex items-center">
                <Badge
                  content={mean(Object.values(score.radar_score)).toFixed(1)}
                  classNames={{
                    badge: `text-sm w-10 h-6 pt-1/2 right-5 bottom-3 rounded-none rounded-tl rounded-br
                      ${computeColor(score.score)}
                    `
                  }}
                  placement="bottom-right" showOutline={false}
                >
                  <Link href={`/game/${score.games[0].slug}`} key={score.games[0].id}>
                    <Card 
                        isPressable
                        className="w-44 h-[120px] rounded bg-center bg-cover bg-no-repeat "
                        style={{
                          backgroundImage: `url(${score.games[0].background_image})`
                        }}
                    />
                  </Link>
                </Badge>
              </div>
              { !isEmpty(score.radar_score) && (
                <div className="flex justify-center w-40">
                  <RadarScore score={score.radar_score} showAverage={false}></RadarScore>
                </div>
              ) }
            </div>

            <Expand containerCls="mb-5 pb-3 whitespace-pre-wrap border-b-1 border-b-[#4C4A57] last:border-b-0" lines={2}>
              {score.comment}
            </Expand>
        </> )) }
      </InfiniteScroll>
    </div>
    </div>
  </div>

}

export async function getServerSideProps(ctx) {
  const slug = ctx.query.slug
  const [user] = await fetchAPI(`/users?filters[email][$eq]=${slug}&populate=avatar`)
  return {
    props: {
      slug,
      user
    }
  }
}

export default Member

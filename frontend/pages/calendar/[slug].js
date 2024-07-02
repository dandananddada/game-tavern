"use client";
import { useEffect, useState } from 'react';
import className from 'classnames';
import { Spinner, Chip } from "@nextui-org/react";
import moment from "moment";
import InfiniteScroll from 'react-infinite-scroller'
import { InView } from "react-intersection-observer";

import UserAvatar from '../../components/user-avatar';

import { fetchAPI, ajaxAPI } from "../../lib/api"

const getGames = (nextMonth = 0) => {
  const date = moment().add(nextMonth, 'month');
  console.log(moment(), date, nextMonth, moment().add(nextMonth, 'month'), '.. ///');
  const start = date.startOf('month').format('YYYY-MM-DD')
  const end = date.endOf('month').format('YYYY-MM-DD')
  console.log(date, start, end, nextMonth, '/// ]]]');
  return ajaxAPI('/games', { dates: `${start},${end}` })
}

const Calendar = ({ user, slug }) => {

  const [year, setYear] = useState()
  const [month, setMonth] = useState(moment().month())
  const day = moment().day();
  const hasMore = true;

  const [days, setDays] = useState([])

  const getDaysGames = async (nextMonth = 0) => {
    const date = moment().add(nextMonth, 'month')
    const month = date.month() + 1
    const monthDays = date.daysInMonth()
    const nextDays = []
    const fromDay = nextMonth === 0 ? day : 1;
    try {
      const { results: games = [] } = await getGames(nextMonth);
      for (let i = fromDay; i <= monthDays; i++) {
        const dayGames = games.filter(game => {
          if (!game.released) return;
          return moment(game.released).date() === i;
        });
        nextDays.push({
          month,
          date: i,
          games: dayGames || []
        })
      }
      setMonth(month)
      setYear(date.year())
      setDays([...days, ...nextDays]);
    } catch (e) {

    }
  
  }

  const loadMore = async (page) => {
    if (!hasMore) return;
    getDaysGames(page)
  }

  const init = async () => {
    const currentDay = moment().day()
    // getDaysGames(0, currentDay)
  }

  useEffect(() => {
    init()
  }, [])

  return <div className="dark">
    <div className="fixed w-full justify-between flex px-3 py-2 bg-[#201F25]">
      <div className="flex items-center">
        <a href={`/member/${slug}`}>
          <UserAvatar user={user} size="md" className="mr-2"></UserAvatar>
        </a>
        <div>
          <p className="text-base">
            {user.username}
            <Chip size="sm" className="ml-2">#{user.id}</Chip>
          </p>
          <p className="text-xs text-light-black">{moment(user.createdAt).format('YYYY 年 MM 月 DD 日加入')}</p>
        </div>
      </div>
      {year && month && (
        <div className='flex flex-end items-end text-white text-sm'>{year}年{month}月</div>
      )}
    </div>
    <div className="pt-14">
      <InfiniteScroll className="w-full"
        pageStart={-1} loadMore={loadMore} hasMore={hasMore} loader={
        <div className="text-center text-white" key={0}>
          <div className="w-full flex justify-center mt-4">
            <Spinner size="sm" label="加载中..." />
          </div>
        </div>
      }>
        { days.map((data, idx) => (<div className="grid grid-cols-8">
            <div className="bg-black col-span-1">
              <p className="text-base text-center text-white py-8 font-[500]">{data.date}</p>
              { data.date === 10 && (
                <InView as="i" onChange={() => setMonth(data.month)} />
              ) }
            </div>
            <div className={ className('col-span-7', 'py-2 px-3', idx % 2 === 0 ? 'bg-green-700' : 'bg-green-600') }>
              { data.games.map(game => (
                <>
                  <a href={`/game/${game.slug}`} target='_blank'>{game.name}</a>
                </>
              )) }
            </div>
        </div> )) }
      </InfiniteScroll>
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

export default Calendar

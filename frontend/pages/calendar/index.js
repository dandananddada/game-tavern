"use client";
import { useEffect, useState } from 'react';
import className from 'classnames';
import { Spinner, Chip } from "@nextui-org/react";
import moment from "moment";
import InfiniteScroll from 'react-infinite-scroller'
import { InView } from "react-intersection-observer";
import { ajaxAPI } from "../../lib/api"

const getGames = (nextMonth = 0) => {
  const date = moment().add(nextMonth, 'month');
  console.log(moment(), date, nextMonth, moment().add(nextMonth, 'month'), '.. ///');
  const start = date.startOf('month').format('YYYY-MM-DD')
  const end = date.endOf('month').format('YYYY-MM-DD')
  console.log(date, start, end, nextMonth, '/// ]]]');
  return ajaxAPI('/games', { dates: `${start},${end}` })
}

const Calendar = () => {

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


  return <div className="dark">
    <div className="fixed w-full justify-end flex px-3 py-2 bg-[#201F25]">
      {year && month && (
        <div className='text-white text-sm'>{year} 年 {String(month).padStart(2, 0)} 月</div>
      )}
    </div>
    <div className="pt-8">
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
  return {
    props: {
    }
  }
}

export default Calendar

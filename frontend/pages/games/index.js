import React, { useMemo, useState, useRef, useEffect }  from "react"
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { debounce  } from 'lodash';
import { Input, Skeleton, Card, Tabs, Tab, Spinner } from "@nextui-org/react";
import InfiniteScroll from 'react-infinite-scroller'

import { ajaxAPI, fetchAPI } from "../../lib/api"
import Platform from './components/platform'
import { SearchIcon } from "../../components/icons"

import userStore from '../../store/user';

const page_size = 20

const getTavernGames = (page = 1) => {
  return fetchAPI(`/games?sort=createdAt:DESC&pagination[page]=${page}&pagination[pageSize]=${page_size}`)
}

const getUserGames = (email, page = 1) => {
  return fetchAPI('/scores/user', { email, page, pageSize: 15 })
}

const getGames = (page = 1) => {
  return ajaxAPI('/games', { page, page_size, metacritic: '60,100', ordering: '-released' });
}

const Article = ({ games: initGames }) => {
  const { isLogin, user } = userStore
  console.log(isLogin, '...');
  const [games, setGames] = useState(initGames)
  const [isFetch, setIsFetch] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [filterType, setFilterType] = useState('new')

  useEffect(() => {
    loadMore(1)
  }, [filterType])

  const loadMore = async (page) => {
    if (!hasMore || filterType === 'init') return;
    let moreGames = []
    let _hasMore = true
    if (filterType === 'all') {
      const data = await getGames(page);
      moreGames = data.results;
      console.log(moreGames, 'all');
    } else if (filterType === 'new') {
      const res = await getTavernGames(page)
      const games = res.data
      const pagination = res.meta.pagination 
      moreGames = games.map(game =>({
        id: game.id,
        ...game.attributes
      }))
      _hasMore = pagination.page < pagination.pageCount
    } else if (filterType === 'user') {
      const res = await getUserGames(user.email, page);
      const pagination = res.pagination
      moreGames = res.results?.map(score => {
        const [game] = score.games
        return game
      })
      _hasMore = pagination.page < pagination.pageCount
    }
    
    setGames([...games, ...moreGames])
    setHasMore(_hasMore)
    setIsFetch(false)
  }

  const find = async (keyword) => {
    setIsFetch(true)
    const data = await ajaxAPI('/games', { search: keyword, page: 1, page_size: 99 });
    console.log(data.results);
    setGames(data.results)
    setIsFetch(false)
    setHasMore(false)
  }

  const filter = async (type) => {
    setFilterType(type)
    setGames([])
    setHasMore(true)
    setIsFetch(true)
  }

  const debounceFind = useMemo(
    () => debounce(find, 600)
  , [])

  console.log(games, 'games');

  return (<>
    <div className="flex justify-end mx-6">
      <Input
        size="sm"
        onValueChange={debounceFind}
        startContent={<SearchIcon></SearchIcon>}
      ></Input>
    </div>
    <div className="grid grid-cols-2 mx-4 mt-2">
      <div className="w-full col-span-1 col-end-2 lg:w-[280px] lg:mb-[-14px]">
        <Tabs
          variant="underlined" aria-label="filter types"
          classNames={{ tabList: ['pl-0'], tab: ['pr-0'], cursor: ['h-0'] }}
          selectedKey={filterType}
          onSelectionChange={filter}
        >
          <Tab key="new" title="最新评分" />
          { isLogin && <Tab key="user" title="我已评分"/> }
          <Tab key="all" title="全部游戏"/>
        </Tabs>
      </div>
    </div>
    
    { isFetch ? (
      <div className="m-auto flex justify-around mt-12">
        <Card className="w-[180px] space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">  
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
        <Card className="w-[180px] space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">  
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      </div>

    ) : (
      <InfiniteScroll className="w-full"
      pageStart={1} loadMore={loadMore} hasMore={hasMore} loader={
      <div className="text-center text-white mb-2" key={0}>
        <Spinner size="sm"></Spinner>
      </div>
    }>
        <div className="m-4 mt-0 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 lg:gap-[40px] lg:max-w-[1240px] xl:max-w-[1560px] lg:m-auto">
          { games.map((game, idx) => (
            <div className={`w-full mb-10 col-span-1 ${idx === 0 ? 'col-end-2' : null}`}>
              <Link href={`/game/${game.slug}`} key={game.id}>
                <Card isPressable
                  className="w-40 h-52 m-auto rounded bg-center bg-cover bg-no-repeat lg:w-[280px] lg:h-[300px]"
                  style={{
                    backgroundImage: `url(${game.background_image})`
                  }}
                ></Card>
              </Link>
              <div className="text-center mt-3 text-white text-base lg:text-xl">{ game.name }</div>
              <div className="text-center mt-1 text-white text-xs lg:text-sm">{ game.released }</div>
              <div className="flex justify-center mt-1 lg:mt-[12px]">
                { (game.stores || []).map(({ store }) => (<Platform storeSlug={store.slug} className="mr-2" />)) }
              </div>
            </div>)
          )}
        </div>
    </InfiniteScroll>
    )}
  </>)
}
export async function getStaticProps({ params }) {
  const gamesRes = await getTavernGames()
  const games = gamesRes.data
  return {
    props: { platforms: [], games: games.map(game =>({
      id: game.id,
      ...game.attributes
    })) },
    revalidate: 1,
  }
}

export default observer(Article)

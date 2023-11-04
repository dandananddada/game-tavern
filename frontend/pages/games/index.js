import React, { useMemo, useState }  from "react"
import Link from 'next/link';
import { debounce  } from 'lodash';
import { Input, Skeleton, Card } from "@nextui-org/react";
import InfiniteScroll from 'react-infinite-scroller'

import { ajaxAPI } from "../../lib/api"
import Platform from './components/platform'
import { SearchIcon } from "../../components/icons"


const getGames = (page = 1) => {
  return ajaxAPI('/games', { page, page_size: 20 });
}

const Article = ({ platforms, games: initGames }) => {

  const [games, setGames] = useState(initGames)
  const [isFetch, setIsFetch] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadMore = async (page) => {
    if (!hasMore) return;
    const data = await getGames(page);
    const moreGames = data.results;
    setGames([...games, ...moreGames])
    setHasMore(true)
  }

  const find = async (keyword) => {
    setIsFetch(true)
    const data = await ajaxAPI('/games', { search: keyword, page: 1, page_size: 99 });
    console.log(data.results);
    setGames(data.results)
    setIsFetch(false)
    setHasMore(false)
  }

  const debounceFind = useMemo(
    () => debounce(find, 600)
  , [])

  return (<>
    <div className="flex justify-end mx-6">
      <Input
        onValueChange={debounceFind}
        startContent={<SearchIcon></SearchIcon>}
      ></Input>
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
      pageStart={1} loadMore={loadMore} hasMore={true} loader={
      <div className="text-center text-white" key={0}>加载中...</div>
    }>
        <div className="m-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 lg:gap-[40px] lg:max-w-[1240px] xl:max-w-[1560px] lg:m-auto">
          <div className="w-40 m-auto lg:w-[280px] lg:mb-[-14px]">
            <h1 className="text-lg text-white md:text-xl">已公开游戏</h1>
          </div>
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
  const gamesRes = await getGames()
  const games = gamesRes.results
  return {
    props: { platforms: [], games },
    revalidate: 1,
  }
}

export default Article

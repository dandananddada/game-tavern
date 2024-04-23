import React from 'react';
import Platform from '../../games/components/platform';
import Expand from '../../../components/expand';

export default function ({ game }) {

  return (<div className="col-span-1">
    <div className="px-4 ">
      {/* background image and name */}
      <div className="flex">
        <div className="min-w-[130px] h-[160px] mr-4 rounded-[16px] bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${game.background_image})`
          }}
        ></div> 
        <div className="flex flex-col justify-between">
          <div className="text-left text-white text-xl font-bold">{ game.name }</div>
          <div className="text-xs">
            { game.developer && (
              <div className="mt-2">
                <span className="text-light-black">开发：</span>
                <span className="text-white">{ game.developer }</span>
              </div>
            ) }
            <div className="mt-2">
              <span className="text-light-black">发行：</span>
              <span className="text-white">{ game.publisher }</span>
            </div>
          </div>
        </div>
      </div>

      {/* publish date and platforms */}
      { game.released && (
        <div className="text-left text-sm text-light-black mt-3">发售日期：{ game.released }</div>
      ) }
      <div className="flex justify-start mt-2">
        { game.stores.map(({ store }) => (<Platform storeSlug={store.slug} className="flex  mr-2" />)) }
      </div>

      {/* generes */}
      <div className="text-left text-sm">
        <div className="mt-3 flex items-center">
          <div className="mt-2 text-light-black shrink-0">类型：</div>
          <div className="flex flex-wrap">
              { game.genres.map(({ name }) => (
                <span className="px-2 py-1 mr-2 mt-2 text-tag-blue border border-tag-blue">{name}</span>)
              ) }
          </div>
        </div>
      </div>
    </div>

    {/* description */}
    { game.description_raw && (
      <Expand containerCls="w-full mt-4 px-4 py-4 bg-back-brown text-[#EEE]" lines={3}>
        {game.description_raw}
      </Expand>
    ) }
  </div>)
}
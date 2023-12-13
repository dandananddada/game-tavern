import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { mean } from 'lodash';
import html2canvas from 'html2canvas';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button
} from '@nextui-org/react';
import Platform from '../../games/components/platform';
import RadarScore from '../../../components/scores/radar';
import UserAvatar from '../../../components/user-avatar';

import store from '../../../store/game';

const BlurBackground = () => {
  return <svg width="120" height="64" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_3479_977)">
    <rect width="120" height="64" rx="4" fill="white" fill-opacity="0.1"/>
    </g>
    <defs>
    <filter id="filter0_b_3479_977" x="-8" y="-8" width="216" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3479_977"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3479_977" result="shape"/>
    </filter>
    </defs>
  </svg>
}

function saveAs(blob, fileName="pic") {
  const link = document.createElement('a');
  link.download = fileName
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
}

function Share ({ game }) {
  const { shouldShare, gameScore: score } = store
  const canvasRef = useRef(null)
  console.log(shouldShare, 'get should share');

  const onOpenChange = (isOpen) => {
    store.update('shouldShare', isOpen)
  }

  const share = () => {
    html2canvas(canvasRef.current, {
      allowTaint: true, useCORS: true,
    }).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, game.name + '.jpg')
      })
      store.update('shouldShare', false)
    })
  }

  const gradientBGStyle = {
    background: 'linear-gradient(0deg, #201F25 9.36%, rgba(32, 31, 37, 0.00) 100%)'
  }

  return (<Modal
    size="full"
    isOpen={shouldShare}
    onOpenChange={onOpenChange}
    scrollBehavior="inside"
  >
     <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            分享评分
          </ModalHeader>
          <ModalBody>
            <div className="col-span-1 bg-[#201F25]" ref={canvasRef}>
              <div className="bg-center bg-cover bg-no-repeat" style={{
                backgroundImage: `url(${game.background_image})`
              }}>
                <div className="text-center pt-[260px]" style={gradientBGStyle}>
                  <div className="text-white text-2xl font-bold">{ game.name }</div>

                  {/* publish date and platforms */}
                  <div className="flex justify-center items-center mt-2">
                    { game.stores.map(({ store }) => (<Platform storeSlug={store.slug} className="flex mr-1/2 scale-75" />)) }
                    <div className="ml-1 text-left text-sm text-[#DDD]">发售日期：{ game.released }</div>
                  </div>

                  <div className="text-sm">  
                    <div className="mt-2">
                      <span className="text-[#DDD]">开发：</span>
                      <span className="text-white">{ game.developer }</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-[#DDD]">发行：</span>
                      <span className="text-white">{ game.publisher }</span>
                    </div>
                  </div>

                  <div className="my-6 relative">
                    <span className="text-md text-white">综合评分</span>
                    <p className="text-2xl text-apple-green">
                      {mean(Object.values(score.radar_score)).toFixed(1)}
                    </p>
                    {/* <div className="w-28 m-auto mt-4 py-6 rounded-sm bg-white/10 blur-sm"></div> */}
                    <div className="absolute w-full top-0">
                      <div className="w-[120px] m-auto">
                        <BlurBackground />
                      </div>
                    </div>
                      
                  </div>
                  <RadarScore score={score.radar_score} />
                  <div className="flex justify-center items-center text-sm mb-8">
                    <UserAvatar user={score.users_permissions_user} />
                    <div className="ml-2 text-white">{ score.users_permissions_user?.username }</div>
                    <div className="ml-2 text-[#DDD]">分享了他的评分</div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onPress={share}>
              分享
            </Button>
            <Button color="default" variant="light" onPress={onClose}>
              取消
            </Button>
          </ModalFooter>
        </>)
      }
     </ModalContent>
  </Modal>)
}

export default observer(Share)
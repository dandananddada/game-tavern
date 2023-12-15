import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { mean } from 'lodash';
import dom2image from 'dom-to-image';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button
} from '@nextui-org/react';
import Platform from '../../games/components/platform';
import RadarScore from '../../../components/scores/radar';
import UserAvatar from '../../../components/user-avatar';
import store from '../../../store/game';

function Share ({ game }) {
  const { shouldShare, gameScore: score } = store
  const canvasRef = useRef(null)
  const [isSharing, setIsSharing] = useState(false)

  const onOpenChange = (isOpen) => {
    store.update('shouldShare', isOpen)
  }

  const share = () => {
    const node = canvasRef.current
    setIsSharing(true)
    dom2image.toPng(node, {
      width: 2 * node.clientWidth,
      height: 2 * node.clientHeight,
      style: {
        transform: 'scale(2)',
        transformOrigin: 'top left'
      }
    }).then(dataUrl => {
      const link = document.createElement('a');
      link.download = `${game.name}.png`;
      link.href = dataUrl;
      setTimeout(() => {
        link.click();
        setIsSharing(false)
      }, 5000)
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
            <div className="bg-[#201F25]" ref={canvasRef}>
              <div className="bg-center bg-cover bg-no-repeat" style={{
                backgroundImage: `url(/api/image-proxy?imageUrl=${game.background_image})`
              }}>
                <div className="text-center pt-[260px]" style={gradientBGStyle}>
                  <div className="text-white text-2xl font-bold">{ game.name }</div>

                  {/* publish date and platforms */}
                  <div className="flex justify-center items-center mt-1/2 leading-4">
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

                  <div className="w-32 m-auto my-6 py-2 rounded-md bg-[#201f25]/80">
                    <span className="text-md text-[#D7D7D7]">综合评分</span>
                    <p className="text-2xl font-bold text-[#2CFF28]">
                      {mean(Object.values(score.radar_score)).toFixed(1)}
                    </p>
                    {/* <div className="w-28 m-auto mt-4 py-6 rounded-sm bg-white/10 blur-sm"></div> */}
                  </div>
                  <RadarScore score={score.radar_score} />
                  <div className="flex justify-center items-center text-sm mt-8 mb-8">
                    <UserAvatar user={score.users_permissions_user} size="sm" />
                    <span className="ml-2 text-white">{ score.users_permissions_user?.username }</span>
                    <span className="ml-2 text-[#DDD]">分享了 TA 的评分</span>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onPress={share} isLoading={isSharing}>
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
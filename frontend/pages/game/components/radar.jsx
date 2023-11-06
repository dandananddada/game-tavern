import RadarChart from 'react-svg-radar-chart';
import { Chip } from '@nextui-org/react';
import { mean } from 'lodash';
import 'react-svg-radar-chart/build/css/index.css'
import radarStyle from './radar.module.css';

export default function Radar({ score }) {
  if (!score) return null
  const captions = {
    art: '美术',
    music: '音乐',
    story: '故事',
    creativity: '创新',
    gameplay: '游戏性'
  }

  const data = [
    {
      data: {
        art: +score.art / 10,
        music: +score.music / 10,
        story: +score.story / 10,
        creativity: +score.creativity / 10,
        gameplay: +score.gameplay / 10
      },
      meta: { color: 'blue' }
    }
  ]


  const options = {
    scales: 5,
    dots: true,
    shapeProps: () => ({
      className: 'fill-[#00B2FF3a] stroke-[#00B2FF] stroke-1/2',
    }),
    scaleProps: () => ({
      fill: 'none',
      className: 'stroke-[#4D4D4D] stroke-1/2'
    }),
    dotProps: () => ({
      className: `${radarStyle.dot} fill-[#f00] stroke-[#f00] stroke-1/2`
    }),
    captionProps: () => ({
      className: 'fill-[#D7D7D7] text-sm',
      textAnchor: 'middle',
      fontSize: 12
    })
  }

  return (<div className="flex items-end">
    <RadarChart
      captions={captions}
      data={data}
      size={250}
      options={options}
    />
    <Chip size="small" className="mb-4">
      {mean(Object.values(score))}
    </Chip>
  </div>
  )
}
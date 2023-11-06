import { useState } from 'react';
import { Controller } from "react-hook-form";
import { Slider } from '@nextui-org/react';

export default function ScoreSlider ({ label, name, control, ...props }) {

  const computeColor = (value)=> {
    if (value < 7) return 'bg-[#FF5959]'
    else if (value < 9) return 'bg-[#EBFF00]'
    else return 'bg-[#41FF3E]'
  }

  const [color, setColor] = useState('foreground')
  const onChange = field => (v) => {
    setColor(computeColor(v))
    field.onChange(v)
  }
  console.log(color);
  return  <Controller
    control={control}
    name={name}
    render={({ field }) => (<>
      <Slider 
        label={label}
        onChange={onChange(field)}
        control={control} 
        classNames={{
          filler: color,
        }}
        { ...props }
      />
    </>)}
  / >
}
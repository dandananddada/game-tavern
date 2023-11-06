import { Controller } from "react-hook-form";
import Rate from 'react-rating';
import { motion } from "framer-motion"
import styles from './rating.module.css';

export default function Rating ({ label, name, control, className }) {

  const computeBackground = (value)=> {
    if (value < 7) return 'bg-[#FF5959]'
    else if (value < 9) return 'bg-[#EBFF00]'
    else return 'bg-[#41FF3E]'
  }
  return  <Controller
    control={control}
    name={name}
    render={({ field }) => (<div className={`${styles['rate-container']} flex flex-col ${className}`}>
      <label className="mb-2 text-small">{ label } { field.value }</label>
      <Rate
        stop={10}
        onChange={field.onChange}
        initialRating={field.value}
        fullSymbol={<motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className={`${computeBackground(field.value)} rounded-full  w-7 h-7 border-5 border-double border-black`}
        />}
        emptySymbol={
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className={`bg-white rounded-full w-7 h-7 border-5 border-double border-black`}
        />
        }
      ></Rate>
    </div>)}
  / >
}
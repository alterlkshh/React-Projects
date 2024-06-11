import { data } from 'autoprefixer';
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";


function Card ({ data, reference }) {
  return (
    <motion.div 
      drag 
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-gray-200 px-8 py-10 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.filesize}</h5>
            {/* <span className='w-7 h-7 rounded-full flex items-center justify-center'> */}
              {data.close ? <IoMdCloseCircleOutline size="1.2em" /> : <LuDownload size="1.2em"  /> }
            {/* </span> */}
          </div>
          {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
              <h3 className='text-sm text-center font-semibold'>{data.tag.tagTitle}</h3>
            </div>
          )}
      </div>
    </motion.div>
  )
}

export default Card

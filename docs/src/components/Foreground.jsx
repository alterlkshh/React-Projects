import React from 'react'
import Card from './Card'
import { useRef } from 'react';

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "This is the practice project to get back at react js .. after a long break",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green"},
    },
    {
      desc: "Gate 2024 so close. .  I'm doomed ..",
      filesize: ".6mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "blue"},
    },
    {
      desc: "Only 10 days left from this year ... GoodBye .. Keep Moving Forward",
      filesize: ".8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Save", tagColor: "green"},
    },
    {
      desc: "Dying to get a Internship as soon as possible, please bhagwan ji .. kill this college attendance system",
      filesize: ".12mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green"},
    },
    {
      desc: "Bekar hai bhaiya,, .. tut gya main toh ,, chapter close",
      filesize: ".3mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Save", tagColor: "blue"},
    },
  ];

  return (
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
  );
}

export default Foreground

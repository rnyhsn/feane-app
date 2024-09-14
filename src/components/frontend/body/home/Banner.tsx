import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="bg-primary h-screen w-screen px-4 md:px-10 lg:px-20 xl:px-28 flex items-center gap-24">
      <div className="relative w-1/2 h-[550px]">
        <Image src="/about-img.png" alt="" className="" fill />
      </div>
      <div className="text-white w-1/2 flex flex-col gap-8">
        <h1 className="font-dancing text-5xl font-bold">We Are Feane</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
        <button className="btn-primary px-10">Read More</button>
      </div>
    </div>
  )
}

export default Banner

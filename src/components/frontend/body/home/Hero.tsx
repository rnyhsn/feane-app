import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen w-screen flex items-center text-white" style={{backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover"}}>
      <div className="flex flex-col gap-5 ml-28">
          <h1 className="text-6xl font-dancing font-bold">Fast Food Restaurant</h1>
          <p className="w-[40%]">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
          <button className="btn-primary">Order Now</button>
      </div>
    </div>
  )
}

export default Hero

import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const ReviewSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <h1 className="text-4xl font-bold text-center font-dancing mb-10">What Says Our Customers</h1>
        <div className="grid grid-cols-2 gap-10">
            <div>
                <div className="bg-primary text-white px-6 py-8 rounded-md">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, quos! Deserunt ut ratione blanditiis soluta porro, quam ullam repudiandae quia.</p>
                    <div className="mt-3">
                        <h1 className="text-lg font-semibold">Mona Michell</h1>
                        <p className="text-sm">Magna Allica</p>
                    </div>
                </div>
                <div className="mt-7">
                    <div className="relative">
                        <div className="w-7 h-7 bg-secondary rotate-[50deg] absolute -top-1 left-12"></div>
                        <div className="relative w-28 h-28 rounded-full overflow-hidden border-[5px] border-secondary">
                            <Image src="/client2.jpg" alt="" className="object-cover" fill />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-primary text-white px-6 py-8 rounded-md">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, quos! Deserunt ut ratione blanditiis soluta porro, quam ullam repudiandae quia.</p>
                    <div className="mt-3">
                        <h1 className="text-lg font-semibold">Mona Michell</h1>
                        <p className="text-sm">Magna Allica</p>
                    </div>
                </div>
                <div className="mt-7">
                    <div className="relative">
                        <div className="w-7 h-7 bg-secondary rotate-[50deg] absolute -top-1 left-12"></div>
                        <div className="relative w-28 h-28 rounded-full overflow-hidden border-[5px] border-secondary">
                            <Image src="/client1.jpg" alt="" className="object-cover" fill />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="flex items-center justify-center gap-4 mt-10">
            <button className="w-10 h-10 text-white bg-secondary flex items-center justify-center rounded-full"> <IoIosArrowBack className="text-lg  font-bold" /> </button>
            <button className="w-10 h-10 text-white bg-secondary flex items-center justify-center rounded-full"><IoIosArrowForward className="text-lg font-bold" /></button>
        </div>
    </div>
  )
}

export default ReviewSection

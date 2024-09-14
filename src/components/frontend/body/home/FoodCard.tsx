import Image from 'next/image'
import { FaShoppingCart } from "react-icons/fa";


const FoodCard = ({item}: {item: {title: string, description: string, price: number, category: string, img: string}}) => {
  return (
    <div className="bg-primary text-white rounded-xl overflow-hidden">
      <div className="h-[220px] w-full bg-slate-50 rounded-bl-[50px] flex items-center justify-center">
        <Image src={"/"+item.img} alt="" width={170} height={170} className="" />
      </div>
      <div className="p-8">
        <h2 className="text-xl font-semibold"> {item.title} </h2>
        <p className="py-4"> {item.description} </p>
        <div className="flex justify-between">
            <span className="text-lg font-semibold"> ${item.price} </span>
            <button className="bg-seconary text-white w-10 h-10 rounded-full bg-secondary flex items-center justify-center"> <FaShoppingCart />  </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard

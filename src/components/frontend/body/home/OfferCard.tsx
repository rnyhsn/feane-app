import Image from 'next/image'
import { FaShoppingCart } from "react-icons/fa";

const OfferCard = ({item}: {item: {title: string, discount: number, img: string}}) => {
  return (
    <div className="flex gap-10 items-center bg-primary px-5 py-7 rounded-md">
        <div className="w-40 h-40 relative rounded-full overflow-hidden  border-[6px] border-secondary">
            <Image src={item.img} alt="" className="" fill />
        </div>
        <div className="text-white flex flex-col gap-4">
            <h2 className="text-3xl font-dancing font-semibold"> {item.title} </h2>
            <p className="font-dancing"> <span className="text-5xl">{item.discount}%</span> off </p>
            <button className="btn-primary flex items-center gap-2">Order Now  <FaShoppingCart /> </button>
        </div>
    </div>
  )
}

export default OfferCard

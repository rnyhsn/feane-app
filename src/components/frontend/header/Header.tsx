"use client"
import MenuItem from './MenuItem'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { menuItems } from '@/utils/data';
import { usePathname } from 'next/navigation';




const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={`px-4 md:px-10 lg:px-20 xl:px-28 flex justify-between items-center absolute ${(pathname !== "/") && "bg-gradient-to-r from-[#0D0E10] to-[#394344]"} text-white w-full py-6`}>
        <div>
          <h1 className="font-dancing text-4xl font-bold"> Feane </h1>
        </div>
        <div className="flex justify-between items-center gap-48">
          <div className="flex gap-6 uppercase font-sans">
            {
              menuItems.map((item) => (
                <MenuItem item={item} key={item.title} />
              ))
            }
          </div> 
          <div className="flex items-center gap-5">
            <FaUser />
            <FaShoppingCart />
            <FaSearch />
            <button className="btn-primary">Order Online</button>
          </div>
        </div>
    </div>
  )
}

export default Header

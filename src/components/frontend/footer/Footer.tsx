import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-primary text-white px-4 md:px-10 lg:px-20 xl:px-28">
        <div className="grid grid-cols-3 py-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-5 font-dancing">Contact Us</h1>
            <div className="flex gap-2 items-center mb-1">
              <IoLocationSharp /> Location
            </div>
            <div className="flex gap-2 items-center text-center mb-1">
              <MdCall /> Call +123234567
            </div>
            <div className="flex gap-2 items-center text-center mb-1">
              <FaEnvelope /> demmyemail@gmail.com
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-5 font-dancing">Feane</h1>
            <p className="text-center">Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
            <div className="flex gap-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:text-secondary cursor-pointer">
                  <FaFacebookF className="" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:text-secondary cursor-pointer">
                  <FaTwitter className="" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:text-secondary cursor-pointer">
                  <FaLinkedinIn className="" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:text-secondary cursor-pointer">
                  <FaInstagram className="" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary hover:text-secondary cursor-pointer">
                  <FaPinterest className="" />
                </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-5 font-dancing">Opening Hours</h1>
            <p className="mb-4 text-gray-300">Every Day</p>
            <p className="text-gray-300">10:00 AM - 10:00 AM</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center mb-6">
          <p>&copy; All Rights are Reserved By our company</p>
          <p>&copy; Distributed by Rony </p>
        </div>
    </div>
  )
}

export default Footer

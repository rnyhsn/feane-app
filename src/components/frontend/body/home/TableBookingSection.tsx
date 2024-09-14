import React from 'react'

const TableBookingSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 ">
    <h1 className="text-4xl font-bold font-dancing mb-5">Book A Table</h1>
        <div className="flex gap-10">
            <div className="w-1/2">
                <form action="" className="flex flex-col gap-5">
                    <input type="text" name="name" className="py-2.5 px-4 border border-gray-600 rounded-md outline-none" placeholder="Your Name" />
                    <input type="email" name="email" className="py-2.5 px-4 border border-gray-600 rounded-md outline-none" placeholder="Your Email" />
                    <input type="text" name="phone" className="py-2.5 px-4 border border-gray-600 rounded-md outline-none" placeholder="Your Phone" />
                    <select name="persons" className="py-2 px-4 border border-gray-600 rounded-md outline-none">
                        <option value="" disabled selected>How Many Person?</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <input type="date" name="date" className="py-2.5 px-4 border border-gray-600 rounded-md outline-none" placeholder=""  />
                    <button className="btn-primary px-10 mt-4">BOOK NOW</button>
                </form>
            </div>
            <div className="w-1/2">
                <div className="w-full bg-gray-200 flex items-center justify-center h-full">
                    <h1 className="text-6xl px-5 text-center text-gray-500">Google Map is not Shwoing</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TableBookingSection

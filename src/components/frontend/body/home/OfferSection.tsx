import { offerCardItems } from "@/utils/data";
import OfferCard from "./OfferCard";


const OfferSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 grid grid-cols-2 gap-6">
    {
        offerCardItems.map((item, index) => (
            <OfferCard item={item} key={index} />
        ))
    }
    </div>
  )
}

export default OfferSection

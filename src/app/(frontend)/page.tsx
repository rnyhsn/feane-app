import Banner from "@/components/frontend/body/home/Banner";
import Hero from "@/components/frontend/body/home/Hero";
import MenuSection from "@/components/frontend/body/home/MenuSection";
import OfferSection from "@/components/frontend/body/home/OfferSection";
import ReviewSection from "@/components/frontend/body/home/ReviewSection";
import TableBookingSection from "@/components/frontend/body/home/TableBookingSection";

export default function Home() {
  return (
      <div className="flex flex-col gap-20">
        <Hero />
        <OfferSection />
        <MenuSection />
        <Banner />
        <TableBookingSection />
        <ReviewSection />
      </div>
  );
}

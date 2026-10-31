import Hero from "@/components/home/Hero";
import ServiceGrid from "@/components/home/ServiceGrid";
import TrackRecord from "@/components/home/TrackRecord";
import ClientsStrip from "@/components/home/ClientsStrip";
import SafetyCompliance from "@/components/home/SafetyCompliance";
import CareersBand from "@/components/home/CareersBand";
import InquirySection from "@/components/home/InquirySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <TrackRecord />
      <ClientsStrip />
      <SafetyCompliance />
      <CareersBand />
      <InquirySection />
    </>
  );
}

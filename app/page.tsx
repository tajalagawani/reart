import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ValuePropositions from "./components/ValuePropositions";
import WhatIsReART from "./components/WhatIsReART";
import ReARTEcosystem from "./components/ReARTEcosystem";
import MemberBenefits from "./components/MemberBenefits";
import ArtistBenefits from "./components/ArtistBenefits";
import CollectorsBenefits from "./components/CollectorsBenefits";
import RealEstateBenefits from "./components/RealEstateBenefits";
import InvestorsBenefits from "./components/InvestorsBenefits";
import ReARTCommunityMarketplace from "./components/ReARTCommunityMarketplace";
import PlatformServices from "./components/PlatformServices";
import Memberships from "./components/Memberships";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ValuePropositions />
      <WhatIsReART />
      <ReARTEcosystem />
      <MemberBenefits />
      <ArtistBenefits />
      <CollectorsBenefits />
      <RealEstateBenefits />
      <InvestorsBenefits />
      <ReARTCommunityMarketplace />
      <PlatformServices />
      <Memberships />
      <Newsletter />
      <Footer />
    </div>
  );
}

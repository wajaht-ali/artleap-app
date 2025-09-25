import CommunityCreations from "./homePageComponets/CommunityCreations";
import FeatureCards from "./homePageComponets/FeatureCards";
import { Hero } from "./homePageComponets/Hero";


export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <FeatureCards/>
      <CommunityCreations/>
    </div>
  );
}

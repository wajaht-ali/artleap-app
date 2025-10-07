import CommunityCreations from "./homePage/CommunityCreations";
import FeatureCards from "./homePage/FeatureCards";
import { Hero } from "./homePage/Hero";


export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <FeatureCards />
      <CommunityCreations />
    </div>
  );
}

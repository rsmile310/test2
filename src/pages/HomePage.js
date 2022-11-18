// components
import Page from "../components/Page";
import HomeHero from "../components/home/HomeHero";
import Ecosystem from "../components/home/Ecosystem";
import Price from "../components/home/Price";

// ----------------------------------------------------------------------
export default function HomePage() {
  return (
    <Page title="Home page">
      <HomeHero/>
      <Price/>
      <Ecosystem/>
    </Page>
  );
}

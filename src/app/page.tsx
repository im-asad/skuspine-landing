import Landing from "@/components/site/Landing";
import { HomeJsonLd } from "@/components/site/structuredData";

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Landing />
    </>
  );
}

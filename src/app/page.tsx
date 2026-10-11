import Landing from "@/components/landing/Landing";
import { getTheme } from "@/components/landing/theme";

export default async function Home() {
  return <Landing initialTheme={await getTheme()} />;
}

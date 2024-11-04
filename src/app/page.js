import Image from "next/image";
import { getAdventures } from "../../API/api";
import Adventures from "./adventures/Adventures";
import Cruises from "./cruises/Cruises";
import TopBanner from "./TopBanner";
export default function Home() {
  return (
    <div>
      <Adventures />
      <Cruises />
    </div>
  );
}

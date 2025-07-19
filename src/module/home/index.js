import React from "react";
import Herobanner from "../../components/homecomponents/herobanner";
import Logomarquee from "../../components/homecomponents/logomarquee";
import Dedicated from "../../components/homecomponents/dedicated";
import Homecards from "../../components/homecomponents/homecards";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Logomarquee />
      <Dedicated />
      <Homecards />
    </>
  );
}

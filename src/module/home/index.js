import React from "react";
import Herobanner from "../../components/homecomponents/herobanner";
import Logomarquee from "../../components/homecomponents/logomarquee";
import Dedicated from "../../components/homecomponents/dedicated";
import Homecards from "../../components/homecomponents/homecards";
import Seewhy from "../../components/homecomponents/seewhy";
import Transformsection from "../../components/homecomponents/transformsection";
import Dedicatedteam from "../../components/homecomponents/dedicatedteam";
import Homemarqueesection from "../../components/homecomponents/homemarqueesection";
import Trustedpartners from "../../components/homecomponents/trustedpartners";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Logomarquee />
      <Dedicated />
      <Homecards />
      <Seewhy />
      <Transformsection />
      <Dedicatedteam />
      <Homemarqueesection />
      <Trustedpartners />
    </>
  );
}

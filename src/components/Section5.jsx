import ImageWithTextComponent from "@/sharedComponents/ImageWithTextComponent";
import React from "react";
import Image from "next/image";
import Analyse from "@/assets/analyse.svg";
import Check from "@/assets/check-circle.svg";
export default function Section5() {
  return (
    <section className="flex flex-row p-12">
      <div className="w-6/12">
        <h3>Avaya Call Reporting Reinvented</h3>
        <p>
          Step into the future of call center analytics with Comstice Avaya Call
          Reporting solution. Say goodbye to the need for an Avaya AES server
          and extra licenses for every agent, and say hello to a world of
          insightful analytics, cradle-to-grave reports, and automated agent and
          team reports by email.
        </p>
        <div className="gap-2">
          <ImageWithTextComponent
            image={Check}
            imgHeight={34}
            imgWidth={34}
            headText={"No Avava AES Server Needed"}
          />
          <ImageWithTextComponent
            image={Check}
            imgHeight={34}
            imgWidth={34}
            headText={"No Avava AES Server Needed"}
          />
          <ImageWithTextComponent
            image={Check}
            imgHeight={34}
            imgWidth={34}
            headText={"No Avava AES Server Needed"}
          />
          <ImageWithTextComponent
            image={Check}
            imgHeight={34}
            imgWidth={34}
            headText={"No Avava AES Server Needed"}
          />
          <ImageWithTextComponent
            image={Check}
            imgHeight={34}
            imgWidth={34}
            headText={"No Avava AES Server Needed"}
          />
        </div>
      </div>{" "}
      <div className="w-6/12">
        <Image src={Analyse} />
      </div>
    </section>
  );
}

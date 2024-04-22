import React from "react";
import Image from "next/image";
import MeasureAnalyze from "@/assets/measure-analyze.svg";
import ImageWithTextComponent from "@/sharedComponents/ImageWithTextComponent";
import Check from "@/assets/check-circle.svg";
export default function Section3() {
  return (
    <section className="flex flex-row p-12">
      <div className="w-6/12">
        <Image src={MeasureAnalyze} />
      </div>
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
            descText={
              "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed."
            }
          />
          <ImageWithTextComponent
            image={Check}
            imgHeight={34}
            imgWidth={34}
            headText={"No Avava AES Server Needed"}
            descText={
              "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed."
            }
          />
          <ImageWithTextComponent
            image={Check}
            imgHeight={34}
            imgWidth={34}
            headText={"No Avava AES Server Needed"}
            descText={
              "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed."
            }
          />
        </div>
      </div>
    </section>
  );
}

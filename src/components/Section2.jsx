import ImageWithTextComponent from "@/sharedComponents/ImageWithTextComponent";
import React from "react";
import Download from "@/assets/download.svg";
export default function Section2() {
  return (
    <div className="flex flex-row bg-white p-12">
      <ImageWithTextComponent
        image={Download}
        imgHeight={34}
        imgWidth={34}
        headText={"Lower Cost of Ownership"}
        descText={
          "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed."
        }
      />
      <ImageWithTextComponent
        image={Download}
        imgHeight={34}
        imgWidth={34}
        headText={"Higher Agent Occupancy"}
        descText={
          "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed."
        }
      />
      <ImageWithTextComponent
        image={Download}
        imgHeight={34}
        imgWidth={34}
        headText={"First Contact Resolution"}
        descText={
          "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed."
        }
      />
    </div>
  );
}

import ImageWithTextComponent from "@/sharedComponents/ImageWithTextComponent";
import React from "react";
import Check from "@/assets/check-circle.svg";
export default function Section6() {
  return (
    <div className="flex flex-row bg-white p-12">
      <ImageWithTextComponent
        image={Check}
        imgHeight={34}
        imgWidth={34}
        imagePostion={"verticle"}
        headText={"No Avava AES Server Needed"}
        descText={
          "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed."
        }
      />
      <ImageWithTextComponent
        image={Check}
        imgHeight={34}
        imgWidth={34}
        imagePostion={"verticle"}
        headText={"No Avava AES Server Needed"}
        descText={
          "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed."
        }
      />
      <ImageWithTextComponent
        image={Check}
        imgHeight={34}
        imgWidth={34}
        imagePostion={"verticle"}
        headText={"No Avava AES Server Needed"}
        descText={
          "Avava CMS data is used for all the reports and charts. No TSAPI licenses or AES Server needed."
        }
      />
    </div>
  );
}

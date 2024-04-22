import Image from "next/image";
import React from "react";

export default function ImageWithTextComponent({
  image,
  imgHeight,
  imgWidth,
  imagePostion,
  headText,
  descText,
}) {
  return (
    <div
      className={`${
        imagePostion === "verticle"
          ? "flex flex-col items-center"
          : "flex flex-row"
      }`}
    >
      <Image src={image} height={imgHeight} width={imgWidth} />
      <div>
        <h6>{headText}</h6>
        {descText && <p className="desc">{descText}</p>}
      </div>
    </div>
  );
}

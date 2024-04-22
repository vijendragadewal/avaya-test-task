import React from "react";
import Image from "next/image";
import Home from "../assets/home.svg";
export default function Section1() {
  return (
    <section className="flex flex-row bg-white p-12">
      <div className="w-6/12">
        <h3>Avaya Call Reporting Reinvented</h3>
        <p className="desc">
          Step into the future of call center analytics with Comstice Avaya Call
          Reporting solution. Say goodbye to the need for an Avaya AES server
          and extra licenses for every agent, and say hello to a world of
          insightful analytics, cradle-to-grave reports, and automated agent and
          team reports by email.
        </p>
        <button className="theme-button">Request Demo</button>
      </div>
      <div className="w-6/12">
        <Image src={Home} height={485} width={650} />
      </div>
    </section>
  );
}

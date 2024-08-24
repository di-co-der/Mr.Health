import React from "react";

//components
import Footer from "./footerList/Footer";

// assets
import footer1 from "../../assets/footer1.jpg";
import footer2 from "../../assets/footer2.jpg";
import footer3 from "../../assets/footer3.jpg";
import footer4 from "../../assets/footer4.jpg";
import MrHealth from "../../assets/svgs/MrHealth.svg";

const cards = [
  {
    image: footer1,
    altText: "footer1",
    title: "ABHA",
  },
  {
    image: footer2,
    altText: "footer2",
    title: "FAQ'S",
  },
  {
    image: footer3,
    altText: "footer3",
    title: "Help",
  },
  {
    image: footer4,
    altText: "footer4",
    title: "About",
  },
];

function FooterList() {
  return (
    <div>
      <div className="flex justify-center items-center p-3 flex-wrap gap-6">
        {cards.map((card, index) => (
          <Footer
            key={index}
            image={card.image}
            altText={card.altText}
            title={card.title}
          />
        ))}
      </div>
      <div className="mt-4 bg-slate-200 py-10">
        <div className="text-black flex items-center justify-center">
          <img src={MrHealth} alt="M" className="w-14" />
          <h1 className="text-4xl font-semibold pt-1 font-serif tracking-tight">rHealth</h1>
        </div>
        <div className="flex items-center justify-center">
            <h4 className="italic text-lg leading-3">"Your Health Ally"</h4>
        </div>
      </div>
    </div>
  );
}

export default FooterList;

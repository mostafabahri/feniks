import React from "react";
import { Container } from "./Container";
import { Sidebar } from "./Sidebar";
import { Stats } from "./Stats";
import { BrandIntro } from "./BrandIntro";

function SectionTitle({ children }) {
  return <h3 className="text-xl g-bold">{children}</h3>;
}
export default function Campaign({ campaign }) {
  const brand = campaign.brand;
  return (
    <Container>
      <div className="font-medium text-black-russian border-solitude flex flex-wrap">
        <div className="md:w-2/3 md:border-r pr-10">
          <section className="transform sm:-translate-y-4  pb-4 -ml-1">
            <BrandIntro brand={brand} />
          </section>
          <section className="py-10 border-t border-b">
            <Stats stats={campaign.stats} />
          </section>
          <section className="py-10 grid md:grid-cols-7 gap-6">
            <div className="md:col-span-4 space-y-4">
              <SectionTitle>About</SectionTitle>
              <p className="text-second">{brand.description}</p>
              {/* <div className="grid grid-cols-3 w-full">
                <img src={brand.logo.url} alt="" />
                <img src={brand.logo.url} alt="" />
                <img src={brand.logo.url} alt="" />
              </div> */}
            </div>
            <div className="md:col-span-3">
              <SectionTitle>Business Details</SectionTitle>
              <div>{brand.address}</div>
              <div>{brand.tel}</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                deserunt dolorem temporibus nemo possimus suscipit accusamus
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-grow mt-10 justify-center">
          <Sidebar />
        </div>
      </div>
    </Container>
  );
}

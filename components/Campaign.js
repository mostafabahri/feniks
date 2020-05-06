import React from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Sidebar } from "./Sidebar";
import { Stats } from "./Stats";

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
          <section className="py-10 flex space-x-6">
            <div className="w-7/12 md:w-full">
              <h3>About</h3>
              <p>{brand.description}</p>
              {/* <div className="grid grid-cols-3 w-full">
                <img src={brand.logo.url} alt="" />
                <img src={brand.logo.url} alt="" />
                <img src={brand.logo.url} alt="" />
              </div> */}
            </div>
            <div className="w-5/12">
              <h3>Business Details</h3>
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

function BrandIntro({ brand }) {
  return (
    <div className="flex items-center justify-between">
      <img src={brand.logo.url} className="w-32 bg-white rounded-xl p-1"></img>
      <div className="mx-4">
        <h1 className="text-2xl g-bold">{brand.name}</h1>
        <h2 className="text-storm-grey text-sm">{brand.promo}</h2>
      </div>
      <Button theme="snow">Follow</Button>
    </div>
  );
}

import React from "react";
import { Button } from "./Button";
import { Container } from "./Container";

export default function Campaign({ campaign }) {
  const brand = campaign.brand;
  return (
    <Container>
      <div className="font-medium text-black-russian border-solitude flex">
        <div className="md:w-2/3 border-r pr-10">
          <div className="transform -translate-y-4 border-b pb-6">
            <BrandIntro brand={brand} />
          </div>
        </div>
        {/* <div className="flex justify-center flex-grow">
          <div className="shadow-md rounded-md px-12 py-5 text-center">
            <h3>Frequent Flyer</h3>
            <Button theme="tomato">Become a donor</Button>
          </div>
        </div> */}
      </div>
    </Container>
  );
}

function BrandIntro({ brand }) {
  return (
    <div className="flex items-center justify-between">
      <img src={brand.logo.url} className="w-32 bg-white rounded-xl p-1"></img>
      <div className="mx-4">
        <h1 className="text-2xl font-semibold">{brand.name}</h1>
        <h2 className="text-storm-grey text-sm">{brand.promo}</h2>
      </div>
      <div className="text-sm">
        <Button theme="snow">Follow</Button>
      </div>
    </div>
  );
}

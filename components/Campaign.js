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
        <div className="flex flex-grow justify-center mt-10">
          <div className="md:w-3/4 space-y-6">
            <DonorCard donation={{ title: "Frequent Flyer", usd: 8 }} />
            <DonorCard donation={{ title: "Quite a Fan", usd: 25 }} />
          </div>
        </div>
      </div>
    </Container>
  );
}

function DonorCard({ donation }) {
  return (
    <div className="flex flex-col shadow-md rounded-md py-5 text-center">
      <h3 className="g-bold text-lg py-4 border-b">{donation.title}</h3>
      <div className="py-8">
        <div className="amount text-3xl g-bold ">${donation.usd}</div>
        <div className="text-storm-grey text-xs ">Per month</div>
      </div>
      <div className="px-8">
        <Button theme="tomato" css="w-full">
          Become a donor
        </Button>
      </div>
    </div>
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
      <Button theme="snow">Follow</Button>
    </div>
  );
}

import React from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Sidebar } from "./Sidebar";

export default function Campaign({ campaign }) {
  const brand = campaign.brand;
  return (
    <Container>
      <div className="font-medium text-black-russian border-solitude flex">
        <div className="md:w-2/3 border-r pr-10">
          <div className="transform sm:-translate-y-4 border-b pb-6">
            <BrandIntro brand={brand} />
          </div>
          <Stats stats={campaign.stats} />
        </div>
        <div className="flex flex-grow mt-10 justify-center">
          <Sidebar />
        </div>
      </div>
    </Container>
  );
}
function Stats({ stats }) {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <img src={stats.donors.icon} alt="" className="w-8" />
        <div className="text-storm-grey text-sm">Donors:</div>
        <div className="g-bold">{stats.donors.count}</div>
      </div>
      <div className="space-y-1">
        <img src={stats.per_month.icon} alt="" className="w-8" />
        <div className="text-storm-grey text-sm">Per Month:</div>
        <div className="g-bold">${stats.per_month.usd}</div>
      </div>
      <div className="space-y-1">
        <img src={stats.total_raised.icon} alt="" className="w-8" />
        <div className="text-storm-grey text-sm">Raised Total:</div>
        <div className="g-bold">${stats.total_raised.usd}</div>
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

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
          <div className="transform sm:-translate-y-4  pb-4">
            <BrandIntro brand={brand} />
          </div>
          <div class="py-10 border-t border-b">
            <Stats stats={campaign.stats} />
          </div>
        </div>
        <div className="flex flex-grow mt-10 justify-center">
          <Sidebar />
        </div>
      </div>
    </Container>
  );
}
function Stats({ stats }) {
  const items = [
    {
      icon: stats.donors.icon,
      title: "Donors",
      text: stats.donors.count,
    },
    {
      icon: stats.per_month.icon,
      title: "Per Month",
      text: `$${stats.per_month.usd}`,
    },
    {
      icon: stats.total_raised.icon,
      title: "Raised Total",
      text: `$${stats.total_raised.usd}`,
    },
    {
      icon: stats.expiry.icon,
      title: "Expires",
      text: stats.expiry.date,
    },
  ];
  function StatsItem({ icon, title, text }) {
    return (
      <div>
        <img src={icon} alt="icon" className="w-8 mb-3" />
        <div className="text-storm-grey text-sm mb-1">{title}:</div>
        <div className="g-bold">{text}</div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <StatsItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
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

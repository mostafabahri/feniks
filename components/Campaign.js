import React from "react";
import { Container } from "./Container";
import { Sidebar } from "./Sidebar";
import { Stats } from "./Stats";
import { BrandIntro } from "./BrandIntro";
import { MapIcon, PhoneIcon } from "./Icons";

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
              <p className="text-second">
                {brand.description}
                <a className="text-tomato" href="#">
                  {" "}
                  Read more
                </a>
              </p>
              <div className="flex space-x-4 overflow-hidden ">
                <img src="https://i.picsum.photos/id/533/200/150.jpg" />
                <img src="https://i.picsum.photos/id/201/200/150.jpg" />
                <img src="https://i.picsum.photos/id/300/200/150.jpg" />
              </div>
            </div>
            <div className="md:col-span-3 space-y-4">
              <SectionTitle>Business Details</SectionTitle>
              <div className="space-y-2 text-xs g-bold my-6">
                <div className="flex">
                  <MapIcon className="inline-block w-4 h-4 text-storm-grey mr-3" />
                  {brand.address}
                </div>
                <div className="flex">
                  <PhoneIcon className="inline-block w-4 h-4 text-storm-grey mr-3" />
                  {brand.tel}
                </div>
              </div>
              <div>
                <GoogleMap location={brand.location} />
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

function GoogleMap({ location }) {
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAIwHjaXZy7ToXAPyCMHMjzY8BCwsJXQxw
    &q=${location.join(",")}`;
  return (
    <iframe className="w-full rounded-lg" frameborder="0" src={src}></iframe>
  );
}

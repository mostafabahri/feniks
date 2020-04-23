import React from "react";
import { Container } from "./container";
import { Button } from "./button";

export default function Header() {
  const NavGrid = ({ children }) => (
    <div className="grid grid-flow-col gap-4 md:gap-8 items-center capitalize">
      {children}
    </div>
  );
  return (
    <header className="text-black-russian g-bold text-sm">
      <Container>
        <div className="my-6 flex justify-between items-center">
          <div className="logo">
            <img src="/brand-logo.png" className="w-16" />
          </div>
          <NavGrid>
            <a href="#who">Who are we</a>
            <a href="#how">How it works</a>
          </NavGrid>
          <NavGrid>
            <a href="#">Earn</a>
            <Button theme="tomato">Donate</Button>
          </NavGrid>
        </div>
      </Container>
    </header>
  );
}

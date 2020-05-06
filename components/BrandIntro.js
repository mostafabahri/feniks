import { Button } from "./Button";

export function BrandIntro({ brand }) {
  return (
    <div className="flex items-center justify-between">
      <img src={brand.logo.url} className="w-32 bg-white rounded-xl p-1"></img>
      <div className="mx-4">
        <h1 className="text-2xl g-bold">{brand.name}</h1>
        <h2 className="text-second">{brand.promo}</h2>
      </div>
      <Button theme="snow">Follow</Button>
    </div>
  );
}

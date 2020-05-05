import { Button } from "./Button";

export function Sidebar() {
  const donations = [
    { id: 1, title: "Frequent Flyer", usd: 8 },
    { id: 2, title: "Quite a Fan", usd: 25 },
  ];
  return (
    <aside className="md:w-3/4 space-y-6 px-2">
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            <DonorCard donation={donation} />
          </li>
        ))}
      </ul>
    </aside>
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
        <Button theme="tomato" css="md:w-full">
          Become a donor
        </Button>
      </div>
    </div>
  );
}

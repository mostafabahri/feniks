export function Stats({ stats }) {
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

function StatsItem({ icon, title, text }) {
  return (
    <div>
      <img src={icon} alt="icon" className="w-8 mb-3" />
      <div className="text-second mb-1">{title}:</div>
      <div className="g-bold">{text}</div>
    </div>
  );
}

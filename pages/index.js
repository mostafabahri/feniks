import Layout from "../components/Layout";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Campaign from "../components/Campaign";

export default function Index() {
  const campaign = {
    brand: {
      name: "Wendy's Cakes",
      promo:
        "Classic American baked goods, vintage decor and warm, inviting atmosphere",
      logo: {
        url: "https://i.picsum.photos/id/350/200/200.jpg",
      },
      hero: {
        url:
          "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1400&h=350&fit=crop&ixid=eyJhcHBfaWQiOjF9&auto=compress",
      },
      description:
        "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet.",
      address: "28 Avenue, NYC",
      tel: "+1 212-498-9810",
      location: [40.668511, -73.938515],
    },
    stats: {
      donors: {
        icon: "/donors.png",
        count: 271,
      },
      per_month: {
        icon: "/per-month.png",
        usd: 3490,
      },
      total_raised: {
        icon: "/total-raised.png",
        usd: 29520,
      },
      expiry: "2020-06-13",
    },
  };

  return (
    <Layout>
      <Header />
      <HeroImage src={campaign.brand.hero.url} />
      <Campaign campaign={campaign} />
    </Layout>
  );
}

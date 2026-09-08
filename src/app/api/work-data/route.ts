import { NextResponse } from "next/server";

const workData = [
  {
    image: "/images/work/pos1.png",
    title: "Enterprise SaaS POS & Accounting System — React, Node.js & PostgreSQL",
    client:
      "Multi-tenant SaaS: double-entry accounting, inventory, warehouses & international clients",
    slug: "https://pos.wiserconsulting.info",
  },
  {
    image: "/images/work/ecommerce.png",
    title: "Gul Traders Website (MERN)",
    client: "Responsive UI/UX and business-focused design",
    slug: "https://gultraders.com/",
  },
  {
    image: "/images/work/wiserconsulting.jpeg",
    title: "Wiser Consulting Platform — Next.js & MongoDB",
    client: "Corporate consulting website with dynamic content & lead capture",
    slug: "https://wiserconsulting.info/",
  },
  {
    image: "/images/work/Travel plane.jpg.jpeg",
    title: "Travel Plan App — React & Supabase",
    client: "Trip planning with itineraries, auth & real-time data",
    slug: "#",
  },
];

export const GET = async () => {
  return NextResponse.json({
    workData,
  });
};

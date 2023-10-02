import React from "react";
import axios from "axios";
import { use } from "react";

async function fetchProps() {
  try {
    const response = await axios.get(
      "http://admin.kadynpearce.dev/api/homepage",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI}`,
        },
      }
    );

    const { title, description } = response.data.data.attributes;

    return { title, description };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error; // or return a default value, depending on your requirements
  }
}

export default function Home() {
  const data = use(fetchProps());
  return (
    <main className="relative flex min-h-screen items-center justify-center p-24 bg-white">
      <div className="z-10 text-center text-black">
        <p className="text-3xl font-bold mb-4">{data.title}</p>
        <p className="text-xl">{data.description}</p>
      </div>
    </main>
  );
}

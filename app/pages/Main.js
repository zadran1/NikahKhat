import React from "react";
import CardsComponent from "./CardsComponent";
import ChartComponent from "./ChartComponent";
import StatCards from "./StatCards";

const Main = () => {
  return (
    <main className="flex-1 p-4 bg-gray-100 m-2 border rounded-lg">
      <CardsComponent />
      <ChartComponent />
      <StatCards />
    </main>
  );
};

export default Main;

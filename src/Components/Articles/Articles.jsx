import React from "react";
import Card from "../Card/Card";

export default function Articles() {
  return (
    <main className="w-[80%] m-auto mb-10">
      <section
        className="        
        grid 
        grid-cols-1    
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-3 
        xl:grid-cols-3 
        gap-10
        justify-items-center 
        "
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}

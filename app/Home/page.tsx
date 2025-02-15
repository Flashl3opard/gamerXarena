import React from "react";
import Card from "../components/Cards";
import Nav from "../components/Nav";

const page = () => {
  return (
    <div>
      <div className="fixed">
        <Nav />
      </div>
      <div className="flex gap-3 m-3 justify-end translate-y-40">
        <Card imageUrl="/images/valo.jpg" title="Valorant" imageAlt="#" />
        <Card
          imageUrl="/images/csgo.jpg"
          title="Counter Strike GO"
          imageAlt="#"
        />
        <Card imageUrl="/images/apex.jpg" title="Apex Legends" imageAlt="#" />
        <Card imageUrl="/images/pubg.jpg" title="PUBG PC" imageAlt="#" />
      </div>
      <div className="flex gap-3 m-3 justify-end translate-y-40">
        <Card imageUrl="/images/valo.jpg" title="Valorant" imageAlt="#" />
        <Card
          imageUrl="/images/csgo.jpg"
          title="Counter Strike GO"
          imageAlt="#"
        />
        <Card imageUrl="/images/apex.jpg" title="Apex Legends" imageAlt="#" />
        <Card imageUrl="/images/pubg.jpg" title="PUBG PC" imageAlt="#" />
      </div>
      <div className="flex gap-3 m-3 justify-end translate-y-40">
        <Card imageUrl="/images/valo.jpg" title="Valorant" imageAlt="#" />
        <Card
          imageUrl="/images/csgo.jpg"
          title="Counter Strike GO"
          imageAlt="#"
        />
        <Card imageUrl="/images/apex.jpg" title="Apex Legends" imageAlt="#" />
        <Card imageUrl="/images/pubg.jpg" title="PUBG PC" imageAlt="#" />
      </div>
    </div>
  );
};

export default page;

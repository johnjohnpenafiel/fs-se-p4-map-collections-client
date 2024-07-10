import React from "react";
import { Card } from "./ui/card";
export default function CollectionItem({ item }) {
  return (
    <>
      <Card>
        <h3>{item.name}</h3>
        <p>{item.group}</p>
        <p>{item.address}</p>
        <p>{item.review}</p>
        <p>{item.comment}</p>
      </Card>
    </>
  );
}

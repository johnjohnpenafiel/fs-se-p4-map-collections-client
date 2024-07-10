import React from "react";
import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";

function CollectionCard({ id, title, handleCardClick }) {
  return (
    <button
      className="flex flex-col mt-2 p-2"
      onClick={() => handleCardClick(id)}
    >
      <Card>
        <CardTitle className="text-center px-5">{title}</CardTitle>
      </Card>
    </button>
  );
}

export default CollectionCard;

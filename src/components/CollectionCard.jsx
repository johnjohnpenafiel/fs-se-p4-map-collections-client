import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
// import { useNavigate } from "react-router-dom";

function CollectionCard({ id, title }) {
  // const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate(`/collections/${id}`);
  //   };

  return (
    <Card className="mt-5">
      <CardTitle className="text-center px-5">{title}</CardTitle>
    </Card>
  );
}

export default CollectionCard;

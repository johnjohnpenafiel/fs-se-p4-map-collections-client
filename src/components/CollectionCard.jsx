import React from "react";
// import { useNavigate } from "react-router-dom";

function CollectionCard({ id, title }) {
  // const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate(`/collections/${id}`);
  //   };

  return (
    <div>
      <li>{title}</li>
    </div>
  );
}

export default CollectionCard;

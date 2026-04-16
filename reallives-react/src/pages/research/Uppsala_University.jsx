import React from "react";
import { useNavigate } from "react-router-dom";

const Uppsala_University = () => {
  const navigate = useNavigate();
  return (
    <div>
         Uppsala_University
    <button onClick={() => navigate("/reallives/school/research")}>Go Home</button>

    </div>
  );
};

export default Uppsala_University;

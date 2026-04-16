import React from 'react'
import { useNavigate } from "react-router-dom";

const UaeBristol = () => {
    const navigate = useNavigate(); 
  return (
   
    <div>UaeBristol
        <button onClick={() => navigate("/reallives/school/research")}>Go Home</button>
    </div>
  )
}

export default UaeBristol
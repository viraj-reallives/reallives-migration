import React from 'react'
import { useNavigate } from "react-router-dom";

const Individual_Research = () => {
    const navigate = useNavigate(); 
  return (
    <div>
        Individual_Research
        <button onClick={() => navigate("/reallives/school/research")}>Go Home</button>
    </div>
  )
}

export default Individual_Research
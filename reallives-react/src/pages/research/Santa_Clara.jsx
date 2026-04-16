import React from 'react'
import { useNavigate } from "react-router-dom";

const Santa_Clara = () => {
    const navigate = useNavigate(); 
  return (
    <div>
        Santa_Clara
        <button onClick={() => navigate("/reallives/school/research")}>Go Home</button>
    </div>
  )
}

export default Santa_Clara
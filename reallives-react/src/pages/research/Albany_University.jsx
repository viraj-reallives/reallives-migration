import React from 'react'
import { useNavigate } from "react-router-dom";

const Albany_University = () => {
     const navigate = useNavigate(); 
  return (
    <div>

        Albany_University


          <button onClick={() => navigate("/reallives/school/research")}>Go Home</button>

    </div>
  )
}

export default Albany_University
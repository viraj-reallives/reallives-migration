import { useNavigate } from "react-router-dom";

const Research_Card1 = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      Research_Card1
      <button onClick={() => navigate("/reallives/school/research")}>Go Home</button>
    </div>
  );
};

export default Research_Card1;
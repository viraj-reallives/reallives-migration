// import React from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";

// import "../../pages/GlobalMap/GlobalMap.css";


// const worldGeoUrl =
//   "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// const impactSites = [

//    { id: 2, name: 'USA', coordinates: [-98.5, 39.8], },

//     {
//     id: 3,
//     name: "Thailand",
//     coordinates: [100.99, 15.87],
//     path: "/reallives/school/Navamindradhiraj_Unniversity", 
//   },

//     { id: 4, name: 'South Korea', coordinates: [127.8, 40.5], path:"/reallives/school/KyungheeUniversity" },

//   {
//     id: 5,
//     name: "India",
//     coordinates: [78.9, 21.5],
//     path: "/reallives/school/IIT_Bombay_University",
//   },

//    { id: 6, name: 'Switzerland', coordinates: [8.2, 46.8],path:"/reallives/school/ethzurichworkshop" },
//    { id: 7, name: 'China', coordinates: [104.2, 35.9], },
//    { id: 8, name: 'Australia', coordinates: [133.8, -25.3], },
//     { id: 9, name: 'Japan', coordinates: [138.2, 36.2], },
// ];

// export const GlobalMap = ({ name = "Impact" }) => {
//   const navigate = useNavigate(); 

//   return (
//     <div className="map-container">
//       <h1 className="map-title">Global Impact </h1>

//       <div className="map-wrapper">
//         <ComposableMap
//           projectionConfig={{
//             scale: 145,
//             center: [0, 5],
//           }}
//           width={800}
//           height={400}
//           style={{ width: "100%", height: "auto" }}
//         >
//           <Geographies geography={worldGeoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill="#EAEAEC"
//                   stroke="#D6D6DA"
//                   style={{
//                     default: { outline: "none" },
//                     hover: { fill: "#CFD8DC", outline: "none" },
//                   }}
//                 />
//               ))
//             }
//           </Geographies>

      
//           {impactSites.map((site) => (
//             <Marker
//               key={site.id}
//               coordinates={site.coordinates}
//               onClick={() => {
//                 if (site.path) {
//                   navigate(`/${site.path}`); 
//                 } else if (site.url) {
//                   window.open(site.url, "_blank"); 
//                 }
//               }}
//               style={{ cursor: "pointer" }}
//             >
//               {/* Pin */}
//               <circle
//                 r={6}
//                 fill="#007bff"
//                 stroke="#fff"
//                 strokeWidth={2}
             
//               />

//               <text
//                 textAnchor="middle"
//                 y={-15}
//                 style={{
//                   fontFamily: "system-ui",
//                   fill: "#333",
//                   fontSize: "11px",
//                   fontWeight: "600",
//                 }}
//               >
//                 {site.name}
//               </text>
//             </Marker>
//           ))}
//         </ComposableMap>
//       </div>
//     </div>
//   );
// };


import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import "../../pages/GlobalMap/GlobalMap.css";

const worldGeoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const impactSites = [
  { id: 2, name: 'USA', coordinates: [-98.5, 39.8] },
  {
    id: 3,
    name: "Thailand",
    coordinates: [100.99, 15.87],
    path: "Navamindradhiraj_Unniversity", 
  },
  { id: 4, name: 'South Korea', coordinates: [127.8, 40.5], path: "KyungheeUniversity" },
  {
    id: 5,
    name: "India",
    coordinates: [78.9, 21.5],
    path: "IIT_Bombay_University",
  },
  { id: 6, name: 'Switzerland', coordinates: [8.2, 46.8], path: "ethzurichworkshop" },
  { id: 7, name: 'China', coordinates: [104.2, 35.9] },
  { id: 8, name: 'Australia', coordinates: [133.8, -25.3] },
  { id: 9, name: 'Japan', coordinates: [138.2, 36.2] },
];

export const GlobalMap = ({ name = "Impact" }) => {
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const handleMarkerClick = (site) => {
    if (site.path) {
      const pathParts = location.pathname.split("/");
    
      const currentSiteType = pathParts[2] || "school"; 

      const finalURL = `/reallives/${currentSiteType}/${site.path}`;
      
      navigate(finalURL); 
    } else if (site.url) {
      window.open(site.url, "_blank"); 
    }
  };

  return (
    <div className="map-container">
      <h1 className="map-title">Global Impact</h1>

      <div className="map-wrapper">
        <ComposableMap
          projectionConfig={{
            scale: 145,
            center: [0, 5],
          }}
          width={800}
          height={400}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={worldGeoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#CFD8DC", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {impactSites.map((site) => (
            <Marker
              key={site.id}
              coordinates={site.coordinates}
              onClick={() => handleMarkerClick(site)}
              style={{ cursor: "pointer" }}
            >
              <g>
                <circle
                  r={6}
                  fill="#007bff"
                  stroke="#fff"
                  strokeWidth={2}
                />
                <text
                  textAnchor="middle"
                  y={-15}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#333",
                    fontSize: "11px",
                    fontWeight: "600",
                    pointerEvents: "none" 
                  }}
                >
                  {site.name}
                </text>
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};
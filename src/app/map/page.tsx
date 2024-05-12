// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   GoogleMap,
//   LoadScript,
//   DirectionsService,
//   DirectionsRenderer,
// } from "@react-google-maps/api";

// // Define styles for the Google Map container
// const containerStyle = {
//   width: "800px",
//   height: "400px",
// };

// // Default center of the map
// const center = {
//   lat: 37.7749, // Example: San Francisco latitude
//   lng: -122.4194, // Example: San Francisco longitude
// };

// const MapComponent: React.FC = () => {
//   const router = useRouter();
//   const [directions, setDirections] =
//     useState<google.maps.DirectionsResult | null>(null);

//   const { part1, part2, part3, part4 } = router.query;

//   // Function to fetch directions
//   const fetchDirections = (
//     origin: string,
//     destination: string,
//     waypoints: string[]
//   ) => {
//     const directionsService = new google.maps.DirectionsService();
//     directionsService.route(
//       {
//         origin,
//         destination,
//         waypoints: waypoints.map((location) => ({ location, stopover: true })),
//         travelMode: google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK && result) {
//           setDirections(result);
//         } else {
//           console.error(`Error fetching directions ${result}`);
//         }
//       }
//     );
//   };

//   useEffect(() => {
//     if (part1 && part2 && part3 && part4) {
//       fetchDirections(part3.toString(), part4.toString(), [part2.toString()]);
//     }
//   }, [part1, part2, part3, part4]);

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
//         {directions && <DirectionsRenderer directions={directions} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponent;

import React from "react";

function page() {
  return <div>Map</div>;
}

export default page;

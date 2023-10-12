import React, { useEffect } from "react";
import { useApiData } from "../../context/ApiContext";
const GoogleMap = () => {
  const { apiData } = useApiData();
  useEffect(() => {
    // Defining the initialize Map function
    function initMap() {
      // Creating a new map
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.294877, lng: 44.399578 },
        zoom: 6,
      });

      // 👇 Adding markers for each location from API data
      apiData.forEach((location) => {
        const marker = new window.google.maps.Marker({
          // 👇 there is not problem here the GPS location is inverted from the api it slef
          position: { lng: location["GPS Lat"], lat: location["GPS Lon"] },
          map: map,
          title: location["Location Description"],
          icon: {
            // custom pinPoint URL icon
            url: "/LocationMarker.png",
            scaledSize: new window.google.maps.Size(60, 60),
          },
        });

        // Creating an info window of each location (that have a photos)
        const infoWindowContent = document.createElement("div");

        // Creating and append h2 tag
        const h2 = document.createElement("h2");
        h2.textContent = location["Location Description"];
        infoWindowContent.appendChild(h2);

        // Creating and append p tag
        const p = document.createElement("p");
        p.textContent = location["Province"];
        infoWindowContent.appendChild(p);

        // Create and append div for the image
        const img = document.createElement("img");
        img.src =
          location.Photos && location.Photos !== 0
            ? location.Photos[0].large.url
            : "/NoPhotosArray.png";
        img.alt = "Location Photo";
        img.classList.add("locationImg");
        infoWindowContent.appendChild(img);

        const infoWindow = new window.google.maps.InfoWindow({
          content: infoWindowContent,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
        // }
      });
    }

    // Check if the Google Maps JavaScript API is already loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Load the Google Maps API script
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        initMap();
      };
    }
  }, [apiData]);

  return (
    <div className="relative mt-[70px]">
      <h1 className="w-full text-sm text-primary bg-white font-bold px-5 py-2 text-center">
        &#x58; This map is complete from a programming perspective, but to
        include Google Maps, you need to fill out payment information for
        billing. And I don't have debit Card (: &#x58;
        {/* <br /> */}{" "}
        <span className="text-blue-500">
          &#x58; Refresh the Page if the Map isn't loading &#x58;
        </span>
      </h1>
      <div
        id="map"
        className=""
        style={{ width: "100%", height: "850px" }}
      ></div>
    </div>
  );
};

export default GoogleMap;

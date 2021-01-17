import React, { useState } from "react";
import "./styles.css";
const travel = {
  Solo: [
    {
      name: "Nainital",
      rating: "3.5/5",
      tips:
        "Travel to Pantnagar nearest airport to Nainital from New Delhi just at INR 3,700."
    },
    {
      name: "Shimla",
      rating: "4/5",
      tips:
        "Reach Shimla by catching a flight to the nearest airport at Chandigarh. Low fares from New Delhi to Chandigarh starting at just INR 1,637."
    }
  ],

  Friends: [
    {
      name: "Manali",
      rating: "2.5/5",
      tips:
        "Just don’t wait and get lured away to this exotic destination on earth"
    },
    {
      name: "Andaman",
      rating: "4/5",
      tips:
        "Andaman is bound to offer you and your amigos a better diving and snorkeling experience than what Hrithik could get in ‘Zindagi Na Milegi Dobara’!"
    }
  ],

  Adventure: [
    {
      name: "Kolad",
      rating: "4/5",
      tips:
        "This is a paradise for the adventure seekers and the nature lovers."
    },
    {
      name: "Ladakh",
      rating: "5/5",
      tips:
        "Just don’t wait and get lured away to this exotic destination on earth"
    }
  ]
};
export default function App() {
  const [data, setData] = useState("Solo");
  console.log(data);

  return (
    <div className="App">
      <h1>🏄Best Travel Spots In India</h1>
      <p>Some of my favourite travel types. Click on a type to know more </p>

      {Object.keys(travel).map((typeOfTravel) => {
        return (
          <button
            key={typeOfTravel}
            onClick={() => {
              setData(typeOfTravel);
            }}
          >
            {typeOfTravel}
          </button>
        );
      })}
      <hr />
      <div>
        {travel[data].map((place) => {
          return (
            <ul
              style={{
                border: "1px solid rgb(199, 199, 255)",
                listStyleType: "none",
                textAlign: "left",
                padding: "1rem",
                margin: "1rem"
              }}
            >
              <li>
                <strong>Name :</strong> {place.name}
              </li>
              <li>
                <strong>Rating :</strong> {place.rating}
              </li>
              <li>
                <strong>Tips To Travel :</strong> {place.tips}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

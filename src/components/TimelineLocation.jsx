import React from "react";

function TimelineLocation({ locationName, date, locationImg }) {
  return (
    <>
      <div className="timeline__location">
        <h2 className="timeline__header--location">{locationName}</h2>
        <h1 className="timeline__header">{date}</h1>
        <figure className="timeline__img--wrapper">
          <img
            className="timeline__img"
            src={locationImg}
            alt=""
            loading="lazy"
          />
        </figure>
      </div>
    </>
  );
}

export default TimelineLocation;

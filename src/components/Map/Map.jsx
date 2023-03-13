import React from "react";
import { MapStyles } from "./MapStyles";

const Map = () => {
  return (
    <MapStyles>
      <iframe
        title="locationMap"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.266637989746!2d-0.6301624180297849!3d51.521165696986735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487665bf91ebd50f%3A0xa65bd896c1c15321!2sSlough%20Dental%20Hygiene!5e0!3m2!1sen!2sde!4v1675679115144!5m2!1sen!2sde"
      ></iframe>
    </MapStyles>
  );
};

export default Map;

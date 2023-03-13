import React from "react";
import { HostsStyles, HostContainer } from "./HostsStyles";

const Us = ({ json }) => {
  console.log(json.listing[0]);
  return (
    <HostsStyles>
      <div className="section-divider-top">
        <h2>{json.section}</h2>
      </div>
      <HostContainer>
        {json.listing.map((host, i) => (
          <div class="card">
            <div class="imgBox">
              <img src={host.frontImg} alt="host front" />
              <img src={host.backImg} alt="host back" />
            </div>
            <div class="details">
              <div class="content">
                <h5>{host.name}</h5>
                {host.text.map((txt, indexedDB) => (
                  <p>{txt}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </HostContainer>
    </HostsStyles>
  );
};

export default Us;

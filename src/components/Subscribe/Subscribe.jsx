import React from "react";
import { SubscribeStyles } from "./SubscribeStyles";
import Button77 from "../Button/Button77";

const Subscribe = () => {
  // const alert = () => {
  //    alert("Your file is being uploaded!");
  // };

  return (
    <SubscribeStyles>
      <div className="section-divider-top">
        <h2 className="title">Subscribe to our Newsletter</h2>
      </div>
      <div>
        <form method="post" action="https://formspree.io/email@domain.tld">
          <input
            className="email-entry-container"
            placeholder="Detective! Enter your email to receive exciting mysteries in your mailbox"
            type="email"
            name="_replyto"
          />
        </form>
        <div className="btn-container">
          <Button77 text="Subscribe Now" />
        </div>
      </div>
    </SubscribeStyles>
  );
};

export default Subscribe;

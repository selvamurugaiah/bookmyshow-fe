import { Button, Container } from "react-bootstrap";

import React from "react";

const Footer = () => {
  return (
    <Container className="Footer">
      <div className="listyourshow">
        <h3>List your Show</h3>
        <p>
        List your Show
Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow

        </p>
        <Button variant="danger">Contact Us!</Button>
      </div>
      <div className="customer">
        {
          /*
          <div className="box">
          <SupportAgentIcon fontSize="large" />
          24/7 CUSTOMER SUPPORT
        </div>
          <div className="box">
          <ConfirmationNumberSharpIcon fontSize="large" />
          RE-CONFIRM TICKET
        </div>
        <div className="box">
          <ForwardToInboxSharpIcon fontSize="large" />
          SUBSCRIBE TO NEWSLETTER
        </div>
           
          */
        }
        
      
      </div>
    </Container>
  );
};

export default Footer;

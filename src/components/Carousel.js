import React, { useState } from "react";
import { Carousel } from "react-bootstrap";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1682766328155_sunburnweb.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1682676045514_gvprakashkumarmaydesktop.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680083241797_rewardsweb.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ControlledCarousel;

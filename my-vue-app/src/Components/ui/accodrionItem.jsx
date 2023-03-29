import React, { useState } from "react";
import "../styles/questions.scss";
const AccodrionItem = ({ title, description }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow((prevState) => !prevState);

  return (
    <div className="accordion-wrapper">
      <div className="accordion-header" onClick={handleShow}>
        {show ? <p>-</p> : <p>+</p>}
        <h3 className="accordion-header-text accordion__title">{title}</h3>
      </div>
      <div className="accordion-body">
        {show && <p className="text-md accordion-description">{description}</p>}
      </div>
    </div>
  );
};

export default AccodrionItem;

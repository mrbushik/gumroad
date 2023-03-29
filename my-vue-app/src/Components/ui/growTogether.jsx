import React from "react";
import "../styles/growTogether.scss";
const GrowTogether = () => {
  return (
    <div className="grid-halves university-gum-characters wf-section">
      <div className="bg-pink border-right">
        <div className="column-padding">
          <div className="content-grid grow__main-title">
            <h2 className="text-xl ">Grow together</h2>
            <p className="text-md grow__text-right">
              Sell what you know and ask questions about what you don’t. Start
              learning in the Community, where thousands of alums are posting
              advice, tips, and encouragement. Introduce yourself, learn from
              others, and get inspired.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="growl-img"
          src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619d0b015cbf7851b39ae4bc_gum-characters.svg"
        />
      </div>
    </div>
  );
};

export default GrowTogether;

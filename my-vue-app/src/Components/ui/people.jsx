import React from "react";
import "../styles/people.scss";

const People = () => {
  const peopleItems = [
    {
      url: "https://assets-global.website-files.com/617825a38a48f37525a3c16f/619d1d67fd0195e2f6a60a2f_jesse-enkamp.png",
      name: "jesseenkamp",
      title: "Teaching Karate across the world",
      description: "Jesse Enkamp, Educator",
      color: "#98282a",
    },
    {
      url: "https://assets-global.website-files.com/617825a38a48f37525a3c16f/619d1e903ae66d7d5ac93542_daniel-vassallo.png",
      name: "dvassallo",
      title: "Making small bets with big payoffs",
      description: "Daniel Vassallo, Developer",
      color: "hsla(7.039106145251395, 75.53%, 53.53%, 1.00)",
    },
    {
      url: "https://assets-global.website-files.com/617825a38a48f37525a3c16f/619d1e5e9ecdb52a3921faef_floortje-visser.png",
      name: "artwithflo",
      title: "Creating original art as a full-time business",
      description: "Floortje Visser, Artist",
      color: "#98282a",
    },
    {
      url: "https://assets-global.website-files.com/617825a38a48f37525a3c16f/619d1d5121fceb3a3ffd389e_kristin-garner.png",
      name: "blossomandroot",
      title: "Building an entire homeschool curriculum",
      description: "Kristin Garner, Educator",
      color: "hsla(7.039106145251395, 75.53%, 53.53%, 1.00)",
    },
    {
      url: "https://assets-global.website-files.com/617825a38a48f37525a3c16f/619d1d5f0ade221cc5300ad4_dru-riley.png",
      name: "DruRly",
      title: "Writing weekly research briefs as a newsletter",
      description: "Dru Riley, Writer",
      color: "#23a094",
    },
    {
      url: "https://assets-global.website-files.com/617825a38a48f37525a3c16f/619d1e270ade2295f9300e23_ed-latimore.png",
      name: "edwardlatimore",
      title: "Generated over $100,000 selling a Twitter Growth eBook",
      description: "Ed Latimore, Writer",
      color: "#4a99e9",
    },
  ];
  return (
    <div className="people__section">
      <div className="container">
        <div className="section uni-creator-stories bg-black wf-section people__main-wrapper">
          {peopleItems.map((items, index) => (
            <div className="flex w-dyn-item" key={index}>
              <a className="card-wrap pink-shadow w-inline-block">
                <div
                  className="cs-card-thumbnail-wrap"
                  style={{
                    backgroundImage: "url(" + items.url + ")",
                  }}
                >
                  <div className="name-tag cs-card">
                    <div className="name-tag-text">{items.name}</div>
                  </div>
                </div>
                <div className="cs-card-content-wrap">
                  <div className="cs-card-content">
                    <h3 className="text-md">{items.title}</h3>
                    <h4 className="text-md" style={{ color: items.color }}>
                      {items.description}
                    </h4>
                  </div>
                  <div className="cs-card-read-more">Read More -></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;

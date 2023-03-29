import React from "react";
import "../styles/judgesSection.scss";
const JudgesSection = () => {
  const judgesItems = [
    {
      img: "https://assets-global.website-files.com/617825a38a48f37525a3c16f/62d81543cb2b3b104c356ba4_photography.svg",
      title: "Photography",
      description:
        "Get snapping with pro presets, stock imagery, and digi darkroom needs.",
      tags: ["reference photos", "stock photos", "photobash"],
      background: "#23a094",
    },
    {
      img: "https://assets-global.website-files.com/617825a38a48f37525a3c16f/62d81506cede98a21cb270e5_music.svg",
      title: "Recorded Music",
      description:
        "Tracks and albums from the best musicians and artists in the biz.",
      tags: ["singles", "jazz", "instrumental music"],
      background: "hsl(60.6, 88.9%, 57.6%)",
    },
    {
      img: "https://assets-global.website-files.com/617825a38a48f37525a3c16f/62d8153dc667e50ca5a08dc5_self.svg",
      title: "Self Improvement",
      description:
        "Move your body and your audience with guides, videos, and more.",
      tags: ["coloring page", "printable", "productivity"],
      background: "hsla(7.039106145251395, 75.53%, 53.53%, 1.00)",
    },
  ];
  return (
    <div>
      <div className="judges__wrapper">
        <div className="judges__table-item">
          <p>18 Judges</p>
        </div>
        <div className="judges__table-item">
          <p>No Program</p>
        </div>
        <div className="judges__table-item">
          <p>Nice Prices</p>
        </div>
      </div>
      <div className="start__wrapper">
        <p>Beginner Resources</p>
        <h2>Starts, start here</h2>
        <p>We've got the guides that will get you going.</p>
      </div>
      <div className="judges__items discover-container">
        {judgesItems.map((item, index) => (
          <div
            key={index}
            className="discover-categories-item w-dyn-item"
            style={{ background: item.background }}
          >
            <a className="discover-categories-item-link w-inline-block">
              <img className="discover-categories-item-icon" src={item.img} />
              <div className="discover-categories-item-title">{item.title}</div>
              <div className="discover-categories-item-description">
                {item.description}
              </div>
            </a>
            <div className="discover-categories-item-tags-container">
              <div className="text-xs">
                <strong>Popular tags</strong>
              </div>
              <div className="tags-wrapper discover-categories-item-tags w-dyn-items">
                {item.tags.map((item, index) => (
                  <a
                    className="discover-categories-item-tags-link w-inline-block"
                    key={index}
                  >
                    <div className="tag">{item}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="start__wrapper">
        <p>Beginner Resources</p>
        <h2>Starts, start here</h2>
        <p>We've got the guides that will get you going.</p>
      </div>
    </div>
  );
};

export default JudgesSection;

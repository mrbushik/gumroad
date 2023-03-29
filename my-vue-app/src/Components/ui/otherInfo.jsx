import React from "react";
import "../styles/otherInfo.scss";
const OtherInfo = () => {
  const otherCardsItems = [
    {
      url: "https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619d0efd2095e3e173dfae1b_make-money-as-an-artist.svg",
      title: "Five ways digital artists make money online",
      description:
        "Making money as a Digital Artist is a dream for many artists. Read this article to learn the 5 actionable ways digital artists can make...",
    },
    {
      url: "https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619d0efeff3dc20c7b3d7b40_25k-with-philip-kiely.png",
      title: "From ‘how-to’ articles to $25k in one month",
      description:
        "Six days before graduating from Grinnell College, at 21, Philip Kiely launched his first product on Gumroad. And 24 hours later...",
    },
    {
      url: "https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619d0efe12c8a5dac1d0ef52_making-money-with-jose-rosado.png",
      title: "Making money online with Jose Rosado, part 1",
      description:
        "Jose and Justin talk about affiliate marketing, personal branding, communicating with your audience, and more.     ",
    },
  ];
  return (
    <div>
      <div className="start__wrapper other__info-separator">
        <p>Beginner Resources</p>
        <h2>Starts, start here</h2>
        <p>We've got the guides that will get you going.</p>
      </div>
      <div className="other__cards-wrapper grid-thirds spacing-2xl">
        {otherCardsItems.map((item, index) => (
          <a href="/" className="card-wrap w-inline-block " key={index}>
            <div className="card-thumbnail-wrap">
              <img className="card-thumbnail" src={item.url} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <div className="card-description">{item.description}</div>
              <div className="card-read-more">
                <strong>Read More -></strong>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OtherInfo;

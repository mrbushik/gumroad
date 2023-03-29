import React from "react";
import "../styles/mainBanner.scss";
const MainBanner = () => {
  return (
    <div className="main__banner-wrapper">
      <div className="bg-pink border-right">
        <div className="column-padding">
          <div className="tablet-centered">
            <div className="content-grid home-hero">
              <h1>
                Go from <span className="line-break-fixed">zero to $1</span>
              </h1>
              <p>
                With Gumroad, anyone can earn their first dollar online. Just
                start with what you know, see what sticks, and get paid. It’s
                that easy.
                <br />
              </p>
              <a className='shadow-button-wrap w-inline-block'><div className='shadow-button-text'>Start Selling</div></a>
            </div>
          </div>
        </div>
      </div>
      <div className="main__banner-img bg-yellow-dark">
        <div className="column-padding centered">
          <div className="callout-wrap">
            <img
              className="callout-image creator"
              src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61942b84ec3d406199f07d78_vegalia.png"
            />
            <img
              className="sticker home-02"
              src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f97a0f047aaa46093f3b3_paint-brush.svg"
            />
            <img
              className="sticker home-01"
              src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6195275a9e5f4655891de886_gum-coins.svg"
            />
            <a className="name-tag w-inline-block">
              <div>Vegalia</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;

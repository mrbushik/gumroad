import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/modal.scss";
const Modal = ({ onToggle }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="modal-bg">
      <span className="cross-stand-alone" onClick={onToggle}></span>
      <div className="modal__wrapper">
        <div className="modal__text-forms">
          <h2 className="modal__title">Submit your deck to us</h2>
          <p className="modal__description">
            We only review startups we believe can be worth $1 billion or more,
            which means you have a path to tens of millions in revenue. If
            that's you, fill out the form. We're currently not accepting D2C/CPG
            goods
          </p>
          <div className="modal__form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="info__modal-form">
                <h5>
                  Provide at least one of the following. No Bitly links, and
                  ensure your deck link is publicly viewable.
                </h5>
                <p className="modal__placeholder">Link to deck</p>
                <input {...register("Link to deck")} />
                <p className="modal__placeholder">Link to memo</p>
                <input {...register("Link to memo")} />
              </div>
              <p className="modal__placeholder">
                One or two sentences describing what you do
              </p>
              <textarea {...register("description")} />
              <p className="modal__placeholder">
                Startup website (if available)
              </p>
              <input {...register("firstName")} />
              <p className="modal__placeholder">Email address</p>
              <input {...register("firstName")} />
              <p className="modal__placeholder">Personal LinkedIn URL</p>
              <input {...register("LinkedIn")} />
              <p className="modal__placeholder">Region your startup targets</p>
              <select {...register("region")}>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="LatAm">LatAm</option>
              </select>
              <p className="modal__placeholder">Startup valuation</p>
              <select {...register("valuation")}>
                <option value="$5M-$10M">$5M-$10M</option>
                <option value="$11M-$15M">$11M-$15M</option>
                <option value="$16M-$20M">$16M-$20M</option>
                <option value="$21M-$25M">$21M-$25M</option>
                <option value="$26M+">$26M+</option>
              </select>
              <div className="submit__form" onClick={handleSubmit(onSubmit)}>
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

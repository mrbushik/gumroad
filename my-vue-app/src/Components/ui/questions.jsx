import React from "react";
import "../styles/questions.scss";
import AccodrionItem from "./accodrionItem";
const Questions = () => {
  const accordionsItems = [
    {
      title: "How Do I Get Paid?",
      description:
        "Gumroad’s goal is to help creators make a living doing what they love, so we make it as simple as possible to get paid. How we pay creators, whether through direct deposit or PayPal, varies by country.",
    },
    {
      title: "What Are The Fees?",
      description:
        "Unlike other platforms, Gumroad doesn’t charge you a monthly fee. Instead, our fees are deducted as a small percentage of every sale, so we only make money when you do.",
    },
    {
      title: "Can I Use Gumroad for Memberships?",
      description:
        "Yes!\n" +
        "\n" +
        "Whether it’s for a podcast, online course, or SaaS subscriptions, Gumroad makes it easy to manage memberships.",
    },
  ];

  return (
    <div className="container question__container">
      <div className="question__text">
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="text-md">
          Don't see your question? <a className="link">Visit our help center</a>
          .
        </p>
      </div>

      <div className="">
        {accordionsItems.map((item, index) => (
          <AccodrionItem
            key={index}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;

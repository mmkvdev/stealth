import React from "react";
import "./styles.css";
import faqList from "../../data/faqList";

const classes = "flex justify-content-between align-items-center";

function Faqs() {
  return (
    <>
      <div className="flex justify-content-center mt-75 w-100 h-50">
        <div className="w-50" data-testid="faq-list">
          <div className="item my-10">
            <div className={`ques ${classes} pa-15 mb-3`}>
              <h4 className="flex align-items-center my-2">
                What is HackerRank?
              </h4>
              <span>-</span>
            </div>
            <div className={`closed open ${classes}`}>
              <p className="my-0">
                HackerRank is a place where programmers from all over the world
                come together to solve problems in a wide range of Computer
                Science domains such as algorithms, machine learning, or
                artificial intelligence, as well as to practice different
                programming paradigms like functional programming.
              </p>
              <div className={classes}>
                <button className="danger small">Delete</button>
              </div>
            </div>
          </div>
          <div className={classes}>
            <div>
              <textarea
                className="ma-8 w-100"
                placeholder="Enter the question"
                data-testid="add-question"
                value=""
              />
              <textarea
                className="ma-8 w-100"
                placeholder="Enter the answer"
                data-testid="add-answer"
                value=""
              />
            </div>
            <button data-testid="add-faq-button">Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;

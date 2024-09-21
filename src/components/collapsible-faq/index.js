import React, { useState } from "react";
import "./styles.css";
import faqList from "../../data/faqList";

const classes = "flex justify-content-between align-items-center";

function Faqs() {
  const [faqItems, setFAQItems] = useState(faqList);
  const [openQuestionItemIndex, setOpenQuestionItemIndex] = useState(null);
  const [newFAQItem, setNewFAQItem] = useState({
    question: "",
    answer: "",
  });

  const handleAnswerVisibility = (answerItemIndex) => {
    setOpenQuestionItemIndex(
      openQuestionItemIndex === answerItemIndex ? null : answerItemIndex
    );
  };

  const getAnswerItemClassName = (index) => {
    return openQuestionItemIndex === index ? "open" : "closed";
  };

  const expandQuestion = (index) =>
    openQuestionItemIndex === index ? "-" : "+";

  const deleteQuestion = (questionIndex) => {
    setFAQItems(faqItems.filter((_, i) => i !== questionIndex));
  };

  const renderFAQListItems = (listItem, listIndex) => (
    <div className="item my-10" key={listIndex}>
      <div
        className={`ques ${classes} pa-15 mb-3`}
        onClick={() => handleAnswerVisibility(listIndex)}
      >
        <h4 className="flex align-items-center my-2">{listItem.question}</h4>
        <span>{expandQuestion(listIndex)}</span>
      </div>
      <div className={`${getAnswerItemClassName(listIndex)} ${classes}`}>
        <p className="my-0">{listItem.answer}</p>
        <div className={classes} onClick={() => deleteQuestion(listIndex)}>
          <button className="danger small">Delete</button>
        </div>
      </div>
    </div>
  );

  const renderNewFAQItem = () => (
    <div className={classes}>
            <div>
              <textarea
                className="ma-8 w-100"
                placeholder="Enter the question"
                data-testid="add-question"
                onChange={(e) => handleNewFAQItemChange(e, 'question')}
                value={newFAQItem.question}
              />
              <textarea
                className="ma-8 w-100"
                placeholder="Enter the answer"
                data-testid="add-answer"
                onChange={(e) => handleNewFAQItemChange(e, 'answer')}
                value={newFAQItem.answer}
              />
            </div>
            <button data-testid="add-faq-button" onClick={addFAQ}>Add</button>
          </div>
  )

  const addFAQ = () => {
    if (!newFAQItem.question || !newFAQItem.answer) {
      alert("Please add both question and answer");
      return;
    }

    setFAQItems([
      ...faqItems,
      {
        ...newFAQItem,
      },
    ]);
    setNewFAQItem({
      question: '',
      answer: ''
    });
    setOpenQuestionItemIndex(null);
  };

  const handleNewFAQItemChange = (userInput, faqType) => {
    const { value } = userInput.target;
    setNewFAQItem({
      ...newFAQItem,
      [faqType]: value
    })
  };

  return (
    <>
      <div className="flex justify-content-center mt-75 w-100 h-50">
        <div className="w-50" data-testid="faq-list">
          {faqItems.map((listItem, listIndex) =>
            renderFAQListItems(listItem, listIndex)
          )}
          {renderNewFAQItem()}
        </div>
      </div>
    </>
  );
}

export default Faqs;

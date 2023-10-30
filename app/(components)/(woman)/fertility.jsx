"use client";
import React, { useState } from "react";

function Fertility() {
  // Create state to keep track of which questions are open
  const [openQuestions, setOpenQuestions] = useState([]);

  // Define the questions and their respective answers
  const questions = [
    {
      id: 1,
      question: "How is your due date calculated?",
      answer:
        "Your due date is typically calculated based on the first day of your last menstrual period and the average length of your menstrual cycle. However, there are more precise methods used by healthcare professionals.",
    },
    {
      id: 2,
      question: "How old is too old to have a baby?",
      answer:
        "The optimal age for childbearing varies for each person. While fertility decreases with age, there is no strict age limit for having a baby. It's important to consult with a healthcare provider for guidance.",
    },
    {
      id: 3,
      question: "Hair changes during pregnancy",
      answer:
        "Pregnancy hormones can lead to changes in hair texture and growth. Some women experience thicker, shinier hair, while others may notice increased hair shedding. These changes are temporary.",
    },
    {
      id: 4,
      question: "Am I having a miscarriage?",
      answer:
        "Signs of a miscarriage may include bleeding, cramping, and tissue passing. If you suspect a miscarriage, it's crucial to seek medical attention.",
    },
    {
      id: 5,
      question: "What are postpartum mood disorders?",
      answer:
        "Postpartum mood disorders, like postpartum depression and anxiety, can affect new mothers. They involve symptoms such as sadness, anxiety, and mood swings, and should be discussed with a healthcare professional.",
    },
    {
      id: 6,
      question: "How is basal body temperature (BBT) used?",
      answer:
        "Basal body temperature tracking can help identify ovulation patterns. A slight rise in BBT can signal ovulation, making it a useful tool for fertility tracking.",
    },
    {
      id: 7,
      question: "The stages of fetus development",
      answer:
        "Fetal development involves distinct stages, from conception to birth. These stages include fertilization, embryonic development, and fetal growth. The process is remarkable and complex.",
    },
    {
      id: 8,
      question: "PCOS and pregnancy",
      answer:
        "Polycystic Ovary Syndrome (PCOS) can impact fertility, but many women with PCOS can still conceive with medical support. Consultation with a healthcare provider is important.",
    },
    {
      id: 9,
      question: "Misconceptions of ovulation",
      answer:
        "There are various misconceptions about ovulation, including the belief that it always occurs on the 14th day of the menstrual cycle. Ovulation timing varies among individuals.",
    },
    {
      id: 10,
      question: "Egg freezing",
      answer:
        "Egg freezing is a method for preserving a woman's fertility. It involves collecting and freezing eggs for future use, which can be an option for women who wish to delay childbearing.",
    },
  ];

  // Function to toggle the opening of questions
  const toggleQuestion = (id) => {
    if (openQuestions.includes(id)) {
      setOpenQuestions(openQuestions.filter((item) => item !== id));
    } else {
      setOpenQuestions([...openQuestions, id]);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Fertility Blog</h2>

        {questions.map((q) => (
          <div key={q.id} className="mb-4">
            <div
              className="cursor-pointer flex justify-between items-center p-2 border rounded"
              onClick={() => toggleQuestion(q.id)}
            >
              <div className="font-semibold">{q.question}</div>
              {openQuestions.includes(q.id) ? (
                <span className="text-blue-500">-</span>
              ) : (
                <span className="text-blue-500">+</span>
              )}
            </div>
            {openQuestions.includes(q.id) && (
              <div className="bg-white p-2 border-t">{q.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Fertility;

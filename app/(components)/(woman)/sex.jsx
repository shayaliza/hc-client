"use client";
import React, { useState } from "react";

function Sex() {
  // Create state to keep track of which questions are open
  const [openQuestions, setOpenQuestions] = useState([]);

  // Define the questions and their respective answers
  const questions = [
    {
      id: 1,
      question: "Female Ejaculation and Squirting",
      answer:
        "Female ejaculation, often associated with 'squirting,' involves the release of fluid from the Skene's glands. It's a natural phenomenon and can occur during sexual arousal and orgasm in some women.",
    },
    {
      id: 2,
      question: "What Is the Clitoris and Where Is It?",
      answer:
        "The clitoris is a highly sensitive organ located above the vaginal opening. It plays a crucial role in sexual pleasure and can be stimulated for arousal and orgasms.",
    },
    {
      id: 3,
      question: "5 Things to Know About Your Sex Drive",
      answer:
        "Your sex drive can be influenced by various factors, including hormones, stress, and emotional connection. It's essential to understand your own desires and communicate with your partner.",
    },
    {
      id: 4,
      question: "How Many Types of Female Orgasm Are There?",
      answer:
        "There are different types of female orgasms, including clitoral, vaginal, and even blended orgasms. Women can experience pleasure in various ways, and exploring your body can help you discover what works for you.",
    },
    {
      id: 5,
      question: "What It's Like to Have an STD",
      answer:
        "Sexually transmitted diseases (STDs) can vary in symptoms and severity. They can range from mild discomfort to more serious health issues. It's crucial to practice safe sex and get regular check-ups.",
    },
    {
      id: 6,
      question: "Masturbating During Your Period",
      answer:
        "Masturbating during your period is safe and can provide relief from menstrual cramps and stress. It's a personal choice, and many women find it enjoyable and empowering.",
    },
    {
      id: 7,
      question: "Vaginal Tightness Tips and More",
      answer:
        "Vaginal tightness can be influenced by various factors, and some women seek exercises or treatments to improve muscle tone. It's essential to discuss this topic openly with a healthcare provider.",
    },
    {
      id: 8,
      question: "The Science of Sexual Satisfaction",
      answer:
        "Sexual satisfaction is a complex interplay of physical, emotional, and psychological factors. Understanding your desires, communication with your partner, and mutual consent play key roles in sexual satisfaction.",
    },
    {
      id: 9,
      question: "Condom Use from a Female Perspective",
      answer:
        "Condoms are a highly effective method for preventing STDs and unwanted pregnancies. From a female perspective, they offer protection and control over sexual health. It's essential to know how to use them correctly.",
    },
    {
      id: 10,
      question: "A Beginner's Guide to Sex",
      answer:
        "A beginner's guide to sex should focus on consent, communication, and safety. It's important to explore your desires at your own pace and to prioritize your comfort and well-being.",
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
        <h2 className="text-2xl font-bold mb-4">Sex Blog</h2>

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

export default Sex;

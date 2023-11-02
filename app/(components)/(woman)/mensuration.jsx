"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Mensuration() {
  // Create state to keep track of which questions are open
  const [openQuestions, setOpenQuestions] = useState([]);

  // Define the questions and their respective answers
  const questions = [
    {
      id: 1,
      question: "What is the menstrual cycle?",
      answer:
        "The menstrual cycle is a natural monthly process in which the female body prepares for pregnancy. It involves hormonal changes, the shedding of the uterine lining (menstruation), and ovulation.",
    },
    {
      id: 2,
      question: "What is an irregular menstrual cycle?",
      answer:
        "An irregular menstrual cycle is when the time between periods or the flow varies significantly. It can be caused by various factors and may need medical attention if severe.",
    },
    {
      id: 3,
      question: "What is spotting and why does it happen?",
      answer:
        "Spotting is light, irregular bleeding between periods. It can occur due to various reasons, including hormonal changes, pregnancy, or underlying health issues.",
    },
    {
      id: 4,
      question: "How to relieve menstrual cramps?",
      answer:
        "Menstrual cramps can be relieved with over-the-counter pain relievers, heat therapy, exercise, and relaxation techniques. Consult with a healthcare provider if cramps are severe.",
    },
    {
      id: 5,
      question: "Skin changes during your cycle",
      answer:
        "Hormonal fluctuations during the menstrual cycle can lead to changes in skin condition. Some women experience acne, oily skin, or dryness at different times of the month.",
    },
    {
      id: 6,
      question: "Menopause and perimenopause",
      answer:
        "Menopause is the cessation of menstruation, typically around the age of 45-55. Perimenopause is the transitional phase leading to menopause, marked by hormonal changes and symptoms.",
    },
    {
      id: 7,
      question: "The complete ovulation guide",
      answer:
        "Ovulation is the release of an egg from the ovary, a key event in the menstrual cycle. It's the most fertile time for conception. The complete guide covers ovulation signs, tracking, and more.",
    },
    {
      id: 8,
      question: "Getting wet discharge and other fluids",
      answer:
        "Vaginal discharge can vary throughout the menstrual cycle. It's influenced by hormonal changes. Wetter or egg-white-like discharge often indicates ovulation.",
    },
    {
      id: 9,
      question: "Do you get your period on birth control pills?",
      answer:
        "Birth control pills can suppress menstruation. Withdrawal bleeding may occur during the pill-free interval. It's not a natural period but rather a result of hormonal changes.",
    },
    {
      id: 10,
      question: "The myth of moon phases and menstruation",
      answer:
        "There is no scientific evidence to support the myth that menstrual cycles are linked to moon phases. Menstruation is primarily governed by hormonal factors.",
    },
    {
      id: 11,
      question: "Do you get blood clots during your period?",
      answer:
        "Small blood clots in menstrual blood are normal and usually harmless. Larger or more frequent blood clots may indicate an underlying issue and should be discussed with a healthcare provider.",
    },
    {
      id: 12,
      question: "Vagina",
      answer:
        "The vagina is part of the female reproductive system and serves as a passage for menstrual blood, childbirth, and sexual activity. It is an important anatomical structure.",
    },
    {
      id: 13,
      question: "Why is my period late?",
      answer:
        "A late period can occur due to various reasons, including stress, hormonal imbalances, pregnancy, or medical conditions. If you're concerned, consult with a healthcare provider.",
    },
    {
      id: 14,
      question: "Ovulation bleeding",
      answer:
        "Some women experience light bleeding or spotting during ovulation. It's typically harmless and may result from the release of an egg from the ovary.",
    },
    {
      id: 15,
      question: "What is normal and high period volume?",
      answer:
        "Normal menstrual flow varies among individuals. High volume may indicate heavy menstrual bleeding (menorrhagia), which can have various causes and should be evaluated by a healthcare provider.",
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
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="p-4 bg-gray-100 mx-5 ml-5 rounded-lg shadow-md"
      >
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold text-c4 mb-4">
            Menstruation Blog
          </h2>
        </div>
        {questions.map((q) => (
          <motion.div
            key={q.id}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="mb-4"
          >
            <motion.div
              className={`cursor-pointer flex justify-between items-center p-4 border border-gray-300 rounded shadow-md transition-transform hover:scale-95 bg-t3 text-c5`}
              onClick={() => toggleQuestion(q.id)}
            >
              <div className="font-semibold">{q.question}</div>
              {openQuestions.includes(q.id) ? (
                <span className="text-blue-500">-</span>
              ) : (
                <span className="text-blue-500">+</span>
              )}
            </motion.div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openQuestions.includes(q.id) ? "auto" : 0,
                opacity: openQuestions.includes(q.id) ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="bg-t2 text-c4 p-4 border-t border-gray-300 overflow-hidden"
            >
              {q.answer}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Mensuration;

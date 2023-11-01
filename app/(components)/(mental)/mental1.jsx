import React from "react";
import { useState } from "react";

function Mental1() {
  const [openQuestions, setOpenQuestions] = useState([]);

  const questions = [
    {
      id: 1,
      question: "What are the key principles of yoga exercises?",
      answer:
        "The key principles of yoga exercises include breath control (pranayama), physical postures (asanas), meditation, and ethical guidelines (yamas and niyamas)",
    },
    {
      id: 2,
      question: " How can yoga exercises improve physical health?",
      answer:
        "Yoga exercises can improve physical health by enhancing flexibility, strength, balance, and posture. They can also help with weight management and reduce the risk of injuries.",
    },
    {
      id: 3,
      question: "What are some beginner-friendly yoga exercises to start with?",
      answer:
        "Beginners can start with basic poses like Mountain Pose, Child's Pose, Downward-Facing Dog, and Cobra Pose to build a foundation in yoga.",
    },
    {
      id: 4,
      question:
        "Are there yoga exercises specifically designed for stress relief?",
      answer:
        "Yes, yoga exercises like Savasana Corpse Pose, Balasana Child's Pose, and Anulom Vilom (Alternate Nostril Breathing) are effective for stress relief",
    },
    {
      id: 5,
      question:
        "Can yoga exercises help with back pain and posture improvement?",
      answer:
        "Yoga exercises can strengthen the core and back muscles, relieving back pain and promoting better posture. Poses like Cat-Cow and Bridge Pose are beneficial.",
    },
    {
      id: 6,
      question:
        " Is yoga suitable for weight loss, and which poses are effective for this goal?",
      answer:
        "Yoga can aid in weight loss by increasing metabolism and promoting mindfulness. Poses like Warrior II, Boat Pose, and Plank can be effective.",
    },
    {
      id: 7,
      question: "How can seniors or older adults benefit from yoga exercises?",
      answer:
        "Seniors can benefit from yoga by improving flexibility, balance, and joint mobility. Gentle poses like Chair Yoga and Tree Pose are great for older adults.",
    },
    {
      id: 8,
      question:
        "Are there specific yoga exercises for athletes and sports enthusiasts?",
      answer:
        "Yoga can enhance athletic performance by increasing flexibility and preventing injuries. Athletes often incorporate poses like Pigeon Pose and Wheel Pose.",
    },
    {
      id: 9,
      question:
        "Can pregnant women practice yoga exercises, and are there specialized prenatal yoga poses?",
      answer:
        "Yes, prenatal yoga is safe and beneficial for pregnant women. Poses like Cat-Cow and Butterfly Pose can provide relief and preparation for childbirth.",
    },
    {
      id: 10,
      question:
        " How can yoga exercises improve mental well-being and emotional health?",
      answer:
        "Yoga exercises improve mental well-being by reducing stress, anxiety, and depression. Practices like meditation and Lotus Pose  can enhance emotional health.",
    },
  ];

  const toggleQuestion = (id) => {
    if (openQuestions.includes(id)) {
      setOpenQuestions(openQuestions.filter((item) => item !== id));
    } else {
      setOpenQuestions([...openQuestions, id]);
    }
  };

  return (
    <>
      <div className="p-4 bg-c1 mx-5 ml-5 rounded-lg shadow-md">
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold text-c4 mb-4">
            Mental Health Blog
          </h2>
        </div>

        {questions.map((q) => (
          <div key={q.id} className="mb-4">
            <div
              className="cursor-pointer flex justify-between items-center 
                p-4 border border-gray-300 rounded shadow-md transition-transform
                 hover:scale-95 bg-t3 text-c5"
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
              <div className="bg-t2 text-c4 p-4 border-t border-gray-300">
                {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Mental1;

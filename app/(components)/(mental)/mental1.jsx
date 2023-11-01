import React from "react";
import { useState } from "react";

function Mental1() {
  const [openQuestions, setOpenQuestions] = useState([]);

  const questions = [
    {
      id: 1,
      question:
        "What is the importance of mental health in overall well-being?",
      answer:
        "Good mental health is essential for our overall well-being, influencing our thoughts, feelings, and actions, as well as our relationships and daily life.",
    },
    {
      id: 2,
      question: "How can I manage stress in my daily life?",
      answer:
        "Stress management includes relaxation techniques, physical activity, balanced diet, setting boundaries, and seeking social support.",
    },
    {
      id: 3,
      question: "What are the signs of anxiety, and how can I cope with it?",
      answer:
        "Anxiety signs include worry, restlessness, irritability, and physical symptoms. Coping strategies include deep breathing and mindfulness.",
    },
    {
      id: 4,
      question: "What is the difference between sadness and depression?",
      answer:
        "Sadness is a normal response to events, while depression is a persistent mood disorder with symptoms like hopelessness and loss of interest.",
    },
    {
      id: 5,
      question:
        "How can I support a friend or family member struggling with their mental health?",
      answer:
        "Offer a non-judgmental ear, express empathy, encourage seeking professional help, and provide information about available resources.",
    },
    {
      id: 6,
      question: "What is self-care, and why is it important for mental health?",
      answer:
        "Self-care includes activities like relaxation, hobbies, and exercise. It's vital for reducing stress and preventing burnout.",
    },
    {
      id: 7,
      question:
        "What are some effective techniques for improving sleep quality and mental well-being?",
      answer:
        "Techniques for better sleep include a consistent schedule, a comfortable sleep environment, and avoiding stimulants. Quality sleep is vital for mental health.",
    },
    {
      id: 8,
      question:
        "How can I build resilience to better handle life's challenges?",
      answer:
        "Building resiilience involves problems-solving skills a strong support network self-compassion, and adapting",
    },
    {
      id: 9,
      question:
        "What are the benefits of mindfulness and meditation for mental health?",
      answer:
        "Mindfulness and meditation reduce stress, improve focus, and promote relaxation, benefiting mental well-being.",
    },
    {
      id: 10,
      question:
        "How can I seek professional help for mental health concerns, and is it stigmatized?",
      answer:
        "Seeking professional help is not stigmatized. Talk to your primary care physician or a mental health specialist for guidance on treatment options.",
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

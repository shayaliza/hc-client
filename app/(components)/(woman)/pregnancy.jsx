"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Pregnancy() {
  // Create state to keep track of which questions are open
  const [openQuestions, setOpenQuestions] = useState([]);

  // Define the questions and their respective answers
  const questions = [
    {
      id: 1,
      question: "Week 0 and 1",
      answer:
        "In the first two weeks, you are not actually pregnant. The countdown begins from the first day of your last menstrual period. Fertilization typically occurs around week 2. Your baby is just a tiny cluster of cells.",
    },
    {
      id: 2,
      question: "Week 2",
      answer:
        "By week 2, if fertilization occurs, the zygote begins to divide and forms a blastocyst. It travels down the fallopian tube to the uterus for implantation. The placenta starts developing.",
    },
    {
      id: 3,
      question: "Week 3",
      answer:
        "In week 3, the embryo implants into the uterine lining. The neural tube begins to form, which will later become the brain and spinal cord. The heart also starts to develop.",
    },

    {
      id: 4,
      question: "Week 4",
      answer:
        "At week 4, the baby is the size of a poppy seed. The heart begins to beat, and the neural tube closes. Basic facial features and limbs start forming.",
    },
    {
      id: 5,
      question: "Week 5",
      answer:
        "By week 5, the baby's heart is rapidly developing, and blood begins to circulate. The neural tube closes, and facial features continue to form.",
    },
    {
      id: 6,
      question: "Week 6",
      answer:
        "In week 6, the baby's face takes on a more human appearance, and tiny limb buds become visible. The brain is developing, and the heart is beating strongly.",
    },
    {
      id: 7,
      question: "Week 7",
      answer:
        "By week 7, the baby's organs are forming, and facial features become more distinct. The brain continues to grow, and the baby is about the size of a blueberry.",
    },
    {
      id: 8,
      question: "Week 8",
      answer:
        "At week 8, the baby is the size of a raspberry. The heart chambers are forming, and all essential organs are in place. Facial features become clearer.",
    },
    {
      id: 9,
      question: "Week 9",
      answer:
        "At week 9, the baby is about the size of a grape. It can hiccup and move its limbs. The major organs are functioning, and the baby is now considered a fetus.",
    },
    {
      id: 10,
      question: "Week 10",
      answer:
        "By week 10, the baby's vital organs are fully formed, and it can swallow and digest. Fingers and toes are no longer webbed, and the baby is about the size of a strawberry.",
    },
    {
      id: 11,
      question: "Week 11",
      answer:
        "In week 11, the baby's facial features are more distinct, and it can make spontaneous movements. Gender can be determined, although it's not usually visible yet.",
    },
    {
      id: 12,
      question: "Week 12",
      answer:
        "At week 12, the baby is about the size of a plum. It can open and close its fingers and toes. The kidneys start producing urine, and the baby can suck its thumb.",
    },
    {
      id: 13,
      question: "Week 13",
      answer:
        "By week 13, the baby's vocal cords are forming, and it can make some sounds. The digestive system is maturing, and the baby is about the size of a lemon.",
    },
    {
      id: 14,
      question: "Week 14",
      answer:
        "At week 14, the baby's neck becomes more defined, and it can move its head. Fine hair (lanugo) begins to grow. The baby can squint and frown.",
    },
    {
      id: 15,
      question: "Week 15",
      answer:
        "In week 15, the baby's limbs are in proportion, and it can make more coordinated movements. Gender may be visible on ultrasound. The baby is about the size of an apple.",
    },

    {
      id: 16,
      question: "Week 16",
      answer:
        "At week 16, the baby's skeleton is hardening, and it can make more deliberate movements. The skin is translucent, and the baby is developing a protective coating called vernix.",
    },
    {
      id: 17,
      question: "Week 17",
      answer:
        "By week 17, the baby can hear sounds from the outside world, including your voice. It may have growth spurts and start building fat stores.",
    },
    {
      id: 18,
      question: "Week 18",
      answer:
        "In week 18, the baby's taste buds are forming, and it can taste the flavors of the foods you eat. You might start feeling the baby's movements.",
    },
    {
      id: 19,
      question: "Week 19",
      answer:
        "At week 19, the baby's sensory development continues, and it can respond to stimuli. The baby's skin is becoming less translucent.",
    },
    {
      id: 20,
      question: "Week 20",
      answer:
        "By week 20, you're halfway through your pregnancy. The baby is about the size of a small cantaloupe. You may start feeling more pronounced movements, and gender is often visible on ultrasound.",
    },
    {
      id: 21,
      question: "Week 21",
      answer:
        "At week 21, the baby's eyelids and eyebrows are well-developed. It can also swallow and digest amniotic fluid. The baby is growing and gaining weight.",
    },
    {
      id: 22,
      question: "Week 22",
      answer:
        "In week 22, the baby's sense of touch is developing, and it can feel your movements. Lung development is ongoing, and the baby is about the size of a papaya.",
    },
    {
      id: 23,
      question: "Week 23",
      answer:
        "By week 23, the baby's sense of taste is further developing, and it can distinguish sweet and bitter flavors. The baby's skin is less wrinkled, and it's becoming plumper.",
    },
    {
      id: 24,
      question: "Week 24",
      answer:
        "At week 24, the baby's lungs are maturing, and it practices breathing movements. The baby's eyelids open, and it begins to respond to external sounds.",
    },
    {
      id: 25,
      question: "Week 25",
      answer:
        "In week 25, the baby is gaining weight and growing rapidly. Its blood vessels are visible through the skin, and it has more distinct sleep-wake patterns.",
    },
    {
      id: 26,
      question: "Week 26",
      answer:
        "By week 26, the baby's brain is rapidly developing, and it can blink its eyes. You may notice stronger and more frequent movements.",
    },
    {
      id: 27,
      question: "Week 27",
      answer:
        "At week 27, the baby's nervous system is advancing, and it's more coordinated in its movements. Lungs continue to mature, and the baby is about the size of a cauliflower.",
    },
    {
      id: 28,
      question: "Week 28",
      answer:
        "In week 28, the baby's eyes can open and close, and it's capable of rapid eye movements (REM). The baby is gaining more body fat.",
    },
    {
      id: 29,
      question: "Week 29",
      answer:
        "By week 29, the baby's body is more proportionate, and its brain is preparing for more advanced functions. Its movements may be strong and noticeable.",
    },
    {
      id: 30,
      question: "Week 30",
      answer:
        "At week 30, the baby's skin is less wrinkled, and it's covered in vernix to protect its skin. The baby continues to gain weight, and you may notice hiccups.",
    },
    {
      id: 31,
      question: "Week 31",
      answer:
        "At week 31, the baby's movements are less frequent but more pronounced. Its immune system is strengthening, and it's gaining weight rapidly.",
    },
    {
      id: 32,
      question: "Week 32",
      answer:
        "By week 32, the baby's toenails have grown, and its hair continues to grow. The baby may turn head down in preparation for birth.",
    },
    {
      id: 33,
      question: "Week 33",
      answer:
        "In week 33, the baby's bones are hardening, and it's gaining more body fat. Its movements are strong, and you may feel its body parts protruding.",
    },
    {
      id: 34,
      question: "Week 34",
      answer:
        "At week 34, the baby's skin is smoother, and it's preparing for life outside the womb. The baby is practicing breathing and swallowing.",
    },
    {
      id: 35,
      question: "Week 35",
      answer:
        "By week 35, the baby is gaining about an ounce a day. Its head is engaged in the pelvis, getting ready for birth. You may notice stronger contractions.",
    },
    {
      id: 36,
      question: "Week 36",
      answer:
        "In week 36, the baby's lungs are almost fully mature, and it's gaining the final layers of fat. You're nearing full-term pregnancy.",
    },
    {
      id: 37,
      question: "Week 37",
      answer:
        "At week 37, the baby is considered full-term, and its organs are ready for life outside the womb. It's preparing for birth, and you may experience more contractions.",
    },
    {
      id: 38,
      question: "Week 38",
      answer:
        "In week 38, the baby's immune system is stronger, and it's passing antibodies from you. It's settling into the head-down position for birth.",
    },
    {
      id: 39,
      question: "Week 39",
      answer:
        "By week 39, the baby's body is fully developed and ready for birth. You may experience more frequent contractions as your due date approaches.",
    },
    {
      id: 40,
      question: "Week 40",
      answer:
        "At week 40, your baby is considered full-term and can arrive at any time. You may experience signs of labor, such as contractions and the breaking of the amniotic sac.",
    },
    {
      id: 41,
      question: "Week 41",
      answer:
        "In week 41, if your baby hasn't arrived yet, you may discuss induction with your healthcare provider. The baby continues to grow and prepare for birth.",
    },
    {
      id: 42,
      question: "Week 42",
      answer:
        "At week 42, your baby is overdue, and you may need a medical induction. It's essential to stay in touch with your healthcare provider for guidance.",
    },
    {
      id: 43,
      question: "Week 43",
      answer:
        "By week 43, you're considered significantly overdue. Your healthcare provider will closely monitor you and discuss options for labor induction or a C-section.",
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
            Pregnancy Blog
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

export default Pregnancy;

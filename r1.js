<>
  <div className="w-full max-w-2xl mx-auto mt-5">
    <div className="mb-4">
      <button
        className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          selectedTopic === "period calculator" ? "bg-blue-700" : ""
        }`}
        onClick={() => setSelectedTopic("period calculator")}
      >
        BMI Calculator
      </button>
      <button
        className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          selectedTopic === "fertility" ? "bg-blue-700" : ""
        }`}
        onClick={() => setSelectedTopic("fertility")}
      >
        Calorie Calculator
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          selectedTopic === "mensuration" ? "bg-blue-700" : ""
        }`}
        onClick={() => setSelectedTopic("mensuration")}
      >
        Body Fat Calculator
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          selectedTopic === "pregnancy" ? "bg-blue-700" : ""
        }`}
        onClick={() => setSelectedTopic("pregnancy")}
      >
        Pregnancy Blog
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          selectedTopic === "sex" ? "bg-blue-700" : ""
        }`}
        onClick={() => setSelectedTopic("sex")}
      >
        Sex Education Blog
      </button>
    </div>
    {selectedTopic === "period calculator" && <PeriodCalc />}
    {selectedTopic === "fertility" && <Fertility />}
    {selectedTopic === "mensuration" && <Mensuration />}
    {selectedTopic === "pregnancy" && <Pregnancy />}
    {selectedTopic === "sex" && <Sex />}
  </div>
</>;

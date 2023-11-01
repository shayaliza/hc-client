import React, { useState, useEffect } from "react";

const particleSize = 50; // Adjust the size of the particles
const gameAreaHeight = 500; // Adjust the height of the game area
const particleSpeed = 2; // Adjust the falling speed

function Game2() {
  const [particles, setParticles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Create a new particle
  const createParticle = () => {
    const newParticle = {
      id: new Date().getTime(),
      top: -particleSize,
      left: Math.random() * (window.innerWidth - particleSize),
    };
    console.log("Creating new particle:", newParticle);
    setParticles((prevState) => [...prevState, newParticle]);
  };

  // Handle clicking on a particle
  const handleParticleClick = (particle) => {
    setParticles((prevState) => prevState.filter((p) => p.id !== particle.id));
    setScore(score + 1);
    console.log("Particle clicked:", particle);
  };

  // Check if particles hit the ground
  const checkCollisions = () => {
    const newParticles = particles.filter((particle) => {
      console.log("Particle top:", particle.top);
      return particle.top + particleSize < gameAreaHeight;
    });
    setParticles(newParticles);
    if (newParticles.length === 0) {
      setGameOver(true);
      console.log("Game over!");
    }
  };

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        createParticle();
      }, 10000 * 60); // Create a particle every 5 seconds
      console.log("Particle creation interval started");

      const particleInterval = setInterval(() => {
        checkCollisions();
        setParticles((prevState) =>
          prevState.map((particle) => ({
            ...particle,
            top: particle.top + particleSpeed,
          }))
        );
      }, 10000 * 60); // Move particles every 1 second
      console.log("Particle falling interval started");

      return () => {
        clearInterval(interval);
        clearInterval(particleInterval);
        console.log("Intervals cleared");
      };
    }
  }, [gameOver]);

  const tryAgain = () => {
    setParticles([]);
    setScore(0);
    setGameOver(false);
    console.log("Try again clicked");
  };

  useEffect(() => {
    // Add an event listener to update the particles when the window is resized.
    const handleResize = () => {
      setParticles((prevState) =>
        prevState.map((particle) => ({
          ...particle,
          left: Math.random() * (window.innerWidth - particleSize),
        }))
      );
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Resize listener removed");
    };
  }, []);

  return (
    <>
      <div className="text-center mt-10">
        {gameOver ? (
          <div>
            <h2 className="text-2xl font-semibold">
              Game Over! Your score: {score}
            </h2>
            <button
              onClick={tryAgain}
              className="bg-blue-500 text-black font-semibold py-2 px-4 rounded mt-4"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold">Score: {score}</h2>

            <div className="relative w-full h-[500px]">
              {particles.map((particle) => {
                console.log("Particle top:", particle.top); // Log the top value
                return (
                  <div
                    key={particle.id}
                    onClick={() => handleParticleClick(particle)}
                    style={{
                      //   position: "absolute",
                      top: particle.top + "px",
                      left: particle.left + "px",
                      width: particleSize + "px",
                      height: particleSize + "px",
                      cursor: "pointer",
                      background: "blue",
                      borderRadius: "50%",
                    }}
                  >
                    A
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* testing this shows in browser */}
      <div className="absolute bg-red-500 cursor-pointer rounded-full">
        {" "}
        hello
        <img
          src="https://dummyimage.com/600x400/000/fff"
          alt="Particle"
          width={particleSize}
          height={particleSize}
        />
      </div>
    </>
  );
}

export default Game2;

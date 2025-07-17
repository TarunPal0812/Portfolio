import { useEffect, useState } from "react";

// id,size,x,y,opacity,animationDuration --> Star
// id,size,x,y,delay,animationDuration --> Meteors

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  const [meteors, setMeteors] = useState([])

  useEffect(() => {
    generateStars();
    generateMeteors()

    const handleResize = ()=>{
        generateStars()
    }

    window.addEventListener("resize",handleResize)

    return ()=> window.removeEventListener("resize",handleResize)

  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Stars */}
      {stars.map((items, index) => (
        <div
          className="star animate-pulse-subtle"
          key={index}
          style={{
            width: items.size + "px",
            height: items.size + "px",
            left: items.x + "%",
            top: items.y + "%",
            opacity: items.opacity,
            animationDuration: items.animationDuration + "s",
          }}
        />
      ))}

      {/* Meteors */}

      {meteors.map((items, index) => (
        <div
          className="meteor animate-meteor"
          key={index}
          style={{
            width: items.size * 50 + "px",
            height: items.size *2 + "px",
            left: items.x + "%",
            top: items.y + "%",
            animationDelay: items.delay,
            animationDuration: items.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;

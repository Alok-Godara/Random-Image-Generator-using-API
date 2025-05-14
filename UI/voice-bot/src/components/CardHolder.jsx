import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";

const CardHolder = () => {
  const users = [
    {
      fullName: "Alice Johnson",
      age: 28,
      city: "New York",
      profession: "Software Engineer",
      profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      fullName: "Catherine Lee",
      age: 25,
      city: "Chicago",
      profession: "Marketing Specialist",
      profilePhoto: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      fullName: "David Kim",
      age: 42,
      city: "Seattle",
      profession: "Product Manager",
      profilePhoto: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      fullName: "Eva Green",
      age: 30,
      city: "Austin",
      profession: "Data Analyst",
      profilePhoto: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      fullName: "Frank Thomas",
      age: 38,
      city: "Denver",
      profession: "Cybersecurity Expert",
      profilePhoto: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      fullName: "Isabella Cruz",
      age: 27,
      city: "Miami",
      profession: "Photographer",
      profilePhoto: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      fullName: "Jack Wilson",
      age: 32,
      city: "Los Angeles",
      profession: "Film Editor",
      profilePhoto: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];

  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollSpeed = 300;  // Adjust scroll speed (px per scroll)
  const scrollInterval = 300;  // Time interval (ms) for each scroll

  useEffect(() => {
    let interval;
    if (isScrolling) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += scrollSpeed;
        }
      }, scrollInterval);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isScrolling]);

  // Reset scroll position when the mouse leaves
  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0; // Reset scroll position
    }
    setIsScrolling(false); // Stop scrolling
  };

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsScrolling(true)}  // Start scrolling when mouse enters
      onMouseLeave={handleMouseLeave} // Stop scrolling and reset position when mouse leaves
      className="flex overflow-x-auto no-scrollbar flex-nowrap gap-x-6 px-5 scroll-smooth"
    >
      {users.map((elem) => (
        <Card
          key={elem.fullName}
          name={elem.fullName}
          age={elem.age}
          city={elem.city}
          profession={elem.profession}
          profilePhoto={elem.profilePhoto}
        />
      ))}
    </div>
  );
};

export default CardHolder;

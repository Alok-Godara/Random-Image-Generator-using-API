import React from "react";
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

  return (
    <div className="flex flex-wrap gap-x-6 justify-between mx-5">
      {users.map(function (elem) {
        return (
          <Card
            key={elem.fullName}
            name={elem.fullName}
            age={elem.age}
            city={elem.city}
            profession={elem.profession}
            profilePhoto={elem.profilePhoto}
          />
        );
      })}
    </div>
  );
};

export default CardHolder;

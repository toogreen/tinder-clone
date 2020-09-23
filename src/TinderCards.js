import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://www.biography.com/.image/t_share/MTY2MzU3Nzk20TM2MjMwNTkx/elon_musk_royal_society.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://www.biography.com/.image/t_share/MTY2NzA30DE30TgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
        }
    ]); 

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
      <div className="tinderCards">
        <div className="tinerCards__cardContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <div 
                    style={{ backgroundImage: `url(${person.url})` }} 
                    className="card"
                >
                    <h3>{person.name}</h3>
                </div>

            </TinderCard>
          ))}
        </div>
      </div>
    );
}

export default TinderCards
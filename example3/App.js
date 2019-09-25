import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";

import friends from "./friends.json";
import FriendCard from "./components/FriendCard.js";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(friend => (
        <FriendCard {...friend}></FriendCard>
      ))}
    </Wrapper>
  );
}

export default App;

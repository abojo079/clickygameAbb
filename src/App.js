import React from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    
    <Wrapper>
<Navbar/>
<Jumbotron/>
      <FriendCard
        image={friends[0].image}
      />
      <FriendCard
        image={friends[1].image}
      />
      <FriendCard
        image={friends[2].image}
      />
 <FriendCard
        image={friends[3].image}
      />

       <FriendCard
        image={friends[4].image}
      />
     <FriendCard
        image={friends[5].image}
      />
     <FriendCard
        image={friends[6].image}
      />
  <FriendCard
        image={friends[7].image}
      />
 <FriendCard
        image={friends[8].image}
      />
<FriendCard
        image={friends[9].image}
      />
<FriendCard
        image={friends[10].image}
      />
<FriendCard
        image={friends[11].image}
      />
    </Wrapper>


  );
}

export default App;

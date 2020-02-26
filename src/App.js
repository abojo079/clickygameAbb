import React, { Component } from 'react';
import Header from './components/header/header'
//import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
//import Navbar from "./components/Navbar";
//import Jumbotron from "./components/Jumbotron";

class App extends Component {

  state = {
   friends,
    score: 0,
    topScore: 0
  };

componentDidMount(){
    this.setState({
      friends: this.shuffleFriends(this.state.friends)
    })
  }

    shuffleFriends = (data) =>  {
      const datacopy = [...data]
      for (let i = datacopy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [datacopy[i], datacopy[j]] = [datacopy[j], datacopy[i]];
      }
      return datacopy;
    };

    counterCheck = (name) => {      
      let correctGuess = false;
      const {friends} = this.state;
      const updatedFriends = friends.map(friend => {
        const updatedFriend = {...friend}
        if (updatedFriend.name === name) {
          if (updatedFriend.clicked === false) {
            updatedFriend.clicked= true;
            correctGuess = true;
          }
        }
        return updatedFriends;
      })
      console.log(updatedFriends);
      
      correctGuess ? this.handleCorrect(updatedFriends): this.handleIncorrect(updatedFriends)

    }

    handleCorrect = (friends) => {
      const {score, topScore} = this.state;
      console.log({score, topScore});
      
      const newScore = score + 1;
      console.log({newScore});
      
      const newTopScore = Math.max(newScore, topScore);
      console.log({newTopScore});
      
      this.setState({
        score: newScore,
        topScore: newTopScore,
        friends: this.shuffleFriends(friends)
      })
    }

    // newTopScoreAlert = () => {
    //   if (this.newScore === this.newTopScore) {
    //     alert("Congratulations! You've reached a new high score!")
    //   }
    // }

   

    handleIncorrect = (friends) => {
      alert("Game over!")
      console.log("handleIncorrect");
      
      this.setState({
        friends: this.resetFriends(friends),
        score: 0
      })
    }

    resetFriends = (friends) => {
      const resetFriends = friends.map(character => ({...friends, clicked: false}))
      return this.shuffleFriends(resetFriends);
    }


    render(){
      
      return(
        <div>
               <Header score={this.state.score} topScore={this.state.topScore} />
               <div className="container">
                <div className="row">
                    {this.state.friends.map((friend) => 
                    <FriendCard  
                    key={friend.id} 
                    id ={friend.id} 
                    friend={friend.name} 
                    clicked={friend.clicked}
                    image={friend.image}
                    counterCheck={this.counterCheck}
                    />)}
                </div>
            </div>
        </div>
      )
      };
}


export default App;




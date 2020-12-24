import { Component, OnInit } from '@angular/core';
import { State } from "./models/State";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  draws: number[] = [];
  losses: number[] = [];
  wins: number[] = [];
  resultOfGame: string = "";
  state: State = {
    game: 0,
    yourChoice: "",
    yourChoiceCurrentDiceImage: "",
    aiChoice: null,
    aiChoiceCurrentDiceImage: "",
    one:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
    two:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
    three:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
    four:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
    five:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
    six:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg"
  };

  constructor() {
  }

  ngOnInit(): void {
    this.clearState();
  }

  clearState = (): void => {
    this.losses = [];
    this.wins = [];
    this.draws = [];
    this.resultOfGame = "";
    this.state.game = 0;
    this.state.yourChoice = "";
    this.state.yourChoiceCurrentDiceImage = "";
    this.state.aiChoice = null;
    this.state.aiChoiceCurrentDiceImage = "";
  };

  startGame = (): void => {
    this.state.game = this.state.game + 1;
    this.yourChoice();
    this.aiChoice();
    this.getTheResultOfGame();
    this.ranking();
  };

  yourChoice = (): void => {
    // Generate random a number in the range of 1 to 6
    this.state.yourChoice = Math.floor(Math.random() * 6) + 1;
    this.initializeTheValueOfDiceImage("YOUR CHOICE");
  }

  aiChoice = (): void => {
    // Generate random a number in the range of 1 to 6
    this.state.aiChoice = Math.floor(Math.random() * 6) + 1;
    this.initializeTheValueOfDiceImage("AI CHOICE");
  };

  initializeTheValueOfDiceImage(nameChoice: string): void {
    // Destructuring Assignment in object called state
    const { one: one, two: two, three: three, four: four, five: five, six: six, yourChoice: yourChoice, aiChoice: aiChoice } = this.state;
    switch (nameChoice) {
      case "YOUR CHOICE":
        if (yourChoice === 1) {
          this.state.yourChoiceCurrentDiceImage = one;
        } else if (yourChoice === 2) {
          this.state.yourChoiceCurrentDiceImage = two;
        } else if (yourChoice === 3) {
          this.state.yourChoiceCurrentDiceImage = three;
        } else if (yourChoice === 4) {
          this.state.yourChoiceCurrentDiceImage = four;
        } else if (yourChoice === 5) {
          this.state.yourChoiceCurrentDiceImage = five;
        } else if (yourChoice === 6) {
          this.state.yourChoiceCurrentDiceImage = six;
        } else {
          this.state.yourChoiceCurrentDiceImage = "";
        }
        break;
      case "AI CHOICE":
        if (aiChoice === 1) {
          this.state.aiChoiceCurrentDiceImage = one;
        } else if (aiChoice === 2) {
          this.state.aiChoiceCurrentDiceImage = two;
        } else if (aiChoice === 3) {
          this.state.aiChoiceCurrentDiceImage = three;
        } else if (aiChoice === 4) {
          this.state.aiChoiceCurrentDiceImage = four;
        } else if (aiChoice === 5) {
          this.state.aiChoiceCurrentDiceImage = five;
        } else if (aiChoice === 6) {
          this.state.aiChoiceCurrentDiceImage = six;
        } else {
          this.state.aiChoiceCurrentDiceImage = "";
        }
        break;
    }
  }

  getTheResultOfGame = (): void => {
    const { yourChoice: yourChoice, aiChoice: aiChoice } = this.state;
    if (yourChoice > aiChoice) {
      this.resultOfGame = "youWon";
    } else if (aiChoice > yourChoice) {
      this.resultOfGame = "youLost";
    } else if (aiChoice === null && yourChoice === "") {
      this.resultOfGame = "";
    } else {
      this.resultOfGame = "draw";
    }
  }

  ranking = (): void => {
    if (this.state.yourChoice > this.state.aiChoice) {
      this.wins.push(1);
    } else if (this.state.aiChoice > this.state.yourChoice) {
      this.losses.push(1);
    } else if (this.state.aiChoice === this.state.yourChoice) {
      this.draws.push(1);
    } else if (this.state.aiChoice === null && this.state.yourChoice === "") {
      this.wins.length = 0;
      this.losses.length = 0;
      this.draws.length = 0;
    }
  }
}
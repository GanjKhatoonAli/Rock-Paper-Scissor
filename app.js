 let name = prompt("Enter Your Name");
 alert(`Good Luck ${name} `);
 let userScore = 0;
    let computerScore = 0;
    let userChoice;
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { 'rock': '👊🏾', 'paper': '📝', 'scissors': '✂️' };

    function playGame() {
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      let result = '';

      if (userChoice === computerChoice) {
        result = `<h3>It's a tie! 🤝's a tie! 🤝</h3>`;
      } else if ((userChoice === 'rock' && computerChoice === 'scissors') || 
                 (userChoice === 'paper' && computerChoice === 'rock') || 
                 (userChoice === 'scissors' && computerChoice === 'paper')) {
        result = `<h3>You win! 🎉 You chose ${emojis[userChoice]} and computer chose ${emojis[computerChoice]}.</h3>`;
        userScore++;
      } else {
        result = `<h3>Computer wins! 🤖 Computer chose ${emojis[computerChoice]} and you chose ${emojis[userChoice]}.</h3>`;
        computerScore++;
      }

      document.getElementById('result').innerHTML = result;
      document.getElementById('score').innerHTML = `<h3>Score ${name}= ${userScore } & Computer = ${computerScore}</h3>`;
    }
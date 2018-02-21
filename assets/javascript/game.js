$(document).ready(function() {
    // Declaring variables using let so they are able to be changed. I declared them all in one line.
    let goal, redCrystal, blueCrystal, greenCrystal, purpleCrystal, score, wins, losses;
//   Setting the variables equal to the HTML ID Elements. 
    redCrystal = $('#orange-crystal');
    blueCrystal = $('#blue-crystal');
    greenCrystal = $('#green-crystal');
    purpleCrystal = $('#purple-crystal');
    // Setting wins and losses equal to numbers.
    wins = 0;
    losses = 0;
  
//   The random number generated at the start of each round. Between 19-120
    function generateGoalValue() {
      return Math.floor(Math.random() * 101 + 19);
    } 
//   The random numbers generated for each crystal, between 1-12
    function generateCrystalValue() {
      return Math.floor(Math.random() * 12 + 1);
    }
//   This function runs at the start of each round, it sets your score to 0 displays your wins and losses, and gives all the crystals new values.
    function resetGame() {
      score = 0;
      goal = generateGoalValue();
      redCrystal.data('crystal', generateCrystalValue());
  
      blueCrystal.data('crystal', generateCrystalValue());
  
      greenCrystal.data('crystal', generateCrystalValue());
  
      purpleCrystal.data('crystal', generateCrystalValue());
      $('#score').text(score);
      $('#wins').text('Wins - ' + wins);
      $('#losses').text('Losses - ' + losses);
      $('#goal').text(goal);
    }
//   This function will add the a win or a loss depending on what the results are, it also displays your score if you have not yet won or lost.
    resetGame();
  
    $('.crystal').on('click', function(e) {
      score += $(this).data('crystal');
      if(score === goal) {
        wins++;
        resetGame();
      } else if (score > goal) {
        losses++;
        resetGame();
      } else {
        $('#score').text(score);
      }
    });
  });
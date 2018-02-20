$(document).ready(function() {
    let goal, redCrystal, blueCrystal, greenCrystal, purpleCrystal, score, wins, losses;
  
    redCrystal = $('#orange-crystal');
    blueCrystal = $('#blue-crystal');
    greenCrystal = $('#green-crystal');
    purpleCrystal = $('#purple-crystal');
    wins = 0;
    losses = 0;
  
  
    function generateGoalValue() {
      return Math.floor(Math.random() * 101 + 19);
    } 
  
    function generateCrystalValue() {
      return Math.floor(Math.random() * 12 + 1);
    }
  
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
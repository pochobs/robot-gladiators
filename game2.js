var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
    console.log(playerName, playerHealth, playerMoney);
var enemyNames = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;   
    console.log(enemyNames, enemyHealth, enemyAttack);
    window.alert("Welcome " +  playerName + " to Robot Gladiators!")
var fight = function() {
    
    window.alert("The fight has begun!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
      );
    window.alert(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
    window.alert(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
      if (playerHealth <= 0) {
        console.log(" Your robot died");
        window.alert(" Your robot died");
      } 
      else {
        console.log("Your player is still alive!");      
        window.alert("Your player is still alive!");}

      
    
  
  };
  fight();
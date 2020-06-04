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
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        window.alert("The fight has begun!");        
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
            );
        alert(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
            if (enemyHealth <= 0) {
                console.log(enemyNames + " has died!");
                window.alert(enemyNames + " has died!");
            } else {
                console.log(enemyNames + " still has " + enemyHealth + " health left.");
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
              }
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
    } else 
        if (promptFight === "skip" || promptFight === "SKIP") {
                    playerMoney = playerMoney - 2;
                    window.alert(playerName + " has chosen to skip the fight!");
                    console.log(playerName + " has chosen to skip the fight!")
                    window.alert(playerName + " Now has $ " + playerMoney );
                    console.log(playerName + " Now has $ " + playerMoney );
    } else {
                    window.alert("You need to pick a valid option. Try again!");
                  };
                };
    fight();

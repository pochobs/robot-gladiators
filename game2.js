var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
    console.log(playerName, playerHealth, playerAttack, playerMoney);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i], enemyHealth, enemyAttack);
  }
var enemyHealth = 50;
var enemyAttack = 12;   
    window.alert("Welcome " +  playerName + " to Robot Gladiators!")
    console.log(enemyNames, enemyHealth, enemyAttack);
    
    var fight = function(enemyNames) {   
    promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        window.alert("The fight has begun!");  
        enemyHealth = enemyHealth - playerAttack;
        playerHealth = playerHealth - enemyAttack;
        // remove enemy's health by subtracting the amount set in the playerAttack variable              
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
            );
            window.alert(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
            if (enemyHealth <= 0) {
                console.log(enemyNames + " has died!");
                window.alert(enemyNames + " has died!");
            } else {
                console.log(enemyNames + " still has " + enemyHealth + " health left.");
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
               // 
              }
                            
            console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            window.alert(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            
            if (playerHealth <= 0) {
                    console.log(" Your robot died");
                    window.alert(" Your robot died");
             } else {
                    console.log("Your player is still alive!");      
                    window.alert("Your player is still alive!");  
                    fight();
                }    
        }
    else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
            if (confirmSkip) {
                
    // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
                window.alert(playerName s+ " has now remaing $ " + playerMoney);
                console.log(playerName + " has now remaing $ " + playerMoney);
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                console.log(playerName + " has decided to skip this fight. Goodbye!");
            }  
  // if no (false), ask question again by running fight() again
            else {
                fight();
            }
        }
    else {
                 window.alert("You need to pick a valid option. Try again!");
    }
        }
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
    }
    
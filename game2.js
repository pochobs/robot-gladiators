var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
    console.log(playerName, playerHealth, playerAttack, playerMoney);
    
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
  console.log(enemyNames[0], enemyNames[1], enemyNames[2]);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }
var enemyRobot = enemyNames[i];

var enemyHealth = 50;
var enemyAttack = 12;   
    window.alert("Welcome " +  playerName + " to Robot Gladiators!")
    console.log(enemyNames, enemyHealth, enemyAttack);
    
    var fight = function(enemyNames) {
        // repeat and execute as long as the enemy robot is alive 
        while(enemyHealth > 0) {
          // place fight function code block here . . .
        
            promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            if (promptFight === "fight" || promptFight === "FIGHT") {
                window.alert("The fight has begun!");  
                enemyHealth = enemyHealth - playerAttack;
                playerHealth = playerHealth - enemyAttack;
                console.log(playerName + " attacked " + enemyRobot + ". " + enemyRobot + " now has " + enemyHealth + " health remaining."
                );
                window.alert(playerName + " attacked " + enemyRobot + ". " + enemyRobot + " now has " + enemyHealth + " health remaining.");
                    if (enemyHealth <= 0) {
                        console.log(enemyNames + " has died!");
                        window.alert(enemyNames + " has died!");
                    } 
                    else {
                        console.log(enemyRobot + " still has " + enemyHealth + " health left.");
                        
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
                    } 
                    else {
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
                        window.alert(playerName + " has now remaing $ " +  playerMoney  + ". " + playerName + " has decided to skip this fight. Goodbye!");
                        console.log(playerName + " has now remaing $ " +  playerMoney  + ". " + playerName + " has decided to skip this fight. Goodbye!");
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
    }
        
        
            fight();
       
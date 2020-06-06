var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
    console.log(playerName, playerHealth, playerAttack, playerMoney);
    
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    console.log(enemyNames[0], enemyNames[1], enemyNames[2]);
    console.log(enemyNames.length)
var enemyHealth = 50;
var enemyAttack = 12;   
    window.alert("Welcome " +  playerName + " to Robot Gladiators!")
    console.log(enemyNames, enemyHealth, enemyAttack);
    
        var fight = function(enemyNames) {
        // repeat and execute as long as the enemy robot is alive 
        
          // place fight function code block here . . .
        for(var i = 0; i < enemyNames.length; i++) {
            while(enemyHealth  > 0 && playerMoney  > 0 && playerHealth > 0) {
            promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            if (promptFight === "fight" || promptFight === "FIGHT") {
                window.alert("The fight has begun!");  
                enemyHealth = enemyHealth - playerAttack;
                playerHealth = playerHealth - enemyAttack;
                
                
                console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
                );
                window.alert(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");
                    if (enemyHealth <= 0) {
                        console.log(enemyNames + " has died!");
                        window.alert(enemyNames + " has died!");
                        break;
                    } 
                    else {
                        console.log(enemyNames + " still has " + enemyHealth + " health left.");
                        
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
                            break;
                    } 
                    else {
                            console.log("Your player is still alive!");      
                            window.alert("Your player is still alive!"); 
                            
                           fight(enemyNames);
                            
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
    
    
}
        
        
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }
       
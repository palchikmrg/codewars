// INSTRUCTIONS
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0

// SOLUTION
function combat(health, damage) {
    // Write your code here
    health = health - damage
    if(health >= 0) {
        return health
    }  else {
        return 0
    }

}
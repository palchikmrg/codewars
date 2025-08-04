// INSTRUCTIONS
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

//SOLUTION
function move (position, roll) {
    // return the new position
    if(roll >= 1 && roll <= 6){
        return position = position + roll*2
        }
    }
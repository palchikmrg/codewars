// INSTRUCTIONS
// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

b
//SOLUTION
function solution(str){
    let str2 = ""
    for(let i = str.length - 1; i >= 0; i-- ) {
        str2 = str2 + str[i]
    }
    return str2

}
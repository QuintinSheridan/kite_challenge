// Given an array of integer values, write a function in JavaScript that returns an array of the duplicate values.

// So with the input [1, 2, 3, 3, 4, 5, 5, 6] the function should return [3, 5].

console.log('hello')

const testArray = [1, 2, 3, 3, 4, 5, 5, 6]
const testAnswer = [3, 5]

const getDuplicates = (myNumbers) => {
    let duplicates = [];
    for(const i of Array(myNumbers.length).keys()) {
        // console.log('i: ', i)
        // if number is duplicated and hasn't already been added to duplicates, add it
        const number = myNumbers.splice(0,1)[0]
        if(!duplicates.includes(number)) {
            if(myNumbers.includes(number)){
                // console.log('duplicate added')
                duplicates.push(number)
            }
        }
    }

    return duplicates
}


testDuplicates = getDuplicates(testArray)

console.log(testDuplicates)

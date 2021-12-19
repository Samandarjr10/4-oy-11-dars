// 1-mashq
var muveString = "Our school is designed to educate our students"
function fillFirstIndexUpper(element) {
    var result = [];
    var findSplitI = element.split(" ");

    findSplitI.forEach(item => {
        var newItemSplit = item.split("")
        newItemSplit[0] = newItemSplit[0].toUpperCase()
        result.push(newItemSplit.join(""))
    })
    return result  
}
console.log(fillFirstIndexUpper(muveString).join(" "));


// 2-mashq
var number = [1, 2, 4, 5, 204, 1222, 0, 3];
number.sort((a, b) => a == b ? 1: -1);
console.log(number);


// 3-mashq
var moveText =  "Our school is designed to educate our students in all areas of English language life to prepare them for their global future. Our international language school, located in very interesting destinations or in our virtual campus welcome all student ages as Zoni tailor all course and ages accordingly with the age needed"

function findLomgWord(word) {
    var resultWord = "";
    var splitMoveArr = word.split(" ")

    for (var item of splitMoveArr) {
        if (item.length > resultWord.length) {
            resultWord = item
        }
    }

    return resultWord
}
console.log(findLomgWord(moveText));


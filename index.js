// Code your solutions in this file
function writeCards(stringNames, eventName) {
    let messages = [];
    for (let i = 0; i < stringNames.length; i++) {
        let message = `Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
        // console.log(messages)
        // console.log(typeof messages)
    }
    return messages;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
//while loop
function countDown(number) {
    if (number <= 0 && isNaN(number)) {
        console.log("Please input a positive integer");
    } 
    while (number >= 0) {
        console.log(number--);
    }
}
countDown(50);
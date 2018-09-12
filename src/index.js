// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency >= 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
    var values = new Array(
        { value: 50, name: 'H' },
        { value: 25, name: 'Q' },
        { value: 10, name: 'D' },
        { value: 5, name: 'N' },
        { value: 1, name: 'P' }
    );

    var result = {};
    values.forEach(function (element) {
        if ((value = Math.floor(currency / element.value)) > 0) {
            result[element.name] = value;
            currency = Math.floor(currency % element.value);
        }
    });
    return result;
}
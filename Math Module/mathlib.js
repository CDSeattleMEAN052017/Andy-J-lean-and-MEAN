module.exports = function(){
    return {
    add: function(num1, num2) {
         sum = num1 + num2;
         return sum;
    },
    multiply: function(num1, num2) {
         product = num1 * num2;
         return product;
    },
    square: function(num) {
         square = num * num;
         return square;
    },
    random: function(min, max) {
         rando = Math.floor(Math.random() * (max - min)) + min
         return rando;
    }
  }
}

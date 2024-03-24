function inchToFeet(inch) {
    var convertion = inch/12;
    return convertion;
};

var input = 156;   
var feet = inchToFeet(input);
console.log(feet);
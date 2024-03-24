function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return (`The year, ${year} is a Leap Year`);
    }else{
        return (`The year, ${year} is not a Leap Year`); 
    }
}

const result = checkLeapYear(2022);

console.log(result);
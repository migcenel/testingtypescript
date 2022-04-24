(()=>{
    let prices = [0,1,1,2,3,5,8,13,21];
    
    prices.push(34);

    let mixedArray: (number | string | boolean)[] = [1, "testing", false];

    mixedArray.push(12);
    mixedArray.push(true);
    mixedArray.push(25);
    
    console.log(mixedArray);

    let numbers = [1,23,5,65,6432,134];
    let result = numbers.map(item => item *2);

    console.log(numbers);    
    console.log(result);
})();
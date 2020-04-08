// create data, an array of objects
let data = [
    {
        principal: 2500, 
        time: 1.8
    }, 
    {
        principal: 1000, 
        time: 5
    },
    {
        principal: 3000, 
        time: 1
    },
    {
        principal: 2000, 
        time: 3
    },
]

// define interestCalculator

function interestCalculator(interestData) {
    
    for (let i = 0; i < interestData.length; i++) {
        let key = interestData[i];

        // conditions for calculating rate
        if (key.principal >= 2500 && key.time > 1 && key.time < 3) 
            key.rate = 3;
        else if (key.principal >= 2500 && key.time >= 3) 
            key.rate = 4;
        else if (key.principal < 2500 || key.time <= 1) 
            key.rate = 2;
        else 
            key.rate = 1;
        
        // define interest formula
        key.interest = (key.principal * key.rate * key.time) / 100;
    }

    // log to console
    console.log(interestData);

    // return statement
    return interestData;
}

interestCalculator (data);

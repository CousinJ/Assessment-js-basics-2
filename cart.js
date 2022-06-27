///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.map(cart => cart.price).reduce((ac, cr) => ac + cr)

console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal + (cartTotal * tax) - couponValue
    
}

console.log(calcFinalPrice(summedPrice, 5, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    
    My customer object will have the following data...

    party size: this will be number and contain how many people dined with them.
       - I chose this property to alert staff if a table is too big they may need multiple waiters on that table.
       - I chose the number data type because only the numerical value of how many people dining is needed.
    

    Check amount: this is the total cost before tips. this will also be a number.
        - I chose to add check amount to easily have a total ready for staff and customers.
        - This will be a number value because it is a dollar amount.

    verteran or senior status:  this will be a boolean value true or false.
        - I chose this property because verterans and seniors usually automatically get discounts from the company.
        -   This will be a boolean becuase only two options are available.

    Food ordered:  this will be an array of string values. 
        - I added this to potentially add data to what dishes are popular and which ones are not. this can help the business get rid of dishes they do not need on hand.
        - This is an array of strings becuase people will usually order mulitple items and those itens will be specific words.
    


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customers = [
    {
        party: 4,
        check: 60,
        vetOrSenior: false,
        food: ['BarbQ', 'Margehrita', 'Lemonade']

    }
]



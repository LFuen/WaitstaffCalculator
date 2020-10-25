// Be able to input meal amount, tax rate, and tip percentage,
// take all of that and get a subtotal, tip amount, and grand total
// Then calculate earnings with total tip, meal count (how many meals
// were inputted into the calculator) and average tip per meal.

/*
DETAILS
mealAmount = 00.00 -- only numbers can be entered
taxRate = number * mealAmount -- only numbers cab be entered
tipPercent = number * mealAmount -- only numbers can be entered

CHARGES
subtotal = mealAmount + taxRate
tip = tipPercent
total = subtotal + tip

EARNINGS
tipTotal = how many times tip was entered
mealCount = how many meals were entered
averageTipPerMeal = tipTotal / mealCount
*/


/*
On submit: take mealAmount + taxRate and send that to subtotal
           take tipPercent and send it to tip
           take subtotal + tip and send that to total 
*/


$('#submit').on('click', function(e) {
    e.preventDefault();
    taxRate();
    tipPercent();
    finalTotal();
    mealCount();
})

/*
Grabbing the tax rate plus the meal amount and appending that to
the SUBTOTAL
*/

function taxRate(){
    let mealAmount = document.getElementById('mealInput').value;
    console.log(mealAmount);
    let tax = document.getElementById('taxInput').value;
    tax = (tax / 100).toFixed(2);
    let taxed = (tax * mealAmount) + parseInt(mealAmount);
    $('#subtotal').append(`<h4 id="taxed"><b>${taxed}</b></h4>`);
}

/*
Grabbing the tip rate plus the meal amount and appending that to
the TIP
*/

function tipPercent(){
    let mealAmount = document.getElementById('mealInput').value;
    let tipInput = document.getElementById('tipping').value;
    let mealTip = ((tipInput / 100) * mealAmount).toFixed(2);
    console.log(mealTip);
    $('#tip').append(`<h4 id="meals"><b>${mealTip}</b></h4>`);
    $('#meals').val(mealTip);
}

/*
Grabbing the SUBTOTAL plus the TIP and appending that to
the FINAL TOTAL
*/

function finalTotal(){
    let taxed = document.getElementById('taxed').value;
    let meals = document.getElementById('meals').value;
    let mealAmount = document.getElementById('mealInput').value;
    console.log(mealAmount);
    let total = parseInt(taxed) + parseInt(meals) + parseInt(mealAmount);
    console.log(total);
    $('#total').append(`<h4><b>${total}</b></h4>`);
}

/*
Grabbing the TIPS entered, adding them up and appending that to
the TIP TOTAL
*/

function tipTotal(){

}

/*
Depending on how many times a MEAL was submitted, that total gets 
appended to the MEAL COUNT
*/

function mealCount(){
    let count = 0;
    $('#submit').on('click', function() {
        count++;
    });
    $('#mealCount').append(`<h4><b>${count}</b></h4>`);
}




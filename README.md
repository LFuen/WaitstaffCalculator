There are three main components to the interface.

MEAL DETAILS
In the left most panel, the user enters the base cost for a meal, the tax rate, and the tip 
percentage the customer wants to leave. When they hit the submit button, the app should validate
that the value in each field is numeric. If the form is valid, the Customer Charges and 
My Earnings Info section should update accordingly.


CUSTOMER CHARGES
The panel displays what the customer should be charged. Subtotal is the vale of the base meal
price plus tax. Tip is dollar value of the tip, given the subtotal and tip percentage. Total is
equal to subtotal plus tip.


MY EARNINGS INFO
This panel displays cumulative information about all of the meals submitted so far. Meal count is
the total number of meals input into the tool. Average tip per meal is equal to the total tip
value divided by the number of meals.


There should be a 'RESET' button that, when clicked, the app should return to its initial state.
All of the cumulative information should reset.

The 'CANCEL' button in the 'Meal Details' area, when clicked, should only clear the inputs without 
affecting the 'Customer Charges' or the 'My Earnings Info'.



We are continuing to require the use of a good state management, or "React-ful", pattern in this exercise. 
Examine the UI and determine how you should model the data for your store object. Do you need to keep 
track of the details of each meal added? What's the most reliable way to structure your data such that if 
a user had been entering new information for 10 minutes, your render() function could accurately draw 
the page from scratch just by looking in the store?
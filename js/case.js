//add event handler/event listener to the case plus btn

// click porbe jekhane event handle sekhane.

function updateCaseNumber(isIncrease) {
       //get the element from the 'case number field' by its id    
    const caseNumberField = document.getElementById('case-number-field');
    // we will get the value of from the input filed by .value 
    const caseNumberFieldString = caseNumberField.value;

    // convert the string into a number
    const previousCaseNumber = parseInt(caseNumberFieldString); 

    // add the new case number with the previous case number 
    let newCaseNumber;
    
    if (isIncrease===true) {
        newCaseNumber = previousCaseNumber + 1;
    }

    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    // set the value to the case number field   
    caseNumberField.value = newCaseNumber;  

    return newCaseNumber;
}

//update case function

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
    
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    // true parameter will increase 
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber)
     calculateSubTotal()


})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    // false parameter will decrease 
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber)
     calculateSubTotal()

})

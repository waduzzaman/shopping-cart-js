


function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseFloat(phoneNumberFieldString);

    let newPhoneNumber;

    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }

    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    //set the new phone number in the field 
    phoneNumberField.value = newPhoneNumber;
    
    return newPhoneNumber;

    
}

function updatePhoneTotalPrice(newPhoneNumber) {
    
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    //set the phone total price 
    phoneTotalElement.innerText = phoneTotalPrice;

}




document.getElementById('btn-phone-plus').addEventListener('click', function () { 
    const newPhoneNumber = updatePhoneNumber(true)
    updatePhoneTotalPrice(newPhoneNumber) 
    calculateSubTotal()
    

    
})

document.getElementById('btn-phone-minus').addEventListener('click', function () { 
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber) 
     calculateSubTotal()
})
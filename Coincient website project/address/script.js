function submitForm() {
    var formData = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value
    };
}
function checkout() {
    var deliveryAddress = document.getElementById('delivery-address').value;

    if (deliveryAddress.trim() === '') {
        alert('Please enter your delivery address.');
    } else {

        alert('Checkout successful!\nItems will be delivered to:\n' + deliveryAddress);
        clearCart();
        updateCartView();
    }
}

function checkout() {
    var deliveryAddress = document.getElementById('delivery-address').value;

    if (deliveryAddress.trim() === '') {
        alert('Please enter your delivery address.');
    } else {
        var orderData = {
            name: 'John Doe', 
            email: 'john.doe@example.com',  
            deliveryAddress: deliveryAddress,
            cart: shoppingCart
        };

    }
}
const scriptURL =
'https://script.google.com/macros/s/AKfycby9brWkopOk4-JqtSQP_jboZkzNDqjkViF2SzFSfKxDLK17lFdn2clRmpheOqc1-t8m/exec'
const form = document.forms['Address']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(() => alert(
        "Thanks for Giving Address!!!"))
    .catch(error => console.error('Error!', error.message))
})
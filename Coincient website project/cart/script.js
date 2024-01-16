var shoppingCart = [];

function updateCartView() {
    var cartItemsSection = document.getElementById('cart-items');
    var totalBillParagraph = document.getElementById('total-bill');
    var checkoutSection = document.getElementById('checkout-section');

    cartItemsSection.innerHTML = '';

    for (var i = 0; i < shoppingCart.length; i++) {
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        var itemName = document.createElement('p');
        itemName.textContent = shoppingCart[i].name;

        var itemPrice = document.createElement('p');
        itemPrice.textContent = '$' + shoppingCart[i].price;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        cartItemsSection.appendChild(itemDiv);
    }

    var totalBill = calculateTotalBill();
    totalBillParagraph.textContent = 'Total Bill: &#8377;' + totalBill.toFixed(2);

    if (shoppingCart.length > 0) {
        checkoutSection.style.display = 'block';
    } else {
        checkoutSection.style.display = 'none';
    }
}

function calculateTotalBill() {
    var total = 0;

    for (var i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price;
    }

    return total;
}

function clearCart() {
    shoppingCart = [];
}
updateCartView();
const scriptURL =
'https://script.google.com/macros/s/AKfycbzZU_3abOEajuJRyFskKpcxJu-aAcUcPrvmp6fiUNuZVZOxXxIhdnWKPgONAr0eD11h2A/exec'
const form = document.forms['Bill']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(() => alert(
        "Thanks for Checking Out!!!"))
    .catch(error => console.error('Error!', error.message))
})

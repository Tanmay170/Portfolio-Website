const droplist = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".change-from select"),
toCurrency = document.querySelector(".change-to select"),
getButton = document.querySelector("form button");
for (let i = 0; i < droplist.length; i++) {
    for (currency_code in country_code) {
        let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code == "INR" ? "selected" : "";
        }

        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}"${selected}>${currency_code}</option>`;
        // inserting option tag inside select tag 
        droplist[i].insertAdjacentHTML("beforeend", optionTag);
    }
    droplist[i].addEventListener("change", e => {
       loadflag(e.target); // calling loadflag with passing target element as an argument
    });

}
function loadflag(element){
    for(code in country_code){
        if(code == element.value){ // if currency code of country list is equal to option value
            let imgTag = element.parentElement.querySelector("img"); // selecting image tag of particular drop list
            // passing country code of a selected currency code in a img url
            imgTag.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`

        }
    }
}

window.addEventListener("load", () =>{
     getExchangeRate();
});
getButton.addEventListener("click",e =>{
     e.preventDefault(); //preventing form from submitting
     getExchangeRate();
});

   const exchangeIcon = document.querySelector(".drop-list .icon");
   exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value; // temporary currency code of from drop list
    fromCurrency.value = toCurrency.value; // passing to currency code to from currency code
    toCurrency.value = tempCode; // passing temporary currency code to to currency code
    loadflag(fromCurrency); // calling loadflag with passing select element (fromcurrency) of from 
    loadflag(toCurrency); // calling loadflag with passing select element (tocurrency) of to
    getExchangeRate();

   });


function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    exchangeratetxt = document.querySelector(".exchanged");
    let amountVal = amount.value;
    // if user don't enter any value or enter 0 then we'll put 1 value by default in the output field
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeratetxt.innerText = "Getting Exchange Rate.....";
    // getting values of both drop list
    let url = `https://v6.exchangerate-api.com/v6/645902ccccf09e37f85a4d66/latest/${fromCurrency.value}`;
    // fetching API response and returning it with passing into js object and in another then method recieving that object
    fetch(url).then(response => response.json()).then(result =>{
        let exchangerate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangerate).toFixed(2);
        exchangeratetxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    }).catch(() => { // if user is offline or any other error occured while fetching data then catch function will run 
        exchangeratetxt.innerText = "Something went wrong";
    });
}
//let orderPriceArray = []; 
let today = new Date(); 
let count = 0; 
let priceArray =[]; 
let quantityArray = []; 
let priceQuantity = [];
 
$(document).ready(function () { 
 
 
    $(".card").click(function () { 
 
        let alreadyExist = false; 
        let img = $(this).find('img').attr("src"); 
        let pname = $(this).find('.pname').text(); 
        let code = $(this).find('.code').text(); 
        let price = $(this).find('.price').text(); 
 
 
 
        let items = $(".item"); 
        for (let index = 0; index < items.length; index++) { 
            let exist = items[index].childNodes[1].childNodes[1].innerText; 
            if (exist == code) { 
                alreadyExist = true; 
                alert("Item has already exit in cart.") 
 
            } 
        } 
 
        if (!alreadyExist) { 
 
            $(".calculateitem").append( 
                '<div class="item">' + 
                '<img src="' + img + '"alt = "" />' + 
                '<div class= "itemdetail">' + 
                '<p id= "pname">' + pname + '</p>' + 
                '<p id= "code">' + code + '</p>' + 
                '</div>' + 
                '<div class="item-price">Ks' + price + '</div> ' + 
                '<input type ="text" class = "num" value = "1">' + 
                //'<div id="total-price"><h3>Ks' + itemsPrice + '</h3></div>' + 
                '<button  class= "delete" ' + 'id="' + count + '" <img src="cross.png"/> </button> ' + 
                '</div>' 
            ) 
            
            let priceArray =[]; 
            let p = $(".item-price").text(); 
            priceArray.push(p);
    
        
           
            let q = $(".num").val();
            quantityArray.push(q);
    
            console.log(priceArray);
            console.log(quantityArray);
            
    
          
            for(let i = 0; i < priceArray.length; i++){
                let r = ( quantityArray[i]* priceArray[i]); 
                priceQuantity.push(r);
            }
            
            console.log(priceQuantity);
            originalTotal();
            checkWeelEnd(); 
            initialState();
 
        } 

        
        

        // get quantity 
        
        /*
        let quantityFields = $('.num').val(); 
        let itemsPrice = (price * quantityFields); 
        orderPriceArray.push(itemsPrice); 
        
        originalTotal(); 
        checkWeelEnd(); 
        initialState(); 
 
        */
        count++; 
    }); 
 
    //for delete button
    $(document).on('click', '.delete', function () { 
 
        priceQuantity[(this.id)] = 0; 
        $(this).closest('.item').remove(); 
        originalTotal(); 
        checkWeelEnd(); 
    }); 
 
 
}); 
 
 
function originalTotal() { 
 
    let total = 0; 
 
    for (let i = 0; i < priceQuantity.length; i++) { 
        let all_prices = Number(priceQuantity[i]) 
        total += all_prices; 
    } 
 
    document.getElementById("originaltotal").innerHTML = 'Ks' + total; 
 
    console.log(total); 
} 
 
//For check discount
function checkWeelEnd() { 
 
    if (today.getDay() == 0 || today.getDay() == 6) { 
        if (Number(today.getHours()) >= 9 && Number(today.getHours() <= 17)) { 
            var cost = $("#originaltotal").text(Number()); 
            document.getElementById("discountprice").innerHTML = 'Ks' + (cost * 0.15); 
        } 
    } 
} 

//For InitialState
function initialState() { 
 
    $(".detitle").hide(); 
    $(".form").hide(); 
    $(".grandtitle").hide(); 
    $(".grandamount").hide(); 
    $(".order").hide(); 
} 
 
//After clicking delivery Button

$(document).on('click', '.delivery', function () { 
 
    $(".detitle").show(); 
    $(".form").show(); 
    $(".grandtitle").show(); 
    $(".grandamount").show(); 
    $(".order").show(); 
});

// for deli state 


let state = document.getElementsByClassName("state");
for(let i = 0; i < state.length; i++){

    comsole.log(state[i].value());
    state[i].addEventListener('change', grandTotal);
            
}
function grandTotal() {

 let gtotal = 0 ;
 let originaltotal=document.getElementById("originaltotal")
 let ototal = Number(originalTotal.innerText.replace('Ks', ''))
 let deli = document.getElementsByClassName("state").value();
 gtotal =  ototal + deli ;

 document.getElementsByClassName("grandamount").innerHTML ='Ks' + gtotal;
}

$(document).on('click', '.order', function () { 

let userName = $(".userName").text();
let userAddress = $(".userAddress").text();
let userPh = $(".userPh").text();

    $(".orderdetail").show(
        '<h3>Thank You' + userName  +'.</h3>' +
        '<h3> We received your order!</h3>' +
        '<h3>We will deliever to your place at ' +  userAddress + '.</h3>' +
        '<h3>Before delivery, we will inform to you' + vuserPh + '.</h3>'
    )
    
});
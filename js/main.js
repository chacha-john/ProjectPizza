let orderData = document.querySelector("form#orderForm")
let orders = []

function Order(pizzaName, pizzaCrust,pizzaSize,pizzaToppings){
    this.pizzaName = pizzaName
    this.pizzaCrust = pizzaCrust
    this.pizzaSize = pizzaSize
    this.pizzaToppings = pizzaToppings
    this.total = parseInt(pizzaCrust) + parseInt(pizzaSize) + parseInt(pizzaToppings)
}
orderData.addEventListener("submit",(e)=>{
    e.preventDefault()
    let pizzaName = orderData.typeOfPizza.value
    let pizzaSize = orderData.sizeOfPizza.value
    let pizzaCrust = orderData.crust.value
    let pizzaToppings = orderData.topping.value
    console.log(pizzaToppings);
    let totalTopping;
    for(let i = 0; i<=pizzaToppings.length; i++){
        totalTopping += pizzaToppings[i]
        console.log(totalTopping)
    }
    
    if(orde == "cheese"){
        pizzaToppings = "50"
        console.log(pizzaToppings);
    }
    else if(document.getElementById("sauce").checked){
        pizzaToppings = "50"
    }
    else{
        pizzaToppings = "100"
    }
})
// const order = new Order(pizzaName,pizzaSize,pizzaCrust,pizzaToppings)
//     orders.push(order)

// })

// const totalCost = () =>{
//     return orders.reduce((a,b)=>a.total + b.total)
// }


// priceCake = () =>{
//     let size = userData.sizeOfPizza.value
//     let crust = userData.crust.value
//     let toppings = 0;
//     let toppingsArr = userData.topping

//     for(let i = 0; i<=toppingsArr.length;i++){
//         toppings =+ parseInt(toppingsArr[i].value)
//     }
//     console.log(toppings);
//     // Constructor for making a Pizza object
//     function Pizza(size,crust,topping){
//     this.size = size
//     this.crust = crust
//     this.topping = topping
// }

// }

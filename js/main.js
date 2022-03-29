let orderData = document.querySelector("form#orderForm")
let orders = []
let overallcost
function Order(pizzaType, pizzaCrust,pizzaSize,pizzaToppings){
    this.pizzaType = pizzaType
    this.pizzaCrust = pizzaCrust
    this.pizzaSize = pizzaSize
    this.pizzaToppings = pizzaToppings
    this.total = parseInt(pizzaCrust) + parseInt(pizzaType) + parseInt(pizzaSize) + parseInt(pizzaToppings)
}

orderData.addEventListener("submit",(e)=>{
    e.preventDefault()
    let pizzaType = orderData.typeOfPizza.value
    let pizzaSize = orderData.sizeOfPizza.value
    let pizzaCrust = orderData.crust.value
    let pizzaToppings = orderData.topping.value
    
    let order = new Order(pizzaType, pizzaCrust,pizzaSize,pizzaToppings)
    
    orders.push(order.total)
    
    findTotal = (total,num)=>{
        return total + num
    }
    overallcost = orders.reduce(findTotal);
    
    document.querySelector("#submit").style.display = "none"
    document.querySelector(".cost").textContent = "Your order goes at Sh. " + overallcost
    document.querySelector("#control").style.display = "flex"

})

document.querySelector("#checkout").addEventListener("click",(e)=>{
    e.preventDefault()
    prompt = "Thank you for shopping with us! Your total cost is Sh. " + overallcost + ". Please visit our store within 12 hours to collect your order!"
    document.querySelector("#order").style.display = "none"
    document.querySelector("#output").textContent = prompt
    document.querySelector("#reviews").style.display = "none"
    document.querySelector("#about").style.display = "none"



})
let deliveryDetails = document.querySelector("form#location")

document.querySelector("form#location").addEventListener("submit",(e)=>{
    e.preventDefault()
    let jina = deliveryDetails.username.value
    let makaazi = deliveryDetails.residence.value

    let totalPayable = overallcost + 250 //additional fee for shipping

    prompt = "Thank you , " + jina + ", for shopping with us. Your total cost is " + totalPayable + " which will be paid on delivery at your residence in " + makaazi + "! Thank you!"

    document.querySelector("form#location").style.display = "none" //hide form used to collect user data
    alert(prompt)

})

document.querySelector("#delivery").addEventListener("click",(e)=>{
    e.preventDefault()
    document.querySelector("form#location").style.display = "block"
    document.querySelector("#order").style.display = "none"
    document.querySelector("#reviews").style.display = "none"
    document.querySelector("#about").style.display = "none"


})

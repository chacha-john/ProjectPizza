let orderData = document.querySelector("form#orderForm")
let deliveryDetails = document.querySelector("form#location")
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
    overallcost = orders.reduce(findTotal,0);
    
    document.querySelector("#submit").style.display = "none"
    document.querySelector(".cost").textContent = "Your order goes at Sh. " + overallcost
    document.querySelector("#control").style.display = "flex"

    document.querySelector("#checkout").addEventListener("click",(e)=>{
        e.preventDefault()
        prompt = "Thank you for shopping with us! Your total cost is Sh. " + overallcost + ". Please visit our store within 12 hours to collect your order!"
        document.querySelector("#order").style.display = "none"
        document.querySelector("#output").textContent = prompt
    
    })
})

deliveryDetails.addEventListener("submit",(e)=>{
    e.preventDefault()

    let username = deliveryDetails.username.value
    let residence = deliveryDetails.residence.value

    prompt = "Thank you for shopping with us, " + username +"! Your total cost is Sh. " + overallcost + ". Your delivery will be made at " + residence + " within 12 hours!"
    alert(prompt)
})

document.querySelector("#delivery").addEventListener("click",(e)=>{
    document.querySelector("form#location").style.display = "block"
    document.querySelector("#order").style.display = "none"

})
document.querySelector("#checkout").addEventListener("click",(e)=>{
    e.preventDefault()
    document.querySelector("#output").textContent = "Your total cost is Sh. " + order.total

})
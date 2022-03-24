let orderData = document.querySelector("form#orderForm")
let orders = []

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
    document.querySelector("#output").textContent = "Your total cost is Sh. " + order.total
    document.querySelector("#order").style.display = "none"
    document.querySelector("#checkout").style.display = "block"
    document.querySelector("#delivery").style.display = "block"
    
})

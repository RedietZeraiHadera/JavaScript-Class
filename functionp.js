// Create an array containing the names of all items in the inventory maximum of 10.
let allItems = ["banana","milk","bread","coffee","apple"]
//Create a separate array with the corresponding stock quantities of each item maximum of 10.
let allInventory = [12,20,19,30,40]

//Write a function to add a new item to the inventory, updating both arrays.
function addItem(newItem,newInventory){
    if(allItems.length<10){
        allItems.push(newItem);
        allInventory.push(newInventory);
        console.log(`added ${newInventory} amount of${newItem}`)
    }
    else{console.log("Inventory is full")}
}
// addItem("cheese",20);
// //Write a function to update the stock quantity of an existing item.
// function update(newItem,newInventory){
//            let index = allItem.indexOf(newItem)
//   if(index !== -1){
//     quantities[index] = newInventory;
//     console.log(quantities)
//     stock[newItem] = quantity
// }
// console.log(allInventory);
//Write a function to calculate the total number of items in the inventory.
//Write a function to find the item with the lowest stock quantity.


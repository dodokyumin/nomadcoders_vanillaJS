const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];

console.log(daysOfWeek, nonsense);

// Get Item from Array
console.log(daysOfWeek[5]);

// Add one more day to the Array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy);

//Change index
toBuy[1] = "water";
console.log(toBuy);

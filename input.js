document.addEventListener("DOMContentLoaded", () => {
    const foodNameInput = document.getElementById("foodName");
    const ingredientsInput = document.getElementById("ingredientsInput");
    const addFoodButton = document.getElementById("addFoodButton");
    const message = document.getElementById("message");

    // Example data storage (could be replaced by a database or API in the future)
    const foodDatabase = JSON.parse(localStorage.getItem("foodDatabase")) || {};

    addFoodButton.addEventListener("click", () => {
        const foodName = foodNameInput.value.trim().toLowerCase();
        const ingredients = ingredientsInput.value.trim().split(",").map(item => item.trim());

        if (foodName && ingredients.length) {
            foodDatabase[foodName] = ingredients;
            localStorage.setItem("foodDatabase", JSON.stringify(foodDatabase));
            message.textContent = `Food "${foodName}" added successfully!`;
            foodNameInput.value = "";
            ingredientsInput.value = "";
        } else {
            alert("Please enter a food name and its ingredients.");
        }
    });
});

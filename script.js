document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const result = document.getElementById("result");

    // Example data storage (could be replaced by a database or API in the future)
    const foodDatabase = JSON.parse(localStorage.getItem("foodDatabase")) || {};

    searchButton.addEventListener("click", () => {
        const foodName = searchInput.value.trim().toLowerCase();
        if (foodName) {
            if (foodDatabase[foodName]) {
                result.textContent = `Ingredients for ${foodName}: ${foodDatabase[foodName].join(", ")}`;
            } else {
                result.textContent = `No ingredients found for "${foodName}".`;
            }
        } else {
            alert("Please enter a food name.");
        }
    });
});

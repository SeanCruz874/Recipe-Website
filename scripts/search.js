<script>
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-container input");
    const recipeCards = document.querySelectorAll(".recipe-card");

    // Create a "No results" message element
    const noResultsMessage = document.createElement("div");
    noResultsMessage.textContent = "No recipes found.";
    noResultsMessage.style.textAlign = "center";
    noResultsMessage.style.color = "#888";
    noResultsMessage.style.marginTop = "20px";
    noResultsMessage.style.display = "none"; // hide it by default
    document.querySelector(".recipes-grid").appendChild(noResultsMessage);

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        let anyVisible = false; // check if any recipe matches

        recipeCards.forEach(card => {
            const titleElement = card.querySelector(".recipe-title");
            const title = titleElement ? titleElement.textContent.toLowerCase() : "";

            if (title.includes(searchTerm)) {
                card.style.display = "block";
                anyVisible = true;
            } else {
                card.style.display = "none";
            }
        });

        // Show or hide "No recipes found" message
        if (!anyVisible) {
            noResultsMessage.style.display = "block";
        } else {
            noResultsMessage.style.display = "none";
        }
    });
});
</script>

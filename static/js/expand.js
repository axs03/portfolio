document.addEventListener("DOMContentLoaded", function() {
    const arrowButton = document.getElementById("arrow-button");
    const codeContainers = document.querySelectorAll(".code-container");

    // Hide all code containers initially
    codeContainers.forEach(container => {
        container.style.display = "none";
    });

    // Toggle code container visibility when arrow button is clicked
    arrowButton.addEventListener("click", function() {
        codeContainers.forEach(container => {
            if (container.style.display === "none") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
    });
});

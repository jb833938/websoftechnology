// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = "block";
            section.classList.add("fade-in");
        } else {
            section.style.display = "none";
        }
    });
}

// Modal functionality for the Contact form remains the same
const modal = document.getElementById("contactModal");
const contactButton = document.getElementById("contactButton");
const closeButton = document.querySelector(".close");

contactButton.addEventListener("click", () => {
    modal.style.display = "block";
    modal.classList.add("fade-in");
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

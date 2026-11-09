const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Open navigation" : "Close navigation"
    );

    menuButton.querySelector(".menu-icon").textContent = isOpen ? "☰" : "×";

    navigation.classList.toggle("open", !isOpen);
});

navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");

        menuButton.querySelector(".menu-icon").textContent = "☰";
    }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

document.querySelector("#last-modified").textContent =
    `Last Modified: ${document.lastModified}`;
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion a");

    accordionItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let content = this.nextElementSibling;
            this.classList.toggle("active");
            if (content.classList.contains("active")) {
                content.style.maxHeight = null;
                content.classList.remove("active");
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add("active");
            }
        });
    });
});

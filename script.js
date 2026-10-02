function nextPage(pageNumber) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById("page" + pageNumber);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}
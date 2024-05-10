const root = "WSOA3028A_2597062";

const menuItems = [
    { name: "Week 1", href: "blog.html", summary: "My first experiences coding in HTML, trying to get GitHub to work, and my response to the reading 'Tower of Babel'." },
    { name: "Week 2", href: "blog2.html", summary: "The reading was about hypertext and I respond to it by unpacking its relevance today. I also underlined my folder structure and URL set up." },
    { name: "Week 3", href: "blog3.html", summary: "I did some investigating to find out my user alignment and who my users are." },
    { name: "Week 4", href: "blog4.html", summary: "My IxD process." },
    { name: "Week 6", href: "blog6.html", summary: "Pros and cons of South African websites." },
    { name: "Week 7", href: "blog7.html", summary: "Internet Access as a Fundamental Right close reading." },
    { name: "Week 9", href: "blog9.html", summary: "" },
    { name: "Week 10", href: "blog10.html", summary: "Close reading on digital inequalities." }
];

export function initialise(currentPage) {
    console.log("it should work");
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    for (let menuItem of menuItems) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = menuItem.name;
        a.setAttribute("href", menuItem.href);
        a.addEventListener("mouseover", function () {
            showTooltip(menuItem.summary);
        });
        a.addEventListener("mouseout", function () {
            hideTooltip();
        });
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
}

function showTooltip(text) {
    const tooltip = document.createElement("div");
    tooltip.innerText = text;
    tooltip.style.position = "absolute";
    tooltip.style.top = "100%";
    tooltip.style.left = "0";
    tooltip.style.background = "rgba(0, 0, 0, 0.8)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px";
    tooltip.style.zIndex = "1";
    document.body.appendChild(tooltip);
}

function hideTooltip() {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
        tooltip.remove();
    }
}
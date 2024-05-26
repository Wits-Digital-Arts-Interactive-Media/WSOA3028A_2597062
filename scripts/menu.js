
const root = "WSOA3028A_2597062"

const menuItems = [
    { name: "Home", href: `${root}/index.html` },
    { name: "Blogs", href: `${root}/Blogs/index.html` },
    { name: "Essays", href: `${root}/Essays/essay1.html` },
    { name: "Portfolio", href: `${root}/Portfolio/index.html` },
    { name: "Design", href: `${root}/Design/index.html` },
    { name: "About", href: `${root}/About/index.html` }
];

export function initialise(currentPage) {
    console.log("initialise function called");
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    for (let menuItem of menuItems) {
        const li = document.createElement("li");
        if (currentPage !== menuItem.name) {
            const a = document.createElement("a");
            a.innerText = menuItem.name;
            a.setAttribute("href", menuItem.href);
            li.appendChild(a);
        } else {
            li.innerText = menuItem.name;
        }
        ul.appendChild(li);
    }
    nav.appendChild(ul);
}










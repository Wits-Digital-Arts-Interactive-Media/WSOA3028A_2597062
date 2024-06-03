const root = window.location.origin + "/WSOA3028A_2597062"

const menuItems = [
    { name: "Home", href: root+ "/index.html" },
    { name: "Blog", href: `${root}/blogz/index.html` },
    { name: "Essay", href: `${root}/Essays/essay1.html` },
    { name: "Art", href: `${root}/Portfolio/index.html` },
    { name: "Design", href: `${root}/Design/index.html` },
    { name: "About", href: `${root}/About/index.html` }
];

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    ul.classList.add('navbar'); 

   for(let menuItem of menuItems) {
        const li = document.createElement("li")
        li.classList.add("menu-item");
        if(currentPage !=menuItem.name){
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        }else {
            li.innerText=menuItem.name
            li.classList.add("active");
        }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}
        








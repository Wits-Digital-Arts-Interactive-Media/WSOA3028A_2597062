const root = "/WSOA3028A_2597062/"


// const menuItems = [
//     { name: "Home", href: root+ "index.html" },
//     { name: "Blog", href: `${root}blogz/index.html` },
//     { name: "Essay", href: `${root}essay/essay1.html` },
//     { name: "Art", href: `${root}art/index.html` },
//     { name: "Design", href: `${root}designs/index.html` },
//     { name: "About", href: `${root}about/index.html` }
// ];

const menuItems = [
    { name: "Home", href:  "index.html" },
    { name: "Blog", href: `blogz/index.html` },
    { name: "Essay", href: `essay/index.html` },
    { name: "Art", href: `art/index.html` },
    { name: "Design", href: `designs/index.html` },
    { name: "About", href: `about/index.html` }
];

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    ul.classList.add('navbar'); 
    
    const logoLi = document.createElement("li");
    logoLi.classList.add("logo");
    const logoLink = document.createElement("a");
    logoLink.setAttribute("href", "index.html");
    logoLink.innerText = "PakotheArtist";
    logoLi.appendChild(logoLink);
    ul.appendChild(logoLi);
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
        








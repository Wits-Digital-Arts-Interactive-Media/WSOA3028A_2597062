const root = "/WSOA3028A_2597062"
const menuItems = [
    {name: "Home", href: root + "index.html"},
   {name: "Blog", href: "Blogs/index.html`"},
   {name: "Design", href: "Design/index.html`"},


]

const menuButtons =[];


export function initialise(currentPage) {
    const nav = document.querySelector("header > nav") //finding nav element
    const ul = document.createElement("ul") // creating unordered list
    for (let menuItem of menuItems) {
        const li = document.createElement("li")
        if (currentPage != menuItem.name) {
            const a = document.createElement("a");
            a.innerText = menuItem.name;
        
            if (currentPage == "Home") {
                a.setAttribute("href", menuItem.href);
            } else {
                const _href = "../" + menuItem.href;
                a.setAttribute("href", _href);
            }
        
            li.appendChild(a);
        } else {
            li.innerText = menuItem.name;
        }
ul.appendChild(li);
menuButtons.push(li);
       
}
nav.appendChild(ul);
}

// Call the initialise function with the current page name
// Replace 'currentPageName' with the actual name of the current page


//const you can only assign once  if you dont want to reasign 
//var old js dont use. 
//let use let instead of var. let can be redefined 

//nav bar

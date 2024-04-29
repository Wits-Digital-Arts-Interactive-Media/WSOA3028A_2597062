const root = "WSOA3028A_2597062"

const menuItems = [
    {name: "Home", href:"/index.html"},
    {name: "Blog", href: "/Blogs/index.html"},
    {name: "Essays", href: "/Essays/index.html"},
    {name: "Portfolio", href: "/Portfolio/index.html"},
    {name: "Design", href: "/Design/index.html"},
    {name: "About", href: "/About/index.html"},
]

export function initialise(currentPage) {
    console.log("it should work")
    const nav = document.querySelector("header > nav")       //nav is when you use links so this is getting it from the first header it finds
    const ul = document.createElement("ul")                  // ul is unordered list so this is creating it
    for (let menuItem of menuItems) {                        //basically for loop assigning each item in  menuItems to menuItem for each iteration
        const li = document.createElement("li")              //creates a list item 
        if (currentPage != menuItem.name) {                  //compares the names of the current page and the name of the menuitem page
            const a = document.createElement("a")            //a tag is for hyperlinks basically that href thing
            a.innerText = menuItem.name                      //this is the word that comes highlighted in blue
            a.setAttribute("href", menuItem.href)            //no clue what this does
            li.appendChild(a)                                //this adds it as a child of the li object we made
        } else { li.innerText = menuItem.name }
        ul.appendChild(li)                                   //adds it to the unordered list we made at the beginning
    }
    nav.appendChild(ul)
}








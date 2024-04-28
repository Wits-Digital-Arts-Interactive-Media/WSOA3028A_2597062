const root = "WSOA3028A_2597062"

const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Blogs", href: `${root}/blogs/index.html` },
    { name: "Design", href: `${root}/design/index.html` },
    { name: "Essays", href: `${root}/Essay/essay1.html` },
    { name: "Portfolio", href: `${root}/portfolio/index.html` },
]

export function initialiseMenu (currentPage) {
const nav = document.querySelector ("header > nav")
const ul = document.createElement ("ul")

for (let menuItem of menuItems) {
    const li = document.createElement("li")
        if(currentPage !=menuItem.name){
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
        } else { li.innerText=menuItem.name }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

const blogMenuItems = [
    { name: "Week 1", href: `${root}/Blogs/blog.html` },
    { name: "Week 2", href: `${root}/Blogs/blog2.html` },
    { name: "Week 3", href: `${root}/Blogs/blog3.html` },
    { name: "Week 4", href: `${root}/Blogs/blog4.html` },
    { name: "Week 6", href: `${root}/Blogs/blog6.html` },
    { name: "Week 8", href: `${root}/Blogs/blog8.html` },
    { name: "Week 9", href: `${root}/Blogs/blog9.html` },
    { name: "Week 10", href: `${root}/Blogs/blog1310.html` },
]

export function initialiseBlogMenu (currentBlog) {
    const nav = document.querySelector ("main > nav")
    const ul = document.createElement ("ul")
    
    for (let blogMenuItem of blogMenuItems) {
        const li = document.createElement("li")
            if(currentBlog !=blogMenuItem.name){
                const a = document.createElement("a")
                a.innerText = blogMenuItem.name
                a.setAttribute("href", blogMenuItem.href)
                li.appendChild(a)
            } else { li.innerText=blogMenuItem.name }
            ul.appendChild(li)
        }
        nav.appendChild(ul)




    }

// Call the initialise function with the current page name
// Replace 'currentPageName' with the actual name of the current page


//const you can only assign once  if you dont want to reasign 
//var old js dont use. 
//let use let instead of var. let can be redefined 

//nav bar

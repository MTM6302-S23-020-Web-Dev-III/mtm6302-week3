// Accessing document property
console.log(document.title)

// finding an element by id
const infoPara = document.getElementById("info")
console.log(infoPara)
console.dir(infoPara) // if console.log() shows us the string version of the object we can use console.dir() method

// addition assignment to the  textContent property of infoPara
infoPara.textContent += "Abhay"

// finding an element using CSS selector
let container = document.querySelector(".container")
console.log(container)

// using style object of an element
container.style.maxWidth = "800px"
container.style.margin = "0 auto"

// finding all the elements using CSS selector
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)

// accessing the element on second position and setting its style.background
allNodes[1].style.background = "cyan"

// looping through the allNodes array and assigning style.border to each item
for (let eachNode of allNodes) {
  eachNode.style.border = "1px solid black"
}

/* Traversing the DOM */

// finding the element by ID
const mainNodes = document.getElementById("threeNodes")
console.log(mainNodes)

// accessing the children property of the mainNodes variable
const listOfNodes = mainNodes.children

// selecting the second item and setting its styles
listOfNodes[1].style.margin = "10px 0"

const firstNode = mainNodes.firstElementChild
console.log(firstNode.textContent)

/* Attribute Methods */
const learnMore = document.getElementById("learn")
// getting attribute value
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))

// getting attribute value that is a property like id by using the property name
console.log(learnMore.id)

// setting attribute value
learnMore.setAttribute("target", "_blank")

// adding a class using classList 
learnMore.classList.add("btn")

const fakeConsole = document.getElementById("box")
fakeConsole.setAttribute("style", `
background-color: powderblue;
padding: 10px;
border: 1px solid black;`)

fakeConsole.innerHTML += "<p>This is a fake console, where we can output our information</p>"
fakeConsole.innerHTML += "The above URL is " + learnMore.getAttribute("href")
fakeConsole.innerHTML += "<br>" + document.URL


const listLink = [];
start()

function start() {
    const insertUser = prompt("Choose an option: \n1: Show links \n2: Add a link \n3: Remove a link \n0: Quit");
    const insertUserLowcase = insertUser.toLowerCase()

    verifyOption(insertUserLowcase)

}

function verifyOption(x) {
    switch (x) {
        case "1":
        case "show links":
            showLinks();
            break;
        case "2":
        case "add a link":
            addLinks();
            break;
        case "3":
        case "remove a link":
            removeLinks();
            break;
        case "0":
        case "quit":
            break;
        case "4":
        case "menu":
            start()
            break;
        default:
            verifyOption(prompt("I didn't understand! \nChoose an option: \n1: Show links \n2: Add a link \n3: Remove a link \n0: Quit").toLowerCase())
    }
}

function addLinks() {
    let receiveLink = {
        title: "",
        URL: "",
        author: ""
    }
    
    receiveLink.title = prompt("Enter your link title.")
    receiveLink.URL = prompt("Enter your link URL.")
    receiveLink.author = prompt("Enter the author of your link.")

    if (receiveLink.URL.startsWith("http://" || "https://") === false) {
        let sumText = "https://" + receiveLink.URL
        receiveLink.URL = sumText
    }

    listLink.push(receiveLink)
    start()
}

function showLinks() {
    let sumListLinks = ""
    listLink.forEach(element => {
        sumListLinks += `\n ${listLink.indexOf(element) + 1} - Title: ${element.title} | URL: ${element.URL} | Author: ${element.author}`
    })

    
    verifyOption(prompt(`Links: ${sumListLinks} \n\n\nChoose an option: \n2: Add a link | 3: Remove a link | 4: menu`))
}

function removeLinks() {
    let valueRemove = ""
    if (listLink.length === 0) {
        verifyOption(prompt("Nothing to be shown. \nEnter: '4: menu'"))
    } else {
        valueRemove = prompt(`Enter the index value to remove (between 1 and ${listLink.length} ) or Enter: '4: menu':`)
        if(valueRemove === "menu") {
            start()
        } else if(valueRemove <= listLink.length) {
            listLink.splice(valueRemove - 1, 1)
            showLinks()
        } else {
            verifyOption(prompt("Something went wrong! \nEnter: 'menu'"))
        }
    }
    
}

console.log(listLink)
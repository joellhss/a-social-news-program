const listLink = [
    {
        title: "Hacker News",
        URL: "https://news.ycombinator.com",
        author: "Baptiste"
    },
    {
        title: "Reddit",
        URL: "https://reddit.com",
        author: "Thomas"
    },
    {
        title: "Boing Boing",
        URL: "https://boingboing.net",
        author: "Daniel"
    },
];



const submit = document.getElementById('submit')

showLinks()

submit.addEventListener("click", e => {
    const form = document.createElement('form')
    form.id = "form"
    form.innerHTML = `<fieldset>
            <label for="title-link">
                <p>Title:</p>
                <input type="text" id="title-link" placeholder="Enter title here...">
            </label>
            
            <label for="author-link">
                <p>Author:</p>
                <input type="text" id="author-link" placeholder="Enter author name here...">
            </label>
            
            <label for="url-link">
                <p>URL:</p>
                <input type="url" id="url-link" placeholder="www.example.com">
            </label>
            <button type="submit" id="submit-form">Add link</button>
    </fieldset>`

    const body = document.querySelectorAll('body')
    const main = document.querySelector('main')
    const bodyArray = Array(body[0].children)

    bodyArray.forEach(e => {
        if (e.form === undefined) {
            body[0].insertBefore(form, main)
            document.querySelector("header").style.marginBottom = "15px";
        }
    })

    const buttonAdd = document.getElementById('submit-form')


    buttonAdd.addEventListener("click", e => {
    e.preventDefault()
    
    let receiveLink = {
        title: "",
        URL: "",
        author: ""
    }
    
    receiveLink.title = e.target.form[1].value;
    receiveLink.URL = e.target.form[3].value;
    receiveLink.author = e.target.form[2].value;

    if (receiveLink.URL.startsWith("http://" || "https://") === false) {
        let sumText = "https://" + receiveLink.URL
        receiveLink.URL = sumText
    }


    listLink.push(receiveLink)
    showLinks()

    document.getElementById('title-link').value=""
    document.getElementById('author-link').value=""
    document.getElementById('url-link').value=""

    document.querySelector('body').removeChild(document.querySelector('form'))

        const thanks = document.createElement('p')
        thanks.id = "thanks"
        thanks.innerText = "Thanks for collaborating!"
        body[0].insertBefore(thanks, main)

        setTimeout(() => {
            document.querySelector('body').removeChild(document.getElementById('thanks'))
            document.querySelector("header").style.marginBottom = "44px";
        }, 2000)


})


})


function showLinks() {
    const main = document.querySelector('main')

    let sumListLinks = ""

    listLink.forEach(element => {
        sumListLinks += `<div id="content">
        <div id="header">
            <a href="${element.URL}" id="title">${element.title}</a>
            <a href="${element.URL}" id="url">${element.URL}</a>
        </div>
        <p>Submited by <span id="author">${element.author}</span></p>
    </div>`
    
    main.innerHTML = sumListLinks 

    })

    
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
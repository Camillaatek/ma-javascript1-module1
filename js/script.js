//Question 1
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

var cat = {complain: function(){
    console.log("Meow!")
}}
cat.complain();

//Question 2
const heading = document.querySelector("h3")
heading.innerHTML = "Updated heading"

//Question 3
heading.style.fontSize = "2em"

//Question 4
document.querySelector("h2.another")

//Question 5
const paragraf = document.querySelectorAll("p")
paragraf.forEach(p => {
    p.style.color = "red"
})

//Question 6
const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = "<p>New paragraph</p>"
resultsContainer.style.background = "yellow"

//Question 7
const listCheck = (list) =>{
    for(i of list){
        console.log(i.name)
    }
}
listCheck(cats)

// q8
let catcontainer = document.querySelector(".cat-container")
const createCats = (cats) =>{
    for(const cat of cats){
        if(cat.age === undefined){
            cat.age = "Age unknown"
        }
        let newDiv =`
        <div>
        <h2>${cat.name}</h2>
        <p>${cat.age}</p>
        </div>
        `;
        catcontainer.innerHTML += newDiv
    }
}

createCats(cats)
const container = document.getElementById("container");
// Add Buttons
const catbut = document.getElementById("explicit")
const devbut = document.getElementById("dev")
const fbut = document.getElementById("fashion")
const histbut = document.getElementById("history")
const relbut = document.getElementById("religion")

// fetch dev jokes
fetch("https://api.chucknorris.io/jokes/random?category=dev")
.then((response) => response.json())
.then((jokes=>devJokes(jokes)))

function devJokes(jokes){
    //create a variable to render the jokes to
    devbut.addEventListener("click", (event) =>{
        //create a variable to render the jokes to
        const value = document.getElementById("random1")
        value.innerHTML = jokes.value;
    })
}

// Fetch explicit jokes
fetch("https://api.chucknorris.io/jokes/random?category=explicit")
.then((response) => response.json())
.then((jokes =>explicitJokes(jokes)))

function explicitJokes(jokes){
    catbut.addEventListener("click", (event) =>{
        event.preventDefault();
        //create a variable to render the jokes to
        const value1 = document.getElementById("random1")
        value1.innerHTML = jokes.value;
    })
}

// Fetch history jokes
fetch("https://api.chucknorris.io/jokes/random?category=history")
.then((response) => response.json())
.then((jokes=>historyJokes(jokes)))

function historyJokes(jokes){
    //create a variable to render the jokes to
    histbut.addEventListener("click", (event) =>{
        //create a variable to render the jokes to
        const value = document.getElementById("random1")
        value.innerHTML = jokes.value;
    })
    
}

// fetch fashion jokes
fetch("https://api.chucknorris.io/jokes/random?category=fashion")
.then((response) => response.json())
.then((jokes=>fashionJokes(jokes)))

function fashionJokes(jokes){
    //create a variable to render the jokes to
    fbut.addEventListener("click", (event) =>{
        //create a variable to render the jokes to
        const value = document.getElementById("random1")
        value.innerHTML = jokes.value;
    })
    
}
// Fetch religious jokes
fetch("https://api.chucknorris.io/jokes/random?category=religion")
.then((response) => response.json())
.then((jokes=>religionJokes(jokes)))

function religionJokes(jokes){
    //create a variable to render the jokes to
    relbut.addEventListener("click", (event) =>{
        //create a variable to render the jokes to
        const value = document.getElementById("random1")
        value.innerHTML = jokes.value;
    })
    
}
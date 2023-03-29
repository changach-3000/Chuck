const container = document.getElementById("container");

fetch("https://api.chucknorris.io/jokes/random")
.then((response) => response.json())
.then((jokes=>randomJokes(jokes)))

function randomJokes(jokes){
    //create a variable to render the jokes to
    const value = document.createElement("p");
    value.id = "random"
    value.innerHTML = jokes.value;
    container.appendChild(value);

}
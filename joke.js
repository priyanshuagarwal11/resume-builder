const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit";

let getJoke = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            // JokeAPI returns either a single-part joke (item.joke)
            // or a two-part joke (item.setup + item.delivery).
            if (item.joke) {
                jokeContainer.textContent = item.joke;
            } else if (item.setup && item.delivery) {
                jokeContainer.textContent = `${item.setup}\n\n${item.delivery}`;
            } else {
                jokeContainer.textContent = "No joke found.";
            }
        })
        .catch((err) => {
            console.error("Failed to fetch joke:", err);
            jokeContainer.textContent = "Couldn't load a joke.";
        });
};
btn.addEventListener("click", getJoke);
getJoke();
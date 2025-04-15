document.getElementById("jokeBtn").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      const joke = `${data.setup} — ${data.punchline}`;
      document.getElementById("jokeText").innerText = joke;
    })
    .catch(() => {
      document.getElementById("jokeText").innerText = "Oops! Couldn't fetch a joke.";
    });
});

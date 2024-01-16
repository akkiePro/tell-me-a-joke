async function fetchAPI() {
    let response = await fetch("https://joke-api-production-e11e.up.railway.app/joke-api/getOneJoke");
    // let response = await fetch("http://127.0.0.1:8080/joke-api/getOneJoke");
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    const result = response.json();
    console.log("res", result); // returns a promise(reason: without await for json)
    return result;
}
export const jokeFromAPI = await fetchAPI();

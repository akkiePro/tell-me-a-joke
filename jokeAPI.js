async function fetchAPI() {
    let response = await fetch("https://joke-api-production-e11e.up.railway.app/joke-api/allJokes");
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    const result = response.json();
    console.log("res", result); // returns a promise(reason: without await for json)
    return result;
}
export const jokeFromAPI = await fetchAPI();

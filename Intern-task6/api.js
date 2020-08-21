async function getimg() {
    const base_url = `https://api.nasa.gov/planetary/apod?api_key=QNO0YCShYWfomIo0eZrYnNHofiFLlkx5h4naqJMb`;

    const response = await fetch(base_url);
    const data = await response.json();
    console.log(data)


    let ig = data.hdurl
    document.getElementById("container").innerHTML += `<img src="${data.url}">`;

    document.getElementById("caption").innerText = data.title;
    document.getElementById("content-p").innerText = data.explanation;
    document.getElementById("dnld").href = data.hdurl;
    document.getElementById("date").innerText = data.date;


}
getimg();
function getXMLFile() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            document.getElementById("a").setAttribute("href", "#myModal");
        }
    };
    request.send();
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body:
    "title=" +
    encodeURIComponent("My awesome new article") +
    "&body=" +
    encodeURIComponent("This is the text"),
})
  .then(function (response) {
    console.log(response);
    if (response.ok) {
      return response.text();
    }
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.warn(err);
  });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

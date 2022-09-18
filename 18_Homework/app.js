let getXMLFile = function () {
      let request = new XMLHttpRequest();
      request.open("GET", "gethint.xml");
      request.setRequestHeader("Content-Type", "text/xml");
      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          SetXMLData(request.responseXML);
        }
      };
      request.send();
    };

    function SetXMLData(xml) {
      console.log(xml);
      const x = xml.getElementsByTagName("CD");
      let table = "<tr><th>Artist</th><th>Title</th></tr>";
      for (let i = 0; i < x.length; i++) {
        table +=
          "<tr><td>" +
          x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
          "</td></tr>";
      }
      console.log(table);
      document.getElementById("demo").innerHTML = table;
    }


    let xmlContent = "";
    let tableContent = document.getElementById("content");
    fetch("gethint.xml")
        .then((response) => response.text())
        .then((xml) => {
            xmlContent = xml;
            let parser = new DOMParser();
            let xmlDOM = parser.parseFromString(xmlContent, "application/xml");
            let artist = xmlDOM.getElementsByTagName("ARTIST");
            let title = xmlDOM.getElementsByTagName("TITLE");

            for (let i = 0; i < artist.length; i++) {
                let row = document.createElement("tr");

                let td = document.createElement("td");
                td.innerHTML = artist[i].childNodes[0].nodeValue;
                row.appendChild(td);

                td = document.createElement("td");
                td.innerHTML = title[i].childNodes[0].nodeValue;
                row.appendChild(td);

                tableContent.children[1].appendChild(row);
            }
        });
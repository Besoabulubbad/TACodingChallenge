var gallary = {};
gallary.loadedImages = []
gallary.loadGalary = function () {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            gallary.loadedImages = JSON.parse(this.responseText);
            gallary.render();
        }
    });

    xhr.open("GET", "https://api.thecatapi.com/v1/images/search?limit=5&size=full");
    xhr.setRequestHeader("x-api-key", "357900c8-edba-4edd-82de-8175918083e6");

    xhr.send();
}
gallary.render = function () {
    var container = document.getElementById('container');
    container.innerHTML = '';
    gallary.loadedImages.forEach(cat => {
        container.innerHTML = container.innerHTML + '<div class="responsive">' +
            '    <div class="gallery">' +
            '      <a target="_blank" href="' + cat.url + '">' +
            '        <img src="' + cat.url + '" alt="Cinque Terre" width="600" height="400">' +
            '      </a>' +
            '      <div class="desc">' + cat.id + '</div>' +
            '    </div>' +
            '  </div>'
    });
}
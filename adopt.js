var adoptList = []

function empty() {
    var x, y, z, c, a;
    x = document.getElementById("Cname").value;
    y = document.getElementById("Breed").value;
    z = document.getElementById("Age").value;
    c = document.getElementById("Color").value;
    a = document.getElementById("Image").value;
    if (x == "" | y == "" | z == "" | c == "" | a == "") {
        alert("Please fill all the fields");

    } else {
        showThedata();
    };
}

function renderTable() {

    var tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    adoptList.forEach(adopt => {

        var tr = document.createElement('tr');
        for (let [key, value] of Object.entries(adopt)) {

            var td = document.createElement('td');
            switch (key) {
                case 'image':
                    var img = document.createElement('img');
                    img.src = value;

                    img.style = 'max-height:100px;'
                    td.appendChild(img);
                    break;
                default:
                    td.innerText = value;
                    break;
            }
            tr.appendChild(td);
        }
        var opertaions = document.createElement('td');
        var deleteBtn = document.createElement('input');
        deleteBtn.type = 'button';
        deleteBtn.value = 'Delete'
        deleteBtn.className = 'btn'
        deleteBtn.addEventListener('click', function () {
                if (confirm('are your sure you want to delete the adopt ?')) {

                    adoptList.splice(adoptList.indexOf(adopt), 1);
                    renderTable();
                }
            },

        )
        opertaions.appendChild(deleteBtn);
        tr.appendChild(opertaions);
        tbody.appendChild(tr);
    });
}

function showThedata() {

    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        adoptList.push({
            image: reader.result,
            name: document.getElementById("Cname").value,
            breed: document.getElementById("Breed").value,
            age: document.getElementById("Age").value,
            color: document.getElementById("Color").value
        });
        document.getElementById("form").reset();
        renderTable();
    }

    if (file) {
        reader.readAsDataURL(file);
    }


}
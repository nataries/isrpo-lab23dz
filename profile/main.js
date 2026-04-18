function saveData() {
    const name = document.getElementById("name").value.trim();
const age = document.getElementById("age").value.trim();
const city = document.getElementById("city").value.trim();
const hobby = document.getElementById("hobby").value.trim();
    if (!name || !age || !city || !hobby) {
        alert("Заполните все поля");
        return;
    }

    const output = `Имя: ${name} <br> Возраст: ${age} <br> Город: ${city} <br> Хобби: ${hobby}`;

    document.getElementById("output").innerHTML = output;
}
function clearData() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("hobby").value = "";

    document.getElementById("output").innerHTML = "";

}
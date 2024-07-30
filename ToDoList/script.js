let btn = document.querySelector("button");
let list = document.querySelector(".list");
let input = document.querySelector("input");
let newLi = document.querySelector("li");



btn.addEventListener("click", () => {

    if (input.value == "") {
        alert("please enter task");
    } else {

        let newLi = document.createElement("li");
        let task = list.appendChild(newLi);
        task.innerHTML = `${input.value}  <img class="delete2" src="./assests/icons8-delete-24.png" alt="">`;
        input.value = "";
    }
});

list.addEventListener("click", (event) => {
    if (event.target.nodeName == "IMG") {
        event.target.parentElement.remove();
    }
});


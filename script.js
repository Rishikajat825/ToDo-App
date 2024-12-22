const body = document.querySelector("body");
const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");


form.addEventListener("submit" , saveToDo);

function saveToDo(e){
    e.preventDefault()
    const list = document.createElement("li");
    list.className = " list-group-item mt-2";
    list.innerText = input.value;
    ul.appendChild(list)


    const delbtn = document.createElement("button");

    delbtn.className = "btn btn-danger float-end"
    delbtn.innerText = "X";

    list.appendChild(delbtn);

    form.reset()


}

ul.addEventListener("click" , delToDo);

function delToDo(e){

    if(e.target.className.includes("btn-danger")){
        let li = e.target.parentElement;
        li.remove();
    }
}

let addtodobtn=document.querySelector(".add-todo");
let todoinput=document.querySelector(".todo-input");
let todolist=document.querySelector(".todo-list-container");
todoinput.addEventListener("keypress",function(e){
    if(e.key=='Enter'){
        addtodo();
    }
});
addtodobtn.addEventListener("click",function(e){
    addtodo();
});
function deletetodo(e){
e.target.parentNode.remove();
}
function addtodo(e){
    let todoinputvalue=todoinput.value;
    if(todoinputvalue){
        appendtodo(todoinputvalue);
        todoinput.value="";
    }
}
function appendtodo(todo){
    let todoitemdiv=document.createElement("div");
    todoitemdiv.classList.add("todo-item");
    let ptag=document.createElement("p");
    ptag.classList.add("todo");
    ptag.textContent=todo;
    let button=document.createElement("button");
    button.classList.add("delete-todo");
    button.textContent="Delete";
    button.addEventListener("click",deletetodo);
    todoitemdiv.append(ptag);
    todoitemdiv.append(button);
    todolist.append(todoitemdiv);
    
}
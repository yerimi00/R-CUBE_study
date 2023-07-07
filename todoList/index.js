const toDoList = document.querySelector("#to-do-list");

function addNewTodo(text) {
  const li = document.createElement("li");
  li.textContent = text;
  toDoList.append(li);
}

addNewTodo("자바스크립트 공부하기");
addNewTodo("고양이 화장실 청소하기");
addNewTodo("고양이 장난감 쇼핑하기");

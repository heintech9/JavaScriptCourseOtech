document.getElementById("addTodoButton").addEventListener("click", function () {
    const todoText = document.getElementById("todoInput").value;
    if (todoText.trim() !== "") {
      const newTodo = document.createElement("li");
      newTodo.textContent = todoText;
  
      newTodo.addEventListener("click", function () {
        newTodo.classList.toggle("completed");
      });
  
      newTodo.addEventListener("dblclick", function () {
        newTodo.remove();
      });
  
      document.getElementById("todoList").appendChild(newTodo);
      document.getElementById("todoInput").value = "";
    }
  });
  
const form = document.querySelector("form");

class Tasks {
  constructor(id, title, completed) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

let taskList = {
  tasks: [
    {
      id: 1,
      title: "Faire les courses",
      completed: false,
    },
    {
      id: 2,
      title: "Faire la lessive",
      completed: true,
    },
    {
      id: 3,
      title: "Faire du sport",
      completed: false,
    },
  ],
};

// Affichage de la liste des tâches
function displayTasks() {
  const listElement = document.getElementById("list");
  listElement.innerHTML = "";

  taskList.tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("class", "checkbox");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      markTaskAsCompleted(task.id);
    });

    const taskTitle = document.createElement("span");
    taskTitle.textContent = task.title;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<img src="./assets/delete_forever_FILL0_wght400_GRAD0_opsz48.svg" alt="">`;
    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(deleteButton);
    listElement.appendChild(taskItem);
  });
}

// Ajouter une tâche à la liste
function addTask() {
  const taskInput = document.getElementById("item");
  const taskTitle = taskInput.value.trim();

  if (taskTitle !== "") {
    const newTask = {
      id: taskList.tasks.length + 1,
      title: taskTitle,
      completed: false,
    };

    taskList.tasks.push(newTask);
    displayTasks();
    taskInput.value = "";
  }
}

// Marquer une tâche comme terminée
function markTaskAsCompleted(taskId) {
  const task = taskList.tasks.find((task) => task.id === taskId);

  if (task) {
    task.completed = !task.completed;
    displayTasks();
  }
}

// Supprimer une tâche de la liste
function deleteTask(taskId) {
  const taskIndex = taskList.tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    taskList.tasks.splice(taskIndex, 1);
    displayTasks();
  }
}

window.addEventListener("load", displayTasks);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
});

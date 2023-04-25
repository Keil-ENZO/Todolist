const form = document.querySelector("form");

class taches {
  constructor(id, title, completed) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

let tache = [
  new taches(1, "Faire les courses", false),
  new taches(2, "Faire le ménage", false),
];


//Display tasks
function displayTaches() {
  tache.forEach((tache) => {
    list.innerHTML += `<li data-completed=${tache.completed} data-id=${tache.id}>${tache.title}</li>`;
  });
}

const local = window.localStorage.getItem("tache");
displayTaches(local);

//Add tasks
function Addtasks() {
    let newTache = new taches(tache.length + 1, item.value, false);
    tache.push(newTache);
    list.innerHTML += `<li data-completed=${tache.completed} data-id=${tache.id}>${item.value}</li>`;
    item.value = "";

    window.localStorage.setItem("tache", JSON.stringify(tache));
}

//Delete and completed tasks
function deleteCompletedTasks(e) {
    if (e.target.dataset.completed === "true") {
      e.target.remove();
      e.target.classList.remove("checked");
      tache.splice(e.target.dataset.id - 1, 1);
      return;
    } else {
      e.target.dataset.completed = true;
      e.target.classList.add("checked");
    }
  }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Addtasks();
});

list.addEventListener("click", deleteCompletedTasks)

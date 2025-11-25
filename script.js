// const todo = document.querySelector("#todo");
// const Progress = document.querySelector("#Progress");
// const done = document.querySelector("#done");

// let dragElement=null;


// const tasks = document.querySelectorAll(".task");

// tasks.forEach((task) => {
//   task.addEventListener("drag", (e) => {});
//   dragElement=task
// });

// function addDragEventsOnColumn(column) {
//   column.addEventListener("dragenter", (e) => {
//     e.preventDefault();
//     column.classList.add("hover-over");
//   });
//   column.addEventListener("dragleave", (e) => {
//     e.preventDefault();
//     column.classList.remove("hover-over");
//   });

//   column.addEventListener("dropover", (e) => {
//     e.preventDefault();
//   });
//   column.addEventListener("drop", (e) => {
//     e.preventDefault();

//     column.appendChild(dragElement)
//     column.classList.remove("hover-over")
//   });
// }

// addDragEventsOnColumn(todo);
// addDragEventsOnColumn(Progress);
// addDragEventsOnColumn(done);


const todo = document.querySelector("#todo");
const progress = document.querySelector("#Progress"); // make sure id matches HTML exactly
const done = document.querySelector("#done");

let dragElement = null;

// select all draggable tasks
const tasks = document.querySelectorAll(".task");

// add drag events to each task
tasks.forEach((task) => {
  task.addEventListener("dragstart", (e) => {
    dragElement = task;
    // optional, just for better UX
    e.dataTransfer.effectAllowed = "move";
  });

  task.addEventListener("dragend", () => {
    dragElement = null;
  });
});

function addDragEventsOnColumn(column) {
  // this is important: 'dragover', not 'dropover'
  column.addEventListener("dragover", (e) => {
    e.preventDefault(); // allow dropping
  });

  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    if (dragElement) {
      column.appendChild(dragElement);
    }
    column.classList.remove("hover-over");
  });
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

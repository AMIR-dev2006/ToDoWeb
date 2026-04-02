const btn1 = document.querySelector("#btnAdd");
const ToDoL = document.querySelector("#todo_list");
const template = document.querySelector("#taskt");
const inputEl = document.querySelector("input");

function newToDo() {
  let inputVal = inputEl.value;
  console.log(inputVal);

  const taskt = template.content.cloneNode(true);
  const tasktext = taskt.querySelector(".task-text");
  tasktext.textContent = inputVal;
  const optionsBtn = taskt.querySelector(".text-4xl");
  optionsBtn.addEventListener("click", () => {
    // حذف الحاوية بالكامل من الصفحة
    const confirmDelete = confirm("Do you want to delete this task?");
    if (confirmDelete) {
      optionsBtn.closest(".pixel-box").remove();
    }
  });
  if (inputVal === "") {
    alert("type ToDo before");
  } else {
    ToDoL.appendChild(taskt);
  }

  console.log(inputVal);
  inputEl.value = "";
  inputEl.focus();
}
btn1.addEventListener("click", newToDo);


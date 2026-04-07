// ============================================
// DOM ELEMENTS & VARIABLES
// ============================================

const btn1 = document.querySelector("#btnAdd");
const ToDoL = document.querySelector("#todo_list");
const template = document.querySelector("#taskt");
const inputEl = document.querySelector("input");

let tasks = []; // مصفوفة المهام الخاصة بنا

// ============================================
// FUNCTIONS
// ============================================

// 1. دالة حفظ المهام
function saveTasks() {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// 2. دالة تحميل المهام عند فتح الصفحة
function loadTasks() {
  const savedData = localStorage.getItem("myTasks");
  if (savedData) {
    tasks = JSON.parse(savedData);
    // رسم كل مهمة محفوظة على الشاشة
    tasks.forEach(task => renderTask(task)); 
  }
}

// 3. دالة إضافة المهمة للمصفوفة
function AddToDo() {
  let inputVal = inputEl.value.trim(); // trim() تزيل المسافات الفارغة

  // Validate: التحقق أولاً قبل عمل أي شيء
  if (inputVal === "") {
    alert("type ToDo before");
    return; // إيقاف الدالة هنا لمنع حفظ مهمة فارغة
  }

  const newToDo = {
    id: Date.now(),
    text: inputVal,
    checked: false,
  };

  tasks.push(newToDo); // إضافة للمصفوفة
  saveTasks();         // حفظ

  renderTask(newToDo); // رسم المهمة على الشاشة

  // Clear input field and reset focus
  inputEl.value = "";
  inputEl.focus();
}

// 4. دالة رسم المهمة على الشاشة (وربط الأزرار)
function renderTask(taskData) {
  // Clone template for new task
  const taskt = template.content.cloneNode(true);
  
  // تحديد الحاوية الرئيسية للمهمة وإضافة الـ ID لها (هنا حل مشكلة taskEl)
  const taskContainer = taskt.querySelector(".pixel-box");
  taskContainer.dataset.id = taskData.id;

  // وضع النص
  const tasktext = taskt.querySelector(".task-text");
  tasktext.textContent = taskData.text;

  // ------------------------------------------
  // إعداد الـ Checkbox
  // ------------------------------------------
  const checkBox = taskt.querySelector("input[name=checkbox]");
  checkBox.checked = taskData.checked; // تحديد حالة المربع بناءً على البيانات
  
  // تغيير شكل النص إذا كانت المهمة منجزة مسبقاً (اختياري)
  if(taskData.checked) {
    tasktext.style.textDecoration = "line-through";
  }

  checkBox.addEventListener("change", (e) => {
    // 1. تحديث المصفوفة
    const taskIndex = tasks.findIndex(t => t.id === taskData.id);
    if (taskIndex !== -1) {
      tasks[taskIndex].checked = e.target.checked;
      saveTasks(); // 2. الحفظ
      
      // تحديث الشكل
      tasktext.style.textDecoration = e.target.checked ? "line-through" : "none";
    }
  });

  // ------------------------------------------
  // إعداد زر الحذف
  // ------------------------------------------
  const optionsBtn = taskt.querySelector(".text-4xl");
  optionsBtn.addEventListener("click", () => {
    const confirmDelete = confirm("Do you want to delete this task?");
    if (confirmDelete) {
      // 1. الحذف من المصفوفة
      tasks = tasks.filter(t => t.id !== taskData.id);
      saveTasks(); // 2. الحفظ
      
      // 3. الحذف من الشاشة
      taskContainer.remove(); 
    }
  });

  // أخيراً، إضافة المهمة المجهزة إلى القائمة في الصفحة
  ToDoL.appendChild(taskContainer);
}

// ============================================
// EVENT LISTENERS & INITIALIZATION
// ============================================

btn1.addEventListener("click", AddToDo);

// تشغيل دالة التحميل عند فتح الصفحة لجلب المهام المحفوظة
loadTasks();
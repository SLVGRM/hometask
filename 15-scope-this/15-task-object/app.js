const ToDoList = {
  tasks: [
    {
      title: 'Помыть посуду',
      id: 7,
      priority: 0,
    },
    {
      title: 'test',
      id: -7,
      priority: -7,
    },
    {
      title: 'test',
      id: 0,
      priority: 92,
    },
  ],
  addTask: function (title, priority) {
    const id = this.tasks.length + 1;
    this.tasks.push({ title, id, priority });
  },
  removeTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  sortTasks: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
  updateTask: function (id, obj) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) return;

    if (obj.title) {
      task.title = obj.title;
    }
    if (obj.priority) {
      task.priority = obj.priority;
    }
  },
};

ToDoList.addTask('добавить метод обновления', 1);
ToDoList.addTask('проверить работоспособность методов', 2);
ToDoList.addTask('тест', 3);
console.log(ToDoList.tasks);
ToDoList.removeTask(4);
console.log(ToDoList.tasks);
ToDoList.sortTasks();
console.log(ToDoList.tasks);
ToDoList.updateTask(0, { title: 'new', priority: 7 });
console.log(ToDoList.tasks);

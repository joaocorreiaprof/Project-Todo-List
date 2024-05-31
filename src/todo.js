class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  sayInfo() {
    alert(this.title);
    alert(this.description);
  }
}

export { Todos };

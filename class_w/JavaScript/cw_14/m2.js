class TodoItem {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    getTemplate() {
        return `
           <li class="todo-item ${ this.completed ? 'completed' : '' }" data-id="${ this.id }">
            <span>${ this.text }</span>
            <div>
                <button class="toggle">${ this.completed ? 'completed' : 'Not completed' } </button>
                <button class="del">del</button>
            </div>
            </li>
        `;
    }
}

class TodoList {
    constructor() {
        this.items = JSON.parse(localStorage.getItem("items")) || [];
    }

    addItem(text) {
        const newItem = new TodoItem(Date.now(), text, false);
        this.items.push(newItem);
        this.save()
    }

    deleteItem(id) {
        this.items = this.items.filter(i => i.id !== +id);
        this.save()
    }

    toggleItem(id) {
        this.items = this.items.map((i) => {
            if (i.id === +id) {
                i.completed = !i.completed;
            }
            return i;
        })
        this.save()
    }

    save() {
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    getItems() {
        return this.items;
    }
}

class App {
    constructor() {
        this.todoList = new TodoList();
        this.form = document.getElementById('form');
        this.input = document.getElementById('input');
        this.listEl = document.getElementById('todo');

        this.form.addEventListener('submit', this.handelAdd.bind(this));
        this.listEl.addEventListener('click', this.handelClick.bind(this));

        this.render()
    }

    handelAdd(e) {
        e.preventDefault();
        const value = this.input.value.trim();
        if (!value) {
            return;
        }
        this.todoList.addItem(value)
        this.input.value = '';
        this.render()
    }

    handelClick(e) {
        const li = e.target.closest('li.todo-item');
        if (!li) {
            return;
        }
        // const id = li.dataset.id;
        const id = li.getAttribute('data-id');
        if (e.target.classList.contains('del')) {
            this.todoList.deleteItem(id)
        } else {
            this.todoList.toggleItem(id)
        }
        this.render();
    }

    render() {
        const items = this.todoList.getItems();
    const a =        items.map((item) => {
            const todoItem = new TodoItem(item.id, item.text, item.completed);
            return todoItem.getTemplate();
        }).join('');
        this.listEl.innerHTML =a
    }
}
new App();

let bookItem = []

/**
 * Створює бокову панель форми для додавання нової книги
 * Містить поля: назва книги, автор, зображення та випадковий ID
 */
function createAside() {
    const formFild = [
        {
            title: 'Book Title',
            placeholder: 'Enter Book Title',
            type: 'text',
            name: 'title',
            req: true
        }, {
            title: 'Book Autor',
            placeholder: 'Enter Book Autor',
            type: 'text',
            name: 'autor',
            req: true
        }, {
            title: 'Select Book Image',
            placeholder: null,
            type: 'file',
            name: 'img',
            req: false
        },
    ]
    const form = document.createElement('form');
    formFild.forEach(f => {
        const field = createFormRow(f.title, f.type, f.name, f.placeholder, f.req);
        form.append(field);
    })

    const label = document.createElement('label');
    label.innerHTML = `
    <label>
                <input required name="randomID" type="text">
                <button onclick="generateRandomID(16, '_random_')" type="button">radnom ID</button>
            </label>
            <div class="form-action">
                <button type="submit">create book</button>
            </div>
    `
    form.append(label);
    createBookFromForm(form);

    return form;
};

/**
 * Створює рядок форми з міткою та полем введення
 * @param {string} title - Заголовок поля
 * @param {string} type - Тип поля введення
 * @param {string} name - Ім'я поля
 * @param {string} placeholder - Текст підказки
 * @param {boolean} req - Чи є поле обов'язковим
 */
function createFormRow(title, type = 'text', name = null, placeholder = null, req = false) {
    // Продумати, як можна додати до типу файл , фільтер що це картинки

    const divFormRow = document.createElement("div");
    divFormRow.classList.add("form-row");
    const label = document.createElement("label");
    const input = document.createElement("input");
    if (placeholder) {
        input.placeholder = placeholder;
    }
    if (name) {
        input.name = name;
    }
    input.required = req;
    if (type === 'file') {
        input.hidden = true;
        label.classList.add('select_img');
        // 2_HW  зробити видаляння поточної картинки, та повернення тексту назат
        input.addEventListener('change', function (e) {
            const files = e.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();
                reader.onload = function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.classList.add('imgViev');
                    label.innerHTML = ``;
                    label.prepend(img);
                }
                reader.readAsDataURL(file);
            }
        })
    }
    input.type = type;
    label.append(title);
    if (type === 'textarea') {
        const textarea = createElement('textarea');
        textarea.name = name
        label.append(textarea);
    } else {
        label.append(input);

    }
    divFormRow.append(label);
    return divFormRow
};

/**
 * Створює основний контейнер сторінки, що складається з бічної панелі та основного вмісту
 * @param {Function} asideFN - Функція для створення бічної панелі
 * @param {Function} mainContainerFN - Функція для створення основного вмісту
 */
function createMainConteiner(asideFN, mainContainerFN) {
    const div = document.createElement("div");
    div.classList.add("main-container")

    const aside = asideFN();
    aside.classList.add("aside");
    const right = mainContainerFN();
    div.appendChild(aside);
    div.appendChild(right);
    document.getElementsByTagName("body")[0].appendChild(div);
};

createMainConteiner(createAside, createRightContainer);

/**
 * Створює HTML елемент з вказаним класом
 * @param {string} elem - Тип елементу
 * @param {string} classList - Клас елементу
 */
function createElement(elem, classList) {
    // що робити якщо "classList" массив
    // що робити якщо "classList" строка
    // як повинен вирулювати в коді
    const div = document.createElement(elem);
    div.classList.add(classList);
    return div;
}

/**
 * Створює правий контейнер з формою фільтрації та списком книг
 */
function createRightContainer() {
    const container = createElement('div', 'right-container');
    const card = createElement('div', 'card');
    const rowDiv = createElement('div', 'row');
    const formAutor = createFormRow('Autor');
    const formTitle = createFormRow('Title');
    const formFav = createFormRow('Favorite', 'checkbox');

    rowDiv.append(formTitle);
    rowDiv.append(formAutor);
    rowDiv.append(formFav);

    const card2 = createElement('div', 'card');
    const itemList = createElement('div', 'item-list');
    bookItem.forEach((item) => {
        itemList.append(createItem(item));
    })
    card2.append(itemList);
    card.appendChild(rowDiv);
    container.appendChild(card);
    container.appendChild(card2);
    return container;
}

/**
 * Створює елемент книги для відображення в списку
 * @param {Object} item - Об'єкт з даними книги
 */
function createItem(item) {
    const itemDiv = createElement('div', 'item');
    itemDiv.id = item.randomID;
    // коли нема посилання на картинку. встановити дефолт Картинку
    // подумати як зробити img
    const classFav = item.fav ? 'item-fav item-fav-active' : 'item-fav';

    itemDiv.innerHTML = `
    <div class="item-info">
         <div class="item-img">
             <img src="${ item.imgUrl }" alt="">
         </div>
         <div class="item-box">
             <h3 class="item-title">${ item.title }</h3>
             <div class="item-author">${ item.autor }</div>
         </div>
     </div>
     <div class="item-controll">
        <label class="${ classFav }">fav<input hidden="" onclick="updateItemFav('${ itemDiv.id }')" value="${ item.fav }" type="checkbox"></label>
         <button onclick="editItem('${ itemDiv.id }')">edit</button>
         <button onclick="deleteItem('${ itemDiv.id }')">del</button>
     </div>
    `;

    return itemDiv;
}

/**
 * Додає обробник подій для форми створення нової книги
 * @param {HTMLFormElement} form - Форма створення книги
 */
function createBookFromForm(form) {

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const book = {
            fav: false,
            description: '',
            text: '',
        }
        for (const [key, value] of formData.entries()) {
            book[key] = value;
        }

        bookItem.push(book);
        setItemByStorage(bookItem);
        updateItemList();
        form.reset();
    });
}

/**
 * Оновлює список книг на сторінці
 * @param {Array} itemList - Масив книг для відображення
 */
function updateItemList(itemList) {
    const list = document.querySelector('.item-list');
    list.innerHTML = '';
    if (itemList) {
        bookItem = itemList;
    }
    bookItem.forEach((item) => {
        list.append(createItem(item));
    })
}

/**
 * Генерує випадковий ID для нової книги
 * @param {number} length - Довжина ID
 * @param {string} prefix - Префікс для ID
 */
function generateRandomID(length, prefix) {
    const charts = 'QWERTYUIOPLKJHGFDSAZXVBVBNNMqwertyuioplkjhgfdsazxvbvbnnm1234567890';
    let id = prefix;
    for (let i = 0; i < length; i++) {
        id += charts.charAt(Math.floor(Math.random() * charts.length));
    }
    document.querySelector('input[name="randomID"]').value = id;
}

/**
 * Зберігає дані в localStorage
 * @param {Array} item - Масив книг для збереження
 */
function setItemByStorage(item) {
    localStorage.setItem('items', JSON.stringify(item));
}

/**
 * Оновлює статус "улюблене" для книги
 * @param {string} id - ID книги
 */
function updateItemFav(id) {
    bookItem.forEach((item) => item.randomID === id && (item.fav = !item.fav));
    setItemByStorage(bookItem);
    updateItemList(bookItem);
}

/**
 * Видаляє книгу зі списку
 * @param {string} id - ID книги для видалення
 */
function deleteItem(id) {
    bookItem = bookItem.filter(item => item.randomID !== id);
    setItemByStorage(bookItem);
    updateItemList(bookItem);
}

/**
 * Переходить на сторінку редагування книги
 * @param {string} id - ID книги для редагування
 */
function editItem(id) {
    // const mainContainer = document.querySelector('.main-container');
    // mainContainer.innerHTML = ``;
    const url = new URL(window.location);
    url.searchParams.set('bookID', id);
    window.history.pushState({}, '', url);
}

/**
 * Завантажує книги з localStorage при запуску програми
 */
function loadItems() {
    let items = localStorage.getItem('items');
    if (items) {
        items = JSON.parse(items);
        if (items.length > 0) {
            updateItemList(items)
        }
    }
}

setTimeout(loadItems, 500);

// 2 page


/**
 * Створює бокову панель для другої сторінки (редагування)
 */
function createAsidePage2() {
    const form = createElement('form');
    const field = createFormRow('Select images', 'field', 'select_img');
    form.append(field);

    return form;
}

/**
 * Створює правий контейнер для сторінки редагування книги
 */
function createRightContainerPage2() {
    const fields = [
        {
            title: 'Show ID',
            placeholder: '',
            type: 'text',
            name: 'randomID',
            req: false
        }, {
            title: 'Fav',
            placeholder: '',
            type: 'checkbox',
            name: 'fav',
            req: false
        }, {
            title: 'Edit Title',
            placeholder: 'Enter Book Title',
            type: 'text',
            name: 'title',
            req: false
        }, {
            title: 'Edit Autor',
            placeholder: 'Enter Book Autor',
            type: 'text',
            name: 'autor',
            req: false
        }, {
            title: 'Add Description',
            placeholder: 'Enter Book Description',
            type: 'textarea',
            name: 'description',
            req: false
        }, {
            title: 'Edit Full Text',
            placeholder: 'Enter Book Text',
            type: 'textarea',
            name: 'full_Text',
            req: false
        },
    ];
    const container = createElement('div', 'right-container');
    const form = createElement('form', 'edit-container');
    fields.forEach(f => {
        form.append(createFormRow(f.title, f.type, f.name, f.placeholder, f.req))
    })
    const btnSbm = createElement('button', 'save');
    btnSbm.innerText = 'Save';
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const book = {}
        for (const [key, value] of formData.entries()) {
            book[key] = value;
        }
        saveBookByEdit(book)

    });
    form.append(btnSbm);
    container.append(form);
    return container;

}

/**
 * Зберігає відредаговані дані книги
 * @param {Object} book - Об'єкт з оновленими даними книги
 */
function saveBookByEdit(book) {
    let books = JSON.parse(localStorage.getItem('items'))
    books.map(b => {
        return b.randomID === book.randomID ? book : b
    })

    setItemByStorage(books);

}


createMainConteiner(createAsidePage2, createRightContainerPage2);

/**
 * Завантажує дані книги у форму редагування
 */
function uploadBookInEditor() {
    const bookID = new URLSearchParams(window.location.search).get('bookID');
    const book = JSON.parse(localStorage.getItem('items')).find(item => item.randomID === bookID);
    const form = document.querySelector('.edit-container');
    for (const bookKey in book) {
        const input = form.elements[bookKey];
        if (input) {
            input.value = book[bookKey];
        }
        if (bookKey === 'fav') {
            input.checked = book[bookKey];
        }
    }
}

uploadBookInEditor()


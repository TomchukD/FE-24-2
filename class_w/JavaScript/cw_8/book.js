const bookItem = [
    {
        title: 'Book Title',
        autor: 'Book autor',
        imgUrl: '',
        id: '1234-4321',
        fav: false,
        description: 'description',
        text: 'text book text',
    }, {
        title: 'Book Title1',
        autor: 'Book autor2',
        imgUrl: '',
        id: '1234-4321323',
        fav: true,
        description: 'description1',
        text: 'text book text1',
    },
]

function createAside() {
    const formFild = [
        {
            title: 'Book Title',
            placeholder: 'Enter Book Title',
            type: 'text',
            name: 'title'
        }, {
            title: 'Book Autor',
            placeholder: 'Enter Book Autor',
            type: 'text',
            name: 'autor'
        }, {
            title: 'Select Book Img',
            placeholder: null,
            type: 'file',
            name: 'img'
        },
    ]
    const form = document.createElement('form');
    formFild.forEach(f => {
        const field = createFormRow(f.title, f.type,f.name, f.placeholder);
        form.append(field);
    })

    const label = document.createElement('label');
    label.innerHTML = `
    <label>
                <input name="id" type="text">
                <button type="button">set ID</button>
                or
                <button type="button">radnom ID</button>
            </label>
            <div class="form-action">
                <button type="submit">create book</button>
            </div>
    `
    form.append(label);
    return form;
};

function createFormRow(title, type = 'text',name = null, placeholder = null) {
    // Продумати, як можна додати до типу файл , фільтер що це картинки

    const divFormRow = document.createElement("div");
    divFormRow.classList.add("form-row");
    const label = document.createElement("label");
    const input = document.createElement("input");
    if (placeholder) {
        input.placeholder = placeholder;
    }
    if(name){
        input.name = name;
    }
    input.type = type;
    label.append(title);
    label.append(input);

    divFormRow.append(label);
    return divFormRow
};

function createMainConteiner() {
    const div = document.createElement("div");
    div.classList.add("main-container")

    const aside = createAside();
    aside.classList.add("aside");
    const right = createRightContainer();
    div.appendChild(aside);
    div.appendChild(right);
    document.getElementsByTagName("body")[0].appendChild(div);
};

createMainConteiner();

// почати використовувати всюди
function createElement(elem, classList) {
    // що робити якщо "classList" массив
    // що робити якщо "classList" строка
    // як повинен вирулювати в коді
    const div = document.createElement(elem);
    div.classList.add(classList);
    return div;
}

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

function createItem(item) {
    const itemDiv = createElement('div', 'item');
    itemDiv.id = item.id;
    // коли нема посилання на картинку. встановити дефолт Картинку
    // подумати як зробити img
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
     <label>fav<input value="${ item.fav }" type="checkbox"></label>
         <button>edit</button>
         <button>del</button>
     </div>
    `;

    return itemDiv;
}
function createBookFromForm(){
    const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const book = {}
    for (const [key, value] of formData.entries()) {
        book[key] = value;
    }
    console.log(book);
});
}
createBookFromForm()

const form = document.querySelector("form");
console.log(form.elements);
const obj = {
    first: "John",
    last: 'Tom'
}
for (const objKey in obj) {
    console.log(form.elements[objKey])
    form.elements[objKey].value = obj[objKey];
}

const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    console.log(input.value)
})
const forms = new FormData(form);
console.log(...forms.entries());

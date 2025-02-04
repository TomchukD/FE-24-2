document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const list = document.querySelector('#list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        let val = '';
        for (const [key, value] of formData) {
            val = value;
        }
        val = val.trim();
        if (val === '') {
            return false;
        }

        const li = document.createElement('li');
        li.textContent = val;
        const btnDel = document.createElement('button');
        btnDel.textContent = '❌';
        btnDel.addEventListener('click', function () {
            list.removeChild(li);

        })
        li.append(btnDel);
        list.append(li);
        form.reset();
    })


    const input = document.querySelector('input');

    input.addEventListener('input', (e) => {
        const value = e.target.value;
        const regExNum = new RegExp('^\\d');
        const regExCpecial = new RegExp('^[!@#$%^&*()-_=+{}:./?~`"\']');
        const hintError = document.createElement('div');

        if (regExNum.test(value)) {
            hintError.innerText = 'error Patter: '+ ' '+ value
            e.target.value = ''
        }

        if (regExCpecial.test(value)) {
            hintError.innerText = 'error Patter' + ' '+ value
            e.target.value = ''
        }
        const first = form.fistChild;
        form.insertBefore(hintError, first);
        setTimeout(()=>{
            hintError.remove();
        }, 3000)

    })
})



let btn = document.querySelector('.btn');
let body = document.querySelector('.body')


btn.addEventListener('click', () => {
    if(body.classList.contains('white')) {
        body.classList.remove('white');
        body.classList.add('black');
    } else {
        body.classList.remove('black');
        body.classList.add('white')
    }
})

btn.addEventListener('click', () => {
    if(btn.classList.contains('black')) {
        btn.classList.remove('black');
        btn.classList.add('white');
    } else {
        btn.classList.remove('white');
        btn.classList.add('black');
    }
})
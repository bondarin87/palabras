let elems = document.querySelectorAll('p');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function func() {
    for (let i=0; i<elems.length; i++) {
        elems[i].textContent += (i+1);
    }
    btn.removeEventListener('click', func)
}
    )
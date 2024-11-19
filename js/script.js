let elems = document.querySelectorAll('p');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function func() {
    for (let i=0; i<elems.length; i++) {
        elems[i].textContent = elems[i].textContent + (i+1);
    }
    btn.removeEventListener('click', func)
}
    )
    
btn1.addEventListener('click', function func1() {
    for (let i=0; i<elems.length; i++) {
        elems[i].textContent = elems[i].textContent.substring(0,elems[i].textContent.length - 1);
        
    }
    btn1.removeEventListener('click', func1)
}
    )
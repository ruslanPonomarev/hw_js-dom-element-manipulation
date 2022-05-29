// const className = document.querySelector('.test');
// className.innerHTML = 'qwe';


let css = document.querySelector('input[name="test"]');

css.addEventListener('change', (ev) => {
    // console.log(ev.target);
    let text = ev.target.value;
    if(text === '1') {
        let css = document.querySelector('.test');
        css.style.backgroundColor = 'purple';
    }

    if(text === '2') {
        let css = document.querySelector('.test');
        css.style.backgroundColor = 'yellow';
    }
    if(text === '3') {
        let css = document.querySelector('.test');
        css.style.backgroundColor = 'yellow';
    }
    if(text === '4') {
        let css = document.querySelector('.test');
        css.style.backgroundColor = 'yellow';
    }
    if(text === '5') {
        let css = document.querySelector('.test');
        css.style.backgroundColor = 'green';
    }
    if(text === '4') {
        let css = document.querySelector('.test');
        css.style.backgroundColor = 'yellow';
    }
    else {
        let css = document.querySelector('.test');
        css.style.backgroundColor = 'grey'}
    // const text  = className2.value;

    console.log(text)
});
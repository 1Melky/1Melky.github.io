// img doet raar als ik een a gebruik in html
let click = document.querySelector('.click');
click.addEventListener("click", plekFunction)

function plekFunction() {
    window.location.href = `HL/index.html`
};

let click2 = document.querySelector('.click2');
click2.addEventListener("click", plekFunction2)

function plekFunction2() {
    window.location.href = `Escape room spel - kopie/welcome.html`
};

let click3 = document.querySelector('.click3');
click3.addEventListener("click", plekFunction3)

function plekFunction3() {
    window.location.href = `boterkaas/boter.html`
};
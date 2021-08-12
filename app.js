// DOM

const touches = [...document.querySelectorAll('.boutton')];

console.log(touches)

const listKeycode = touches.map(touches => touches.dataset.key)

console.log(listKeycode)

const ecran = document.querySelector('.ecran')

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if(listKeycode.includes(valeur)){
        switch(valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent)
                ecran.textContent = calcul;
                break;
            default:
            const indexKeycode = listKeycode.indexOf(valeur);
            const touche = touches [indexKeycode];
            ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('une erreur est survenur lors de L\'execution de votre calcul :' + e.message)
})
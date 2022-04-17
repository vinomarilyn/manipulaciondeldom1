function qs (element){
    return document.querySelector(element)
}
let main = qs('.container');
let h2 = qs('.subtitulo');
let a= qs('a');
let p = document.querySelectorAll('p');
let $body = qs('body');

let userName = prompt('Ingrese su nombre');
userName.trim() !== "" ? h2.innerText += `${userName}`:
 h2.innerText += "Invitad@";
 h2.style.textTransform = 'uppercase';
 /* ------------- */
 a.style.color = "#E51B3E";
 /* -------------- */
 let background = confirm('¿Desea colocar un fondo de pantalla?');

 background && $body.classList.add('fondo');//condicional

 /* --------------- */
 p.forEach((element, index)=> {
     if((index + 1) % 2 == 0){
         element.classList.add('destacadoPar');
     }else{
        element.classList.add('destacadoImpar');
     }
 })

 /* ---------------------- */
 

main.style.display = 'block'
window.onload = function(){

   function qs (element){
    return document.querySelector(element)
    } 
     let $body = qs('body');
     let h1 = qs('h1');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    let modo = confirm('Desea modo oscuro');
    if(modo){
        $body.style.backgroundColor = '#7f7f7f'
        $body.classList.add('fondoMoviesList');
    }
    
    console.log($body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}
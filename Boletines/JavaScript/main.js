//obtener los elemenos de la clase .close

let links = document.querySelectorAll(".close");

//recorrerlos

links.forEach(function(link) {
  //agregar un evento click a cada uno de ellos -case sensitive-
  link.addEventListener("click", function(ev) {
    //ev=evento
    ev.preventDefault();
    let content = document.querySelector(".content");

    //quitarle las clases de animacion que ya tiene
    content.ClassList.remove(fadeInDown);
    content.ClassList.remove(animated);

    //agregar clases para animar su salida fadeOutUp
    content.ClassList.add(fadeOutUp);
    content.ClassList.add(animated);

    //timer de 600ms para el recargo de pagina
    setTimeout(function() {
      location.href = "/Boletines";
    }, 600);

    return false;
  });
});

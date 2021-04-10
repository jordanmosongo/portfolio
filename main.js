//materialize jquery requirements
$(document).ready(function(){
  $('select').formSelect();
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
});
//Aos initialization
(function() {
  window.addEventListener('scroll', () => {
      AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false
      });  
  });
})()
//Animmation with gsap 
const tl = gsap.timeline({default: { ease : "power1.out"}});
tl.to('.banner-text__title__span', {
  y:"0%",
  duration : 1,
  stagger : 0.75
});
tl.fromTo('.banner-text__description', 
            {opacity : 0},
            {opacity : 1, duration : 1}
          );
tl.fromTo('.banner-text__bouton', 
          {opacity : 0},
          {opacity : 1, duration : 1}
        );
//slide width slick
// $(document).ready(function(){
//   $('.photo__container').slick({
//     autoplay:true,
//     arrows:false,
//     speed:500
//    });
// });
//my code in vanilla

function activateLink(event){
  event.preventDefault();
  let linkStrigger = event.target;
  let itemsLink = document.getElementsByClassName('menu-link__item');
  for(let item of itemsLink){
    item.classList.remove('active');
  }
  linkStrigger.classList.add('active');

}
//Manipulation du json
//btn.addEventListener("click", function () {
  // fetch("http://localhost:3000/visitors")
  //      .then(function (response) {
        //  return response.json();
      //    console.log(response.json());
      //  })
      // .then(function (data) {
      //    for (let contact of data) {
      //      const li = document.createElement("li");
      //      const content = document.createTextNode(
      //        `${contact.id} ${contact.nom} ${contact.prenom}`
      //      );
      //      li.appendChild(content);
      //      contacts.appendChild(li);
      //    }
      //  });
  //  });



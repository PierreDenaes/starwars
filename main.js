let monBouton = document.querySelector('.menuButton');


  monBouton.addEventListener('click', () => {
    
      const bar1 = document.querySelector(".bar1");
      bar1.classList.toggle("changeb1");
      const bar2 = document.querySelector(".bar2");
      bar2.classList.toggle("changeb2");
      const bar3 = document.querySelector(".bar3");
      bar3.classList.toggle("changeb3");
      const navMenu = document.querySelector(".menuNav");
      navMenu.classList.toggle("menuNav-open");
      
  });
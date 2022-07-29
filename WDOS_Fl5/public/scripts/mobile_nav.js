const nav_slide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_bar');
    const nav_buttons = document.querySelectorAll('.nav_bar li');
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
    //Animate button
        nav_buttons.forEach((button, index) => {
            if (button.style.animation) {
                button.style.animation = ''
            }
            else {
                button.style.animation = `navBarFade 0.5s ease forwards ${index / 7 + 0.1}s`;
                console.log(index / 7)
            }
        }
        );
        //Burger animation
        burger.classList.toggle('toggle');
    }

    
    );
   
}


nav_slide();

// When the user scrolls the page, execute myFunction
window.onscroll = function() {sticky_navbar()};

// Get the navbar
let navheader = document.getElementById("nav_header");
let navbar=document.getElementById("nav_bar");



// Get the offset position of the navbar
let stickyheader = navheader.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky_navbar() {
  if (window.pageYOffset >= stickyheader) {
    navheader.classList.add("sticky_header");
    navbar.classList.add("sticky_nav");
    
  } else {
    navheader.classList.remove("sticky_header");
    navbar.classList.remove("sticky_nav");
    
  }
}
// start bar function 
var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);
// end bar function 

//start animation fo component of tilte

document.addEventListener('DOMContentLoaded', function () {
  const targetElements = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class when element enters screen 
        entry.target.classList.add('animate-slide-up');
      } else {
        // Remove class when element exits screen to re-anime
        entry.target.classList.remove('animate-slide-up');
      }
    });
  });

  // Monitor each element that has a class. 'fade-in-up'
  targetElements.forEach(el => {
    observer.observe(el);
  });
});
//end animation fo component of tilte

//start functions show component of projects

//start function show component of css 
function show_css() {
  const box_css = document.getElementById('box_css');
  const box_bootstrap = document.getElementById('box_bootstrap');
  const box_tailwind = document.getElementById('box_tailwind');
  const box_javascript = document.getElementById('box_javascript');
  const box_react = document.getElementById('box_react');

  box_css.style.display = 'grid'; // Show the element by setting display to grid
  box_bootstrap.style.display = 'none'; // Show the element by setting display to grid
  box_tailwind.style.display = 'none'; // Show the element by setting display to grid
  box_javascript.style.display = 'none'; // Show the element by setting display to grid
  box_react.style.display = 'none'; // Show the element by setting display to grid
  setTimeout(() => {
    // Apply the smooth transition after the element is visible
    box_css.style.opacity = '1';
    box_bootstrap.style.opacity = '0';
    box_tailwind.style.opacity = '0';
    box_javascript.style.opacity = '0';
    box_react.style.opacity = '0';
    box_css.style.transform = 'scale(1)';
  }, 300); // A slight delay to allow the display change to take effect
}
//end function show component of css

//start function show component of bootstrap
function show_bootstrap() {
  const box_css = document.getElementById('box_css');
  const box_bootstrap = document.getElementById('box_bootstrap');
  const box_tailwind = document.getElementById('box_tailwind');
  const box_javascript = document.getElementById('box_javascript');
  const box_react = document.getElementById('box_react');

  box_bootstrap.style.display = 'grid'; // Show the element by setting display to grid
  box_css.style.display = 'none'; // Show the element by setting display to grid
  box_tailwind.style.display = 'none'; // Show the element by setting display to grid
  box_javascript.style.display = 'none'; // Show the element by setting display to grid
  box_react.style.display = 'none'; // Show the element by setting display to grid
  setTimeout(() => {
    // Apply the smooth transition after the element is visible
    box_bootstrap.style.opacity = '1';
    box_css.style.opacity = '0';
    box_tailwind.style.opacity = '0';
    box_javascript.style.opacity = '0';
    box_react.style.opacity = '0';
    box_bootstrap.style.transform = 'scale(1)';
  }, 300); // A slight delay to allow the display change to take effect
}
//end function show component of bootstrap

//start function show component of tailwind
function show_tailwind() {
  const box_css = document.getElementById('box_css');
  const box_bootstrap = document.getElementById('box_bootstrap');
  const box_tailwind = document.getElementById('box_tailwind');
  const box_javascript = document.getElementById('box_javascript');
  const box_react = document.getElementById('box_react');

  box_tailwind.style.display = 'grid'; // Show the element by setting display to grid
  box_bootstrap.style.display = 'none'; // Show the element by setting display to grid
  box_css.style.display = 'none'; // Show the element by setting display to grid
  box_javascript.style.display = 'none'; // Show the element by setting display to grid
  box_react.style.display = 'none'; // Show the element by setting display to grid
  setTimeout(() => {
    // Apply the smooth transition after the element is visible
    box_tailwind.style.opacity = '1';
    box_bootstrap.style.opacity = '0';
    box_css.style.opacity = '0';
    box_javascript.style.opacity = '0';
    box_react.style.opacity = '0';
    box_tailwind.style.transform = 'scale(1)';
  }, 300); // A slight delay to allow the display change to take effect
}
//end function show component of tailwind

//start function show component of javascript
function show_javascript() {
  const box_css = document.getElementById('box_css');
  const box_bootstrap = document.getElementById('box_bootstrap');
  const box_tailwind = document.getElementById('box_tailwind');
  const box_javascript = document.getElementById('box_javascript');
  const box_react = document.getElementById('box_react');

  box_javascript.style.display = 'grid'; // Show the element by setting display to grid
  box_bootstrap.style.display = 'none'; // Show the element by setting display to grid
  box_css.style.display = 'none'; // Show the element by setting display to grid
  box_tailwind.style.display = 'none'; // Show the element by setting display to grid
  box_react.style.display = 'none'; // Show the element by setting display to grid
  setTimeout(() => {
    // Apply the smooth transition after the element is visible
    box_javascript.style.opacity = '1';
    box_bootstrap.style.opacity = '0';
    box_css.style.opacity = '0';
    box_tailwind.style.opacity = '0';
    box_react.style.opacity = '0';
    box_tailwind.style.transform = 'scale(1)';
  }, 300); // A slight delay to allow the display change to take effect
}
//end function show component of javascript

//start function show component of react
function show_react() {
  const box_css = document.getElementById('box_css');
  const box_bootstrap = document.getElementById('box_bootstrap');
  const box_tailwind = document.getElementById('box_tailwind');
  const box_javascript = document.getElementById('box_javascript');
  const box_react = document.getElementById('box_react');

  box_react.style.display = 'grid'; // Show the element by setting display to grid
  box_css.style.display = 'none'; // Show the element by setting display to grid
  box_bootstrap.style.display = 'none'; // Show the element by setting display to grid
  box_tailwind.style.display = 'none'; // Show the element by setting display to grid
  box_javascript.style.display = 'none'; // Show the element by setting display to grid
  setTimeout(() => {
    // Apply the smooth transition after the element is visible
    box_react.style.opacity = '1';
    box_css.style.opacity = '0';
    box_bootstrap.style.opacity = '0';
    box_tailwind.style.opacity = '0';
    box_javascript.style.opacity = '0';
    box_react.style.transform = 'scale(1)';
  }, 300); // A slight delay to allow the display change to take effect
}
//end function show component of react

//end functions show component of projects

//start function show fixed navbar
document.addEventListener("DOMContentLoaded", function() {
  // Get the navigation bar element
  const navBar = document.getElementById('scrollNav');

  // Listen for the scroll event
  window.addEventListener('scroll', function() {
      // Check if the scroll position is greater than 100px from the top
      if (window.scrollY > 100) {
          navBar.classList.remove('hidden-nav');
          navBar.classList.add('visible-nav');
      } else {
          navBar.classList.remove('visible-nav');
          navBar.classList.add('hidden-nav');
      }
  });

});
//end function show fixed navbar

//start animation of fixed navbar color
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Listen for scroll events
  window.addEventListener('scroll', function () {
      let current = '';

      // Loop through each section to find which one is in view
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
              current = section.getAttribute('id');
          }
      });

      // Loop through nav links and apply the 'active' class based on the current section
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          }
      });
  });
});
//end animation of fixed navbar color

//start animation fo component of footer
document.addEventListener('DOMContentLoaded', function () {
  const targetElements = document.querySelectorAll('.fade-in-up-footer');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class when element enters screen 
        entry.target.classList.add('animate-footer');
      } else {
        // Remove class when element exits screen to re-anime
        entry.target.classList.remove('animate-footer');
      }
    });
  });

  // Monitor each element that has a class. 'fade-in-up'
  targetElements.forEach(el => {
    observer.observe(el);
  });
});
//end animation fo component of footer





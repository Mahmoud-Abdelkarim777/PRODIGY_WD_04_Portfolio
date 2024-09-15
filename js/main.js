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
{/* <div style="background: linear-gradient(90deg, rgb(255, 255, 255) 10%, rgba(255, 255, 255, 0) 80%);"> */}

//start animation fo component of tilte

document.addEventListener('DOMContentLoaded', function () {
  const targetElements = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class when element enters screen 
        entry.target.classList.add('animate');
      } else {
        // Remove class when element exits screen to re-anime
        entry.target.classList.remove('animate');
      }
    });
  });

  // Monitor each element that has a class. 'fade-in-up'
  targetElements.forEach(el => {
    observer.observe(el);
  });
});
//end animation fo component of tilte
// function show component of projects

let box_css = document.getElementById('box_css');
let box_bootstrap = document.getElementById('box_bootstrap');

function show_css() {
  const box_css = document.getElementById('box_css');
  let box_bootstrap = document.getElementById('box_bootstrap');

  box_css.style.display = 'grid'; // Show the element by setting display to grid
  box_bootstrap.style.display = 'none'; // Show the element by setting display to grid
  setTimeout(() => {
    // Apply the smooth transition after the element is visible
    box_css.style.opacity = '1';
    box_bootstrap.style.opacity = '0';
    box_css.style.transform = 'scale(1)';
  }, 300); // A slight delay to allow the display change to take effect
}
function show_bootstrap() {
  const box_bootstrap = document.getElementById('box_bootstrap');
  const box_css = document.getElementById('box_css');

  box_bootstrap.style.display = 'grid'; // Show the element by setting display to grid
  box_css.style.display = 'none'; // Show the element by setting display to grid
  setTimeout(() => {
    // Apply the smooth transition after the element is visible
    box_bootstrap.style.opacity = '1';
    box_css.style.opacity = '0';
    box_bootstrap.style.transform = 'scale(1)';
  }, 300); // A slight delay to allow the display change to take effect
}




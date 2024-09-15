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

// animation fo component of tilte

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



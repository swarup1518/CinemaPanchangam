let currentIndex = 0;

function moveSlider(direction) {
    const slider = document.querySelector('.actress-slider');
    const slides = document.querySelectorAll('.actress-slide');
    const slideWidth = slides[0].offsetWidth + 20; // Slide width + gap

    if (direction === 'left') {
        currentIndex = Math.max(currentIndex - 1, 0);
    } else if (direction === 'right') {
        currentIndex = Math.min(currentIndex + 1, slides.length - Math.floor(slider.offsetWidth / slideWidth));
    }

    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  
  const btn = document.querySelector('.dark-mode-toggle');
  if (isDark) {
    btn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  } else {
    btn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }
}

// Load dark mode preference
window.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  if (darkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle').innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  }
});

// Language Change
function changeLanguage(lang) {
  alert('Language changed to: ' + lang + '\n(Full implementation would load translated content)');
}

// Back to Top
window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Poll functionality
document.querySelectorAll('.poll-option').forEach(option => {
  option.addEventListener('click', function() {
    document.querySelectorAll('.poll-option').forEach(opt => {
      opt.style.background = '';
      opt.querySelector('i').className = 'far fa-circle';
    });
    this.style.background = 'var(--primary-red)';
    this.style.color = 'white';
    this.querySelector('i').className = 'fas fa-check-circle';
  });
});

// Release Dates Tab Switching
function switchTab(tabName) {
  // Hide all tab panels
  document.querySelectorAll('.release-tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Remove active class from all tabs
  document.querySelectorAll('.release-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected tab panel
  document.getElementById(tabName + '-panel').classList.add('active');
  
  // Add active class to clicked tab
  event.target.classList.add('active');
}

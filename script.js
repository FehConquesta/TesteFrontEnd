document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.animated-title');
  titles.forEach((title, index) => {
    setTimeout(() => {
      title.classList.add('show');
    }, index * 500);
  });

  document.getElementById('scrollDownBtn').addEventListener('click', () => {
    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    const progress = document.querySelector('.progress-bar');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progress.style.width = scrollPercent + '%';
  });

  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');

  modalImage.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  };

  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const accordionHeaders = document.querySelectorAll('.accordion-header');

  function closeAllAccordions() {
    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('open');
      const icon = item.querySelector('.accordion-icon');
      if (icon) {
        icon.src = 'assets/svg/cursor-open.svg';
      }
    });
  }

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      closeAllAccordions();

      if (!isOpen) {
        item.classList.add('open');
        const icon = item.querySelector('.accordion-icon');
        if (icon) {
          icon.src = 'assets/svg/cursor-close.svg';
        }
      }
    });
  });

  const firstItem = document.querySelector('.accordion-item');
  if (firstItem) {
    firstItem.classList.add('open');
    const firstIcon = firstItem.querySelector('.accordion-icon');
    if (firstIcon) {
      firstIcon.src = 'assets/svg/cursor-close.svg';
    }
  }

  /*window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.style.display = 'none';
    }, 1600); // Tempo para desaparecer (em milissegundos)
  });*/
});


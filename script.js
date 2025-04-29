document.addEventListener('DOMContentLoaded', () => {
  // Splash Screen
  const splashScreen = document.querySelector('.splash-screen');
  
  // Esconder splash screen após 2 segundos
  setTimeout(() => {
    splashScreen.classList.add('hidden');
    
    // Animar títulos após a splash screen
    const titles = document.querySelectorAll('.animated-title');
    titles.forEach((title, index) => {
      setTimeout(() => {
        title.classList.add('show');
      }, index * 500);
    });
  }, 2000);

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
        icon.classList.remove('minus');
        icon.classList.add('plus');
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
          icon.classList.remove('plus');
          icon.classList.add('minus');
        }
      }
    });
  });

  // Configurar o primeiro item como aberto por padrão
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems.length > 0) {
    const firstItem = accordionItems[0];
    
    // Fechar todos primeiro
    closeAllAccordions();
    
    // Abrir o primeiro item
    firstItem.classList.add('open');
    const icon = firstItem.querySelector('.accordion-icon');
    if (icon) {
      icon.classList.remove('plus');
      icon.classList.add('minus');
    }
  }

});


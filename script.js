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
    
    // Parallax manual para melhor compatibilidade com dispositivos móveis
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
      const speed = 0.5;
      const offset = window.scrollY;
      
      // Ajusta a posição conforme o scroll
      const yPos = -(offset * speed);
      const transform = 'translate3d(0px, ' + yPos + 'px, 0px)';
      
      if (element.querySelector('.parallax-content')) {
        element.querySelector('.parallax-content').style.transform = transform;
      } else if (element.querySelector(':before')) {
        // Aplica para o pseudo-elemento if possível
        const style = document.createElement('style');
        style.textContent = `.parallax::before { transform: translate3d(0px, ${yPos}px, 0px); }`;
        document.head.appendChild(style);
      }
    });
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

  /*window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.style.display = 'none';
    }, 1600); // Tempo para desaparecer (em milissegundos)
  });*/
});


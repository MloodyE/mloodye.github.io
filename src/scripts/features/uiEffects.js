const PARTICLES_CONFIG = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: '#00b4ff'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.35,
      random: true,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#00b4ff',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: false
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 0.4
        }
      }
    }
  },
  retina_detect: true
};

export function initUiEffects() {
  document.documentElement.classList.add('has-js');
  initParticles();
  initSmoothAnchorScroll();
  initHeaderShadow();
  initRevealOnScroll();
}

function initParticles() {
  if (typeof window.particlesJS === 'function') {
    window.particlesJS('particles-js', PARTICLES_CONFIG);
  }
}

function initSmoothAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const href = anchor.getAttribute('href');

      if (!href || href.length <= 1) {
        return;
      }

      event.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initHeaderShadow() {
  const header = document.querySelector('header');

  if (!header) {
    return;
  }

  const checkHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };

  window.addEventListener('scroll', checkHeader, { passive: true });
  checkHeader();
}

function initRevealOnScroll() {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card, .hero-card').forEach(element => {
    revealObserver.observe(element);
  });
}

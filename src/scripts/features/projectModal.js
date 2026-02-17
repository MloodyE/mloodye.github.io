export function createProjectModal(projectDetails) {
  const projectModal = document.getElementById('project-modal');
  const projectModalTitle = document.getElementById('project-modal-title');
  const projectModalImage = document.getElementById('project-modal-image');
  const projectModalDesc = document.getElementById('project-modal-desc');
  const projectModalCounter = document.getElementById('project-modal-counter');
  const projectModalPrev = document.getElementById('project-modal-prev');
  const projectModalNext = document.getElementById('project-modal-next');
  const projectModalClose = document.getElementById('project-modal-close');

  const slideLightbox = document.getElementById('slide-lightbox');
  const slideLightboxImage = document.getElementById('slide-lightbox-image');
  const slideLightboxClose = document.getElementById('slide-lightbox-close');

  let activeScreenshots = [];
  let activeSlideIndex = 0;
  let projectAutoSlideInterval = null;

  function stopProjectAutoSlide() {
    if (projectAutoSlideInterval) {
      clearInterval(projectAutoSlideInterval);
      projectAutoSlideInterval = null;
    }
  }

  function startProjectAutoSlide() {
    stopProjectAutoSlide();

    if (activeScreenshots.length <= 1 || !projectModal.classList.contains('open')) {
      return;
    }

    projectAutoSlideInterval = setInterval(() => {
      activeSlideIndex = (activeSlideIndex + 1) % activeScreenshots.length;
      renderProjectSlide();
    }, 2500);
  }

  function restartProjectAutoSlide() {
    if (!projectModal.classList.contains('open')) {
      return;
    }

    startProjectAutoSlide();
  }

  function renderProjectSlide() {
    if (!activeScreenshots.length) {
      return;
    }

    projectModalImage.src = activeScreenshots[activeSlideIndex];
    projectModalCounter.textContent = `${activeSlideIndex + 1} / ${activeScreenshots.length}`;
  }

  function openSlideLightbox() {
    if (!projectModalImage.src) {
      return;
    }

    slideLightboxImage.src = projectModalImage.src;
    slideLightboxImage.alt = projectModalImage.alt || 'Powiększony screenshot projektu';
    slideLightbox.classList.add('open');
    slideLightbox.setAttribute('aria-hidden', 'false');
    stopProjectAutoSlide();
  }

  function closeSlideLightbox() {
    if (!slideLightbox.classList.contains('open')) {
      return;
    }

    slideLightbox.classList.remove('open');
    slideLightbox.setAttribute('aria-hidden', 'true');
    slideLightboxImage.src = '';
    restartProjectAutoSlide();
  }

  function closeProjectModal() {
    closeSlideLightbox();
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    stopProjectAutoSlide();
  }

  function syncDiscordWidgetInModal(discordData) {
    const modalAvatar = document.querySelector('.project-embed__discord-avatar');
    const modalName = document.querySelector('.project-embed__discord-name');
    const modalStatusText = document.querySelector('.project-embed__discord-text');
    const modalDot = document.querySelector('.project-embed__discord-dot');

    if (!modalAvatar || !modalName || !modalStatusText || !modalDot || !discordData) {
      return;
    }

    if (discordData.avatarUrl) {
      modalAvatar.src = discordData.avatarUrl;
    }

    modalName.textContent = discordData.name || 'MloodyE';
    modalStatusText.textContent = discordData.statusText || 'Offline';
    modalDot.style.background = discordData.dotColor || 'rgb(107, 114, 128)';
  }

  function openProjectModal(projectKey, discordData) {
    const project = projectDetails[projectKey];

    if (!project) {
      return;
    }

    activeScreenshots = project.screenshots;
    activeSlideIndex = 0;

    projectModalTitle.textContent = project.title;

    if (project.descriptionHtml) {
      projectModalDesc.innerHTML = project.descriptionHtml;
      syncDiscordWidgetInModal(discordData);
    } else {
      projectModalDesc.textContent = project.description;
    }

    renderProjectSlide();

    const hasMultipleSlides = activeScreenshots.length > 1;
    projectModalPrev.style.visibility = hasMultipleSlides ? 'visible' : 'hidden';
    projectModalNext.style.visibility = hasMultipleSlides ? 'visible' : 'hidden';

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    startProjectAutoSlide();
  }

  function initProjectModal(getDiscordData) {
    document.querySelectorAll('.js-project-more').forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        const discordData = typeof getDiscordData === 'function' ? getDiscordData() : null;
        openProjectModal(button.dataset.project, discordData);
      });
    });

    projectModalPrev.addEventListener('click', () => {
      if (!activeScreenshots.length) {
        return;
      }

      activeSlideIndex = (activeSlideIndex - 1 + activeScreenshots.length) % activeScreenshots.length;
      renderProjectSlide();
      restartProjectAutoSlide();
    });

    projectModalNext.addEventListener('click', () => {
      if (!activeScreenshots.length) {
        return;
      }

      activeSlideIndex = (activeSlideIndex + 1) % activeScreenshots.length;
      renderProjectSlide();
      restartProjectAutoSlide();
    });

    projectModalImage.addEventListener('click', () => {
      if (!projectModal.classList.contains('open')) {
        return;
      }

      openSlideLightbox();
    });

    slideLightboxClose.addEventListener('click', closeSlideLightbox);
    slideLightbox.addEventListener('click', event => {
      if (event.target === slideLightbox) {
        closeSlideLightbox();
      }
    });

    projectModalClose.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', event => {
      if (event.target === projectModal) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && slideLightbox.classList.contains('open')) {
        closeSlideLightbox();
        return;
      }

      if (!projectModal.classList.contains('open')) {
        return;
      }

      if (event.key === 'Escape') {
        closeProjectModal();
      }

      if (event.key === 'ArrowLeft') {
        projectModalPrev.click();
      }

      if (event.key === 'ArrowRight') {
        projectModalNext.click();
      }
    });
  }

  return {
    initProjectModal,
    syncDiscordWidgetInModal
  };
}

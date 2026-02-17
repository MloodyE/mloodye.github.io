function renderProjectTags(tags = []) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function renderProjectActions(projectKey, actions = []) {
  return actions
    .map(action => {
      const className = action.muted ? 'link-btn link-btn--muted' : 'link-btn';

      if (action.modal) {
        return `<a class="${className} js-project-more" href="#" data-project="${projectKey}">${action.label}</a>`;
      }

      return `<a class="${className}" href="${action.href}" target="_blank" rel="noopener noreferrer">${action.label}</a>`;
    })
    .join('');
}

function renderProjectCard(projectKey, project) {
  const badgeHtml = project.badge ? `<span class="badge">${project.badge}</span>` : '';

  return `
    <article class="card project">
      <div class="media">
        <img src="${project.thumbnail}" alt="${project.title} Thumbnail" loading="lazy" />
      </div>
      <div class="card-body">
        <div style="display: flex; align-items: center; gap: 8px; justify-content: space-between;">
          <h3>${project.title}</h3>
          ${badgeHtml}
        </div>
        <p style="margin-top:6px;">${project.cardDescription}</p>
        <div class="tags">${renderProjectTags(project.tags)}</div>
        <div class="card-actions">${renderProjectActions(projectKey, project.actions)}</div>
      </div>
    </article>
  `;
}

export function initProjectCards(projectDetails) {
  const grid = document.querySelector('.projects-grid');

  if (!grid) {
    return;
  }

  const cardsHtml = Object.entries(projectDetails)
    .map(([projectKey, project]) => renderProjectCard(projectKey, project))
    .join('');

  grid.innerHTML = cardsHtml;
}

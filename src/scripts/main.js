import { projectDetails } from './data/projectDetails.js';
import { createDiscordWidget } from './features/discordWidget.js';
import { initProjectCards } from './features/projectCards.js';
import { createProjectModal } from './features/projectModal.js';
import { initTrustSlider } from './features/trustSlider.js';
import { initUiEffects } from './features/uiEffects.js';

function initApp() {
  initProjectCards(projectDetails);
  initUiEffects();

  const projectModal = createProjectModal(projectDetails);
  const discordWidget = createDiscordWidget(projectModal.syncDiscordWidgetInModal);

  projectModal.initProjectModal(discordWidget.getDiscordData);
  discordWidget.initDiscordWidget();
  initTrustSlider();
}

initApp();
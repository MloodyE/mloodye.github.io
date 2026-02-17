function createProjectEmbedDescription(features) {
  const listItems = features.map(feature => `<li>${feature}</li>`).join('');

  return `
    <div class="project-embed" role="group" aria-label="Opis funkcji projektu">
      <div class="project-embed__layout">
        <ul class="project-embed__list">
          ${listItems}
        </ul>
        <aside class="project-embed__cta" aria-label="Call to action">
          <div class="project-embed__discord" aria-label="Status Discord">
            <img class="project-embed__discord-avatar" src="" alt="Discord avatar" />
            <div class="project-embed__discord-info">
              <div class="project-embed__discord-name">Ładowanie...</div>
              <div class="project-embed__discord-status">
                <span class="project-embed__discord-dot"></span>
                <span class="project-embed__discord-text">Ładowanie...</span>
              </div>
            </div>
          </div>
          <p class="project-embed__cta-text">Spodobał Ci się mój projekt?<br>Stwórzmy coś dla Ciebie.</p>
          <a class="project-embed__cta-btn" href="https://discord.com/users/990608846676430868" target="_blank" rel="noreferrer">Napisz do mnie</a>
        </aside>
      </div>
    </div>
  `;
}

export const projectDetails = {
  eventdebugger: {
    title: 'EventDebugger',
    cardDescription: 'Plugin debugowy dla serwerów Bukkit, pozwalający sprawdzić, które pluginy nasłuchują i anulują konkretne eventy.',
    tags: ['Bukkit', '1.21.4'],
    thumbnail: 'src/images/products/eventdebugger.png',
    actions: [
      {
        label: 'Pobierz',
        href: 'https://www.spigotmc.org/resources/eventdebugger.129480/'
      },
      {
        label: 'Source Code',
        href: 'https://github.com/MloodyE/EventDebugger',
        muted: true
      }
    ]
  },
  fenixplots: {
    title: 'FenixPlots',
    badge: 'Archiwum',
    cardDescription: 'System dzialek stworzony dla serwera FenixMC, zaprojektowany z myślą o wygodzie i pełnej kontroli gracza.',
    tags: ['Paper', '1.20.4'],
    thumbnail: 'src/images/products/fenixplots/thumbnail.png',
    actions: [
      {
        label: 'Dowiedz się więcej',
        modal: true
      }
    ],
    description: 'System działek stworzony dla serwera FenixMC. Ułatwia zarządzanie własnym terenem i daje graczowi pełną kontrolę nad uprawnieniami oraz ochroną działki.',
    descriptionHtml: createProjectEmbedDescription([
      'Podstawowe funkcje systemów działkowych',
      'Możliwość zablokowania osób na działce',
      'Możliwość edycji flag działki',
      'Możliwość edycji uprawnień członków',
      'Możliwość zamknięcia działki',
      'Granice działki wyświetlane za pomocą bordera',
      'Synchronizacja ustawień działki z inną',
      'Efekty działki dostępne dla każdego członka',
      'Fly na działce',
      'I wiele więcej'
    ]),
    screenshots: ['src/images/products/fenixplots/thumbnail.png', 'src/images/products/fenixplots/Screenshot_1.png', 'src/images/products/fenixplots/Screenshot_2.png', 'src/images/products/fenixplots/Screenshot_3.png', 'src/images/products/fenixplots/Screenshot_4.png', 'src/images/products/fenixplots/Screenshot_5.png', 'src/images/products/fenixplots/Screenshot_6.png', 'src/images/products/fenixplots/Screenshot_7.png', 'src/images/products/fenixplots/Screenshot_8.png', 'src/images/products/fenixplots/Screenshot_9.png', 'src/images/products/fenixplots/Screenshot_10.png']
  },
  fenixskills: {
    title: 'FenixSkills',
    badge: 'Archiwum',
    cardDescription: 'System umiejętności stworzony dla serwera FenixMC, dodający unikalne abilitki wpływające na codzienną rozgrywkę i walkę.',
    tags: ['Paper', '1.20.4'],
    thumbnail: 'src/images/products/fenixskills/thumbnail.png',
    actions: [
      {
        label: 'Dowiedz się więcej',
        modal: true
      }
    ],
    description: 'System umiejętności dla serwera FenixMC, który rozwija postać gracza i dodaje unikalne abilitki wpływające na codzienną rozgrywkę i walkę.',
    descriptionHtml: createProjectEmbedDescription([
      'System poziomowania umiejętności gracza',
      'Unikalne abilitki wpływające na walkę',
      'Rozwój postaci dopasowany do stylu gry',
      'Konfigurowalne wartości i balans progresji',
      'Integracja z codzienną rozgrywką serwera',
      'Czytelne informacje o postępie i efektach',
      'I wiele więcej'
    ]),
    screenshots: ['src/images/products/fenixskills/thumbnail.png', 'src/images/products/fenixskills/Screenshot_1.png', 'src/images/products/fenixskills/Screenshot_2.png', 'src/images/products/fenixskills/Screenshot_3.png', 'src/images/products/fenixskills/Screenshot_4.png', 'src/images/products/fenixskills/Screenshot_5.png', 'src/images/products/fenixskills/Screenshot_6.png']
  },
  fenixwallet: {
    title: 'FenixWallet',
    badge: 'Archiwum',
    cardDescription: 'System portfela stworzony dla serwera FenixMC, synchronizujący środki graczy na całej sieci serwerów.',
    tags: ['Waterfall', 'Paper', '1.20.4'],
    thumbnail: 'src/images/products/fenixwallet/thumbnail.png',
    actions: [
      {
        label: 'Dowiedz się więcej',
        modal: true
      }
    ],
    description: 'System portfela oparty o Redis, synchronizujący środki gracza między trybami serwera i porządkujący ekonomię całej sieci.',
    descriptionHtml: createProjectEmbedDescription([
      'Synchronizacja środków pomiędzy trybami serwera',
      'Osobny sklep na każdy tryb przy tych samych środkach gracza',
      'Komendy administracyjne do zarządzania portfelem',
      'Automatyczny system promocji',
      'Możliwość ustawienia mnożnika doładowywanych środków',
      'I wiele więcej'
    ]),
    screenshots: ['src/images/products/fenixwallet/thumbnail.png', 'src/images/products/fenixwallet/Screenshot_1.png', 'src/images/products/fenixwallet/Screenshot_2.png', 'src/images/products/fenixwallet/Screenshot_3.png', 'src/images/products/fenixwallet/Screenshot_4.png']
  },
  fenixparticles: {
    title: 'FenixParticles',
    badge: 'Archiwum',
    cardDescription: 'System cząsteczek stworzony dla serwera FenixMC, umożliwiający korzystanie z efektów cząsteczkowych w różnych kształtach i kolorach.',
    tags: ['Waterfall', 'Paper', '1.20.4'],
    thumbnail: 'src/images/products/fenixparticles/thumbnail.png',
    actions: [
      {
        label: 'Dowiedz się więcej',
        modal: true
      }
    ],
    description: 'System efektów cząsteczkowych dla serwera FenixMC z gotowymi stylami, własnymi paletami kolorów i opcjami wydajnościowymi dla słabszych komputerów.',
    descriptionHtml: createProjectEmbedDescription([
      'Możliwość tworzenia różnych combo efektów (np. skrzydła + aureola)',
      'Wybór palety barw dopasowanej do stylu gracza',
      'Dodawanie własnych kolorów HEX do palety',
      'Możliwość wyłączenia cząsteczek dla słabszych komputerów',
      'Różnorodne kszałty cząsteczek: skrzydła, aureola, spirala i więcej...',
      'Efekty śladu podczas chodzenia i latania (np. serduszka)',
      'I wiele więcej'
    ]),
    screenshots: ['src/images/products/fenixparticles/thumbnail.png', 'src/images/products/fenixparticles/Screenshot_1.png', 'src/images/products/fenixparticles/Screenshot_2.png', 'src/images/products/fenixparticles/Screenshot_3.png', 'src/images/products/fenixparticles/Screenshot_4.png', 'src/images/products/fenixparticles/Screenshot_5.png', 'src/images/products/fenixparticles/Screenshot_6.png']
  },
  fenixdiscordbot: {
    title: 'FenixDiscordBot',
    badge: 'Archiwum',
    cardDescription: 'DiscordBot stworzony dla serwera FenixMC, ułatwiający zarządzanie i wprowadzający ułatwienia oraz urozmaicenia dla użytkowników.',
    tags: ['Waterfall', 'Paper', '1.20.4'],
    thumbnail: 'src/images/products/fenixdiscordbot/thumbnail.png',
    actions: [
      {
        label: 'Dowiedz się więcej',
        modal: true
      }
    ],
    description: 'DiscordBot dla serwera FenixMC, który automatyzuje najważniejsze procesy społeczności i administracji — od weryfikacji po obsługę ticketów.',
    descriptionHtml: createProjectEmbedDescription([
      'System weryfikacji użytkowników',
      'Rozbudowany system konkursów',
      'Automatyczna powitalnia nowych osób',
      'System dropu z nagrodami',
      'Nagrody Minecraft podzielone na różne tryby',
      'System ticketów',
      'Powiadomienia i komendy przydatne dla społeczności',
      'I wiele więcej'
    ]),
    screenshots: ['src/images/products/fenixdiscordbot/thumbnail.png', 'src/images/products/fenixdiscordbot/Screenshot_1.png', 'src/images/products/fenixdiscordbot/Screenshot_2.png', 'src/images/products/fenixdiscordbot/Screenshot_3.png', 'src/images/products/fenixdiscordbot/Screenshot_4.png', 'src/images/products/fenixdiscordbot/Screenshot_5.png', 'src/images/products/fenixdiscordbot/Screenshot_6.png']
  }
};

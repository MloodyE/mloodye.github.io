const clients = [
  { name: 'Cargis', img: 'src/images/clients/cargis.png' },
  { name: 'KSERTEx', img: 'src/images/clients/ksertex.png' },
  { name: 'Ak3wish', img: 'src/images/clients/ak3wish.png' },
  { name: 'Rafskyy', img: 'src/images/clients/rafskyy.png' },
  { name: 'Nazu', img: 'src/images/clients/nazu.png' },
  { name: 'Mikro', img: 'src/images/clients/mikro.png' },
  { name: 'TutuS', img: 'src/images/clients/tutus.png' },
  { name: 'Witness', img: 'src/images/clients/witness.png' },
  { name: 'Wyliczanek', img: 'src/images/clients/wyliczanek.png' },
  { name: 'Wolczak', img: 'src/images/clients/wolczak.png' },
  { name: 'Per0', img: 'src/images/clients/per0.png' },
  { name: '_ovies', img: 'src/images/clients/_ovies.png' }
];

export function initTrustSlider() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const trustSlots = Array.from(document.querySelectorAll('.trust-slot'));

  if (!trustSlots.length) {
    return;
  }

  let currentIndex = 0;

  const rotateTrustSlider = () => {
    trustSlots.forEach(slot => {
      slot.style.opacity = '0';
    });

    setTimeout(() => {
      trustSlots.forEach((slot, index) => {
        const clientIndex = (currentIndex + index) % clients.length;
        const client = clients[clientIndex];

        slot.setAttribute('data-name', client.name);
        slot.setAttribute('aria-label', client.name);

        const image = slot.querySelector('.trust-avatar-img');
        if (image) {
          image.src = client.img;
          image.alt = client.name;
        }
      });

      trustSlots.forEach(slot => {
        slot.style.opacity = '1';
      });

      currentIndex = (currentIndex + 1) % clients.length;
    }, 200);
  };

  window.setInterval(rotateTrustSlider, 5000);
}

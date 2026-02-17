const userId = '990608846676430868';

export function createDiscordWidget(syncModalDiscordWidget) {
  let lastDiscordData = {
    avatarUrl: '',
    name: 'MloodyE',
    statusText: 'Offline',
    dotColor: 'rgb(107, 114, 128)'
  };

  function getDiscordData() {
    return lastDiscordData;
  }

  async function updateDiscordWidget() {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const json = await response.json();
    const data = json.data;

    const avatar = data.discord_user.avatar;
    const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png`;
    const name = data.discord_user.display_name || data.discord_user.username;

    const statusConfig = getStatusConfig(data.discord_status);

    const avatarElement = document.getElementById('discord-avatar');
    const nameElement = document.getElementById('discord-name');
    const statusTextElement = document.getElementById('discord-status-text');
    const dotElement = document.querySelector('#discord-status .dot');

    if (avatarElement) {
      avatarElement.src = avatarUrl;
    }

    if (nameElement) {
      nameElement.innerText = name;
    }

    if (statusTextElement) {
      statusTextElement.innerText = statusConfig.text;
    }

    if (dotElement) {
      dotElement.style.background = statusConfig.color;
    }

    lastDiscordData = {
      avatarUrl,
      name,
      statusText: statusConfig.text,
      dotColor: statusConfig.color
    };

    if (typeof syncModalDiscordWidget === 'function') {
      syncModalDiscordWidget(lastDiscordData);
    }
  }

  function initDiscordWidget() {
    updateDiscordWidget();
    window.setInterval(updateDiscordWidget, 30000);
  }

  return {
    initDiscordWidget,
    getDiscordData
  };
}

function getStatusConfig(status) {
  if (status === 'online') {
    return { text: 'Dostępny', color: '#22c55e' };
  }

  if (status === 'idle') {
    return { text: 'Zaraz Wracam', color: '#f59e0b' };
  }

  if (status === 'dnd') {
    return { text: 'Nie przeszkadzać', color: '#ef4444' };
  }

  return { text: 'Offline', color: '#6b7280' };
}

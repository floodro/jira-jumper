const input = document.getElementById('ticketNum');
const container = document.getElementById('historyContainer');

// 1. Load history immediately when popup opens
chrome.storage.local.get(['recentTickets'], (data) => {
  const history = data.recentTickets || [];
  renderHistory(history);
});

document.getElementById('goBtn').addEventListener('click', openTicket);
input.addEventListener('keypress', (e) => { if (e.key === 'Enter') openTicket(); });

function openTicket() {
  const val = input.value.trim();
  if (!val) return;

  const ticket = val.toUpperCase().startsWith('PGNG-') ? val.toUpperCase() : `PGNG-${val}`;
  const url = `https://tdh-int.atlassian.net/browse/${ticket}`;

  // 2. Save to History
  saveToHistory(ticket);
  
  chrome.tabs.create({ url: url });
}

function saveToHistory(ticket) {
  chrome.storage.local.get(['recentTickets'], (data) => {
    let history = data.recentTickets || [];
    
    // Remove if already exists (to move it to the top)
    history = history.filter(item => item !== ticket);
    
    // Add to start and limit to 3 items
    history.unshift(ticket);
    history = history.slice(0, 3);

    chrome.storage.local.set({ recentTickets: history }, () => {
      renderHistory(history);
    });
  });
}

function renderHistory(history) {
  container.innerHTML = '';
  history.forEach(ticket => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.textContent = ticket;
    item.onclick = () => {
      chrome.tabs.create({ url: `https://tdh-int.atlassian.net/browse/${ticket}` });
    };
    container.appendChild(item);
  });
}
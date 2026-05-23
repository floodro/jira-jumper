const ticketNumInput = document.getElementById('ticketNum');
const historyContainer = document.getElementById('historyContainer');
const prefixSelect = document.getElementById('prefixSelect');

// 1. Load history and prefix immediately when popup opens
chrome.storage.local.get(['recentTickets', 'lastPrefix'], (data) => {
  const ticketHistory = data.recentTickets || [];
  renderHistory(ticketHistory);
  if (data.lastPrefix) {
    prefixSelect.value = data.lastPrefix;
  }
});

prefixSelect.addEventListener('change', (e) => {
  chrome.storage.local.set({ lastPrefix: e.target.value });
  ticketNumInput.focus();
});

document.getElementById('goBtn').addEventListener('click', openTicket);
ticketNumInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') openTicket(); });

function openTicket() {
  const val = ticketNumInput.value.trim();
  if (!val) return;

  const prefix = prefixSelect.value;
  // If user typed the prefix manually (contains '-'), use it, otherwise prepend selected prefix
  const ticket = val.includes('-') ? val.toUpperCase() : `${prefix}-${val}`;
  const url = `https://tdh-int.atlassian.net/browse/${ticket}`;
  saveToHistory(ticket);
  
  chrome.tabs.create({ url: url });
}

function saveToHistory(ticket) {
  chrome.storage.local.get(['recentTickets'], (data) => {
    let history = data.recentTickets || [];
    
    // Remove if already exists (to move it to the top)
    history = history.filter(item => item !== ticket);
    
    // Add to start and limit to 3 tickets for now
    history.unshift(ticket);
    history = history.slice(0, 3);

    chrome.storage.local.set({ recentTickets: history }, () => {
      renderHistory(history);
    });
  });
}

function renderHistory(history) {
  historyContainer.innerHTML = '';
  history.forEach(ticket => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.textContent = ticket;
    item.onclick = () => {
      chrome.tabs.create({ url: `https://tdh-int.atlassian.net/browse/${ticket}` });
    };
    historyContainer.appendChild(item);
  });
}
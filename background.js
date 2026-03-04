// Funzione centralizzata per la creazione del menu
function inizializzaMenu() {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "contaParole",
      title: "Seleziona del testo per contare",
      contexts: ["selection"]
    });
  });
}

// Inizializza il menu sia all'installazione che all'avvio del service worker
chrome.runtime.onInstalled.addListener(inizializzaMenu);
chrome.runtime.onStartup.addListener(inizializzaMenu);

// Ascolta i messaggi da content.js
chrome.runtime.onMessage.addListener((messaggio, sender, sendResponse) => {
  if (messaggio.azione === "aggiornaTitolo") {
    const nuovoTitolo = messaggio.conteggio > 0 
      ? `Parole: ${messaggio.conteggio}` 
      : "Seleziona del testo per contare";

    chrome.contextMenus.update("contaParole", {
      title: nuovoTitolo
    }, () => {
      if (chrome.runtime.lastError) {
        console.warn("Errore aggiornamento menu:", chrome.runtime.lastError.message);
      }
    });
  }
});

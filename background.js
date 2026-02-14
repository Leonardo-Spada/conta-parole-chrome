// Crea la voce del menu all'inizio
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "contaParole",
    title: "Seleziona del testo per contare",
    contexts: ["selection"]
  });
});

// Ascolta i messaggi da content.js
chrome.runtime.onMessage.addListener((messaggio, sender, sendResponse) => {
  if (messaggio.azione === "aggiornaTitolo") {
    
    const nuovoTitolo = messaggio.conteggio > 0 
      ? `Parole: ${messaggio.conteggio}` 
      : "Seleziona del testo per contare";

    // Aggiorna solo il titolo della voce di menu esistente
    chrome.contextMenus.update("contaParole", {
      title: nuovoTitolo
    });
  }
});
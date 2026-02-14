// Funzione che conta e invia il messaggio
function aggiornaConteggio() {
  const selezione = window.getSelection().toString().trim();
  const numeroParole = selezione.length > 0 ? selezione.split(/\s+/).length : 0;

  // Invia il numero al background script
  chrome.runtime.sendMessage({
    azione: "aggiornaTitolo",
    conteggio: numeroParole
  });
}

// Ascolta quando l'utente rilascia il mouse o alza un tasto (es. dopo SHIFT+freccia)
document.addEventListener("mouseup", aggiornaConteggio);
document.addEventListener("keyup", aggiornaConteggio);
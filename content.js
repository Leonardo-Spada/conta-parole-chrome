function aggiornaConteggio() {
  const selezione = window.getSelection().toString().trim();
  const numeroParole = selezione.length > 0 ? selezione.split(/\s+/).length : 0;

  // Controlla che il contesto sia ancora valido prima di inviare
  if (!chrome.runtime?.id) return;

  chrome.runtime.sendMessage({
    azione: "aggiornaTitolo",
    conteggio: numeroParole
  }).catch(() => {
    // Ignora errori di contesto invalido
  });
}

document.addEventListener("mouseup", aggiornaConteggio);
document.addEventListener("keyup", aggiornaConteggio);

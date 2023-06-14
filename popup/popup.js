chrome.windows.create({
  url: 'popup.html',
  type: 'popup',
  width: 400,
  height: 400,
  focused: true,
  setSelfAsOpener: true
}, function(window) {
  chrome.windows.update(window.id, { focused: true });
});


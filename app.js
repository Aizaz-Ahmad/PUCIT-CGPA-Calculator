navigator.serviceWorker &&
  navigator.serviceWorker.register('SW.js').then(function (registration) {
    console.log(registration);
  });

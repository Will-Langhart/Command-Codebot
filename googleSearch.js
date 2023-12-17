// Google Search
  googleSearch: function(query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  },

  // Bing Search
  bingSearch: function(query) {
    const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  },

  // Safari Search (Note: Cannot directly search via Safari, so using Google as default engine)
  safariSearch: function(query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  },

  // Chrome Search (Note: Cannot directly search via Chrome, so using Google as default engine)
  chromeSearch: function(query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  },

  // Image Search on Google
  googleImageSearch: function(query) {
    const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  },

  // Image Search on Bing
  bingImageSearch: function(query) {
    const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  },

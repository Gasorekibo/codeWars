function convertQueryToMap(queryString) {
  const result = {};
  if(queryString) {  
  const pairs = queryString.split('&');

  pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      const decodedValue = decodeURIComponent(value.replace(/\+/g, ' '));
      const keys = key.split('.');
      let currentLevel = result;
      keys.forEach((part, index) => {
          if (index === keys.length - 1) {
              currentLevel[part] = decodedValue;
          } else {
              if (!currentLevel[part]) {
                  currentLevel[part] = {};
              }
              currentLevel = currentLevel[part];
          }
      });
  });
  }

  return result;
}
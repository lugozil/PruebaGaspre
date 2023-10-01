function stringUtils(text) {
    const characters = new Set(text);
  
    return characters.size === text.length;
  }
  
  module.exports = stringUtils;
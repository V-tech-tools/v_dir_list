const fs = require('fs');

listDir = (dirPath) =>{
  try {
    return fs.readdirSync(dirPath);
  } catch (error) {
    //console.error(error);
    return false;
  }
};

module.exports = listDir;

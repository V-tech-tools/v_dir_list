const fs = require('fs').promises;

const deleteFile = async (filePath, cb = null) => {
  try {
    const stat = await fs.unlink(filePath);
    cb({deleted: filePath});
  } catch (error) {
    return false;
  }
};

module.exports = deleteFile;
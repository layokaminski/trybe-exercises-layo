const validTypeFile = (req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    req.fileError = { error: { message: 'Extension must be "png"' } };

    return callback(null, false);
  }

  callback(null, true);
};

module.exports = validTypeFile;

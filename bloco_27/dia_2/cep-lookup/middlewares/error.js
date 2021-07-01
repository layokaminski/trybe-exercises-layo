module.exports = (err, req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  }

    const statusByErrorCode = {
      badRequest: 400, // Erros do tipo `badRequest` retornam status 400 Bad Request
    };

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { message: err.message } });
};
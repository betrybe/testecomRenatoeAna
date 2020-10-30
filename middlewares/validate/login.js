module.exports = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) return next('email_required');
  if (!email.includes('@')) return next('invalid_email');
  if (!password) return next('password_required');
  if (password.length < 6) return next('invalid_password');

  next();
};

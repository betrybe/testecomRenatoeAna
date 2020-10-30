module.exports = (req, res, next) => {
  const { name, age, date } = req.body;

  if (!name) return next('name_required');
  if (!age) return next('age_required');
  if (name.length < 3) return next('invalid_name');
  if (age < 18) return next('invalid_age');
  if (!date || (!date.rate && date.rate !== 0) || !date.datedAt) return next('invalid_date');
  if (date.rate > 5 || date.rate < 1) return next('invalid_rate');
  if (!/^\d\d\/\d\d\/\d\d\d\d$/.test(date.datedAt)) return next('invalid_datedAt');

  next();
};

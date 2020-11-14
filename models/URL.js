const knex = require('../database/connection');

exports.findByToken = (token) => {
  return knex
    .select('*')
    .from('urls')
    .where('token', token)
    .first();
}

exports.incrementCount = (id) => {
  return knex('urls')
  .where('id', id)
  .update({
    'redirections': knex.raw('redirections + 1')
  });
}

exports.create = (url) => {
  return knex('urls')
    .insert({ original: url.original, token: url.token});
}
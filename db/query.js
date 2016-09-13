var knex = require('./knex');

// This gets all the posts
function Posts() {
  return knex('post');
}


// For new posts
function newPost(title, subtitle, author_id, body, can_comment) {
  return knex('post').insert({
    title: title,
    subtitle: subtitle,
    author_id: author_id,
    body: body,
    can_comment: can_comment
  })
}

module.exports = {
  Posts,
  newPost
}

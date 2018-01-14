export default class {
  fetchPost(id) {
    return $.get(ghost.url.api(`posts/${id}`), {
      include: 'author'
    }).fail(function(err) {
      console.log(err)
    })
  }
}

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/score/grade',
      handler: 'score.grade'
    },
    {
      method: 'GET',
      path: '/scores/game',
      handler: 'score.byGame'
    }
  ]
}
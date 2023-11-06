'use strict';

/**
 * score controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::score.score', ({ strapi }) => ({
  async grade (ctx) {
    const data = ctx.request.body
    const user = ctx.state.user
    const response = await strapi.service('api::score.score').grade(data, user)
    ctx.body = response
  },

  async byGame (ctx) {
    const { game } = ctx.request.query
    const response = await  strapi.service('api::score.score').find({
      filters: {
        games: {
          slug: {
            $eq: game
          }
        }
      },
      sort: {
        id: 'DESC'
      },
      populate: {
        'users_permissions_user': {
          populate: ['avatar']
        }
      }
    })
    ctx.body = response
  },

  async byUser (ctx) {
    const { email } = ctx.request.query
    const response = await  strapi.service('api::score.score').find({
      filters: {
        users_permissions_user: {
          email: {
            $eq: email
          }
        }
      },
      sort: {
        id: 'DESC'
      },
      populate: ['games']
    })
    ctx.body = response
  }
}));

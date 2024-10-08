'use strict';

/**
 * score service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::score.score', ({ strapi }) => ({
  async grade(data, user) {
    const { game, ...scores } = JSON.parse(data)

    let gameRes = await strapi.db.query('api::game.game').findOne({
      select: ['slug', 'id'],
      where: { slug: game.slug }
    })
    if (!gameRes) {
      const { platforms, genres, ...props } = game
      gameRes = await strapi.service('api::game.game').create({
        data: {
          ...props,
          /*
          platforms: {
            // connect: platforms,
            connect: [1, 2, 3]
          },
          genres: {
            // connect: genres
            connect: [1]
          }
          */
        }
      })
    }
    const scoreRes = await strapi.service('api::score.score').create({
      data: {
        ...scores,
        games: {
          connect: [{ id: gameRes.id }]
        },
        users_permissions_user: {
          connect: [user.id]
        }
      }
    })
    return {
      score: scoreRes,
      game: gameRes
    }
  }

    
}));

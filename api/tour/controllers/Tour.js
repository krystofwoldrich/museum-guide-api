'use strict';

/**
 * Tour.js controller
 *
 * @description: A set of functions called "actions" for managing `Tour`.
 */

module.exports = {

  /**
   * Retrieve tour records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.tour.search(ctx.query);
    } else {
      return strapi.services.tour.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a tour record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.tour.fetch(ctx.params);
  },

  /**
   * Count tour records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.tour.count(ctx.query, populate);
  },

  /**
   * Create a/an tour record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tour.add(ctx.request.body);
  },

  /**
   * Update a/an tour record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tour.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tour record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tour.remove(ctx.params);
  }
};

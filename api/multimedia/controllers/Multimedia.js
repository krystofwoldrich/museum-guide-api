'use strict';

/**
 * Multimedia.js controller
 *
 * @description: A set of functions called "actions" for managing `Multimedia`.
 */

module.exports = {

  /**
   * Retrieve multimedia records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.multimedia.search(ctx.query);
    } else {
      return strapi.services.multimedia.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a multimedia record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.multimedia.fetch(ctx.params);
  },

  /**
   * Count multimedia records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.multimedia.count(ctx.query, populate);
  },

  /**
   * Create a/an multimedia record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.multimedia.add(ctx.request.body);
  },

  /**
   * Update a/an multimedia record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.multimedia.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an multimedia record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.multimedia.remove(ctx.params);
  }
};

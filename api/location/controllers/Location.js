'use strict';

/**
 * Location.js controller
 *
 * @description: A set of functions called "actions" for managing `Location`.
 */

module.exports = {

  /**
   * Retrieve location records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.location.search(ctx.query);
    } else {
      return strapi.services.location.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a location record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.location.fetch(ctx.params);
  },

  /**
   * Count location records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.location.count(ctx.query, populate);
  },

  /**
   * Create a/an location record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.location.add(ctx.request.body);
  },

  /**
   * Update a/an location record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.location.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an location record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.location.remove(ctx.params);
  }
};

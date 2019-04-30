'use strict';

/**
 * Exhibition.js controller
 *
 * @description: A set of functions called "actions" for managing `Exhibition`.
 */

module.exports = {

  /**
   * Retrieve exhibition records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.exhibition.search(ctx.query);
    } else {
      return strapi.services.exhibition.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a exhibition record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.exhibition.fetch(ctx.params);
  },

  /**
   * Count exhibition records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.exhibition.count(ctx.query, populate);
  },

  /**
   * Create a/an exhibition record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.exhibition.add(ctx.request.body);
  },

  /**
   * Update a/an exhibition record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.exhibition.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an exhibition record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.exhibition.remove(ctx.params);
  }
};

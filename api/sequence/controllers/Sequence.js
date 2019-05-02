'use strict';

/**
 * Sequence.js controller
 *
 * @description: A set of functions called "actions" for managing `Sequence`.
 */

module.exports = {

  /**
   * Retrieve sequence records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.sequence.search(ctx.query);
    } else {
      return strapi.services.sequence.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a sequence record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.sequence.fetch(ctx.params);
  },

  /**
   * Count sequence records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.sequence.count(ctx.query, populate);
  },

  /**
   * Create a/an sequence record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sequence.add(ctx.request.body);
  },

  /**
   * Update a/an sequence record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sequence.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sequence record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sequence.remove(ctx.params);
  }
};

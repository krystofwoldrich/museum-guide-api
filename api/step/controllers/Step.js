'use strict';

/**
 * Step.js controller
 *
 * @description: A set of functions called "actions" for managing `Step`.
 */

module.exports = {

  /**
   * Retrieve step records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.step.search(ctx.query);
    } else {
      return strapi.services.step.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a step record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.step.fetch(ctx.params);
  },

  /**
   * Count step records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.step.count(ctx.query, populate);
  },

  /**
   * Create a/an step record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.step.add(ctx.request.body);
  },

  /**
   * Update a/an step record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.step.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an step record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.step.remove(ctx.params);
  }
};

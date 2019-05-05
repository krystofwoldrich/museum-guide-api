'use strict';

/**
 * Eventdate.js controller
 *
 * @description: A set of functions called "actions" for managing `Eventdate`.
 */

module.exports = {

  /**
   * Retrieve eventdate records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.eventdate.search(ctx.query);
    } else {
      return strapi.services.eventdate.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a eventdate record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.eventdate.fetch(ctx.params);
  },

  /**
   * Count eventdate records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.eventdate.count(ctx.query, populate);
  },

  /**
   * Create a/an eventdate record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.eventdate.add(ctx.request.body);
  },

  /**
   * Update a/an eventdate record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.eventdate.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an eventdate record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.eventdate.remove(ctx.params);
  }
};

'use strict';

/**
 * Section.js controller
 *
 * @description: A set of functions called "actions" for managing `Section`.
 */

module.exports = {

  /**
   * Retrieve section records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.section.search(ctx.query);
    } else {
      return strapi.services.section.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a section record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.section.fetch(ctx.params);
  },

  /**
   * Count section records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.section.count(ctx.query, populate);
  },

  /**
   * Create a/an section record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.section.add(ctx.request.body);
  },

  /**
   * Update a/an section record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.section.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an section record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.section.remove(ctx.params);
  }
};

require('module-alias/register');
const FOBasePage = require('@pages/FO/FObasePage');

module.exports = class SiteMap extends FOBasePage {
  constructor(page) {
    super(page);

    this.pageTitle = 'Sitemap';

    // Selectors
    this.categoryNameSelect = '#category-page-%ID';
    this.categoryPageNameSelect = '#cms-category-%ID';
  }

  /*
  Methods
   */
  /**
   *
   * @param categoryID
   * @return {Promise<void>}
   */
  async getCategoryName(categoryID) {
    return this.getTextContent(this.categoryNameSelect.replace('%ID', categoryID));
  }

  /**
   * check if category is visible
   * @param categoryID
   * @return {Promise<boolean|true>}
   */
  async isVisibleCategory(categoryID) {
    return this.elementVisible(this.categoryNameSelect.replace('%ID', categoryID));
  }

  /**
   *
   * @param pageCategoryID
   * @return {Promise<void>}
   */
  async getPageCategoryName(pageCategoryID) {
    return this.getTextContent(this.categoryPageNameSelect.replace('%ID', pageCategoryID));
  }
};

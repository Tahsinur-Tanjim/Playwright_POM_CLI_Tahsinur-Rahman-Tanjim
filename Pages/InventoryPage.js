class InventoryPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.locator('[data-test="title"]');
    this.inventoryList = page.locator('[data-test="inventory-list"]');
  }

  async isLoaded() {
    try {
      await this.pageTitle.waitFor({
        state: 'visible',
        timeout: 5000
      });

      return (
        await this.pageTitle.isVisible()
      ) && (
        await this.inventoryList.isVisible()
      );
    } catch {
      return false;
    }
  }
}

export { InventoryPage };
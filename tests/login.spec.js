import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';
import { InventoryPage } from '../Pages/InventoryPage.js';
import users from '../data/users.json' with { type: 'json' };

users.forEach((user) => {
  test(`Login test - ${user.username} - ${user.expected}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();

    await loginPage.login(
      user.username,
      user.password
    );

    if (user.expected === 'success') {
      expect(await inventoryPage.isLoaded()).toBe(true);
    } else {
      const errorMessage = await loginPage.getErrorMessage();

      expect(errorMessage).not.toBe('');
    }
  });
});
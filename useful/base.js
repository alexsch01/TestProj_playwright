// @ts-check
import { test } from '@playwright/test';

/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
})

export { page }

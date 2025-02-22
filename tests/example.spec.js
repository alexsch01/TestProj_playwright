// @ts-check

import { test, expect } from '@playwright/test'
import { page } from '../useful/base'

test('goto', async () => {
  await page.goto("https://www.google.com")
})

test('toHaveTitle', async () => {
  await expect(page).toHaveTitle("Hahaha")
})

test('will pass', async () => {
  await page.waitForTimeout(200)
  await page.pause()
})

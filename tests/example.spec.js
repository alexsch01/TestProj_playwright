// @ts-check
import { test, expect } from '@playwright/test'
import { page } from '../useful/base'

test('goto - will pass', async () => {
  await page.goto("https://www.google.com")
})

test('toHaveTitle - will fail', async () => {
  await expect(page).toHaveTitle("Hahaha")
})

test('toHaveTitle - should pass', async () => {
  await expect(page).toHaveTitle("Google")
})

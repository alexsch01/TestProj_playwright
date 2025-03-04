// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 0,
  workers: 1,
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chromium' },
    }
  ],
  recreateWorkerAfterFailure: false,
});

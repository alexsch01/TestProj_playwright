# TestProj_playwright

for testing https://github.com/microsoft/playwright/pull/34891

```
git clone https://github.com/alexsch01/playwright
cd playwright
npm ci
npm run watch

[open new terminal tab in same directory]
git clone https://github.com/alexsch01/TestProj_playwright
cd TestProj_playwright

[wait until `npm run watch` is done compiling]
npx playwright test --headed
```

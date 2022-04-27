# franklin-esr
Project Franklin ESR Demo

## Set up

### AEM

You should have your local AEM instance set up with sample content. Visit https://github.com/duynguyen/aem-nextjs-template#getting-started for detailed steps, and follow it until the `Configure the root AEM page`.

Stop before the `Bootstrap the Next.js App` section.

### SPA SSR

Install all npm dependencies. We need to use `--force` flag because of `aem-react-editable-components` depends on React 16. This app is based on React 18 to get the latest features.

```bash
npm install --force
```

Then run the app locally.

```bash
npm run dev
```

Visit the app at http://localhost:3000.
# Checkly site

Develop

```bash
npm run start
```

Deploy

- push to any branch will deploy to preview via Vercel / Zeit
- push to `master` will deploy to production via Vercel / Zeit

## Updating search

Go to the `docsearch-scraper` directory

```bash
pipenv shell
./docsearch run ./config.json
```

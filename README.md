# EdgeOne Payload Website Template

This is a [Payload Website Template](https://github.com/payloadcms/payload/blob/main/templates/website). Use it to power websites, blogs, or portfolios from small to enterprise. This repo includes a fully-working backend, enterprise-grade admin panel, and a beautifully designed, production-ready website.

This template is right for you if you are working on:

- A personal or enterprise-grade website, blog, or portfolio
- A content publishing platform with a fully featured publication workflow
- Exploring the capabilities of Payload

## Quick Start

### Deploying to EdgeOne Pages


### Local Development

1. Create a .env file and fill in the variables
```env
# Database connection string
DATABASE_URI=YOUR_MONGODB_URL_HERE
# Used to encrypt JWT tokens. This should be long unguessable strong passwords, you can also use a password manager to generate one for these.
PAYLOAD_SECRET=YOUR_PAYLOAD_SECRET_HERE
# Used to configure CORS, format links and more. No trailing slash
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
# Secret used to authenticate cron jobs
CRON_SECRET=YOUR_CRON_SECRET_HERE
# Used to validate preview requests
PREVIEW_SECRET=YOUR_SECRET_HERE

```

2. `pnpm install && pnpm dev` to install dependencies and start the dev server
3. open `http://localhost:3000` to open the app in your browser







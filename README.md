# EdgeOne Payload CMS With MongoDB Website Template

This is a Payload CMS with MongoDB Website Template designed to power websites, blogs, or portfolios ranging from small projects to enterprise-level applications. This repository includes a fully functional backend, an enterprise-grade admin panel, and a beautifully designed, production-ready website.

This template is ideal for:

- Personal or enterprise-grade websites, blogs, or portfolios
- Content publishing platforms with fully featured publication workflows
- Exploring Payload's capabilities

## Quick Start

### Deploying to EdgeOne Pages

1. Prepare the necessary environment variables:
   - **DATABASE_URI**: Your MongoDB connection string like:
     ```
     mongodb+srv://username:password@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
     ```
   - **PAYLOAD_SECRET**: This should be a long, unguessable, strong password. You can use a password manager to generate one. For example, run:
     ```
     openssl rand -base64 32
     ```
   - **NEXT_PUBLIC_SERVER_URL**: Your website URL like: `https://payload-mongodb-starter.edgeone.app`

2. [Go to the deployment page](https://console.tencentcloud.com/edgeone/pages/new?template=payload-mongodb-starter&from=open_templates) and fill in all prepared environment variables.

   ![](https://cloudcache.tencent-cloud.com/qcloud/ui/static/static_source_business/0f296398-aa8a-4d8f-b70f-45e4999c8faa1.png)

3. Click "Create" to start the deployment process.

### Local Development

1. Create a `.env` file and configure the variables:

```env
# Database connection string
DATABASE_URI=YOUR_MONGODB_URL_HERE
# Used to encrypt JWT tokens. This should be a long, unguessable, strong password. You can use a password manager to generate one.
PAYLOAD_SECRET=YOUR_PAYLOAD_SECRET_HERE
# Used to configure CORS, format links, and more. No trailing slash.
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
# Secret used to authenticate cron jobs
CRON_SECRET=YOUR_CRON_SECRET_HERE
# Used to validate preview requests
PREVIEW_SECRET=YOUR_SECRET_HERE
```

2. `pnpm install && pnpm dev` to install dependencies and start the dev server
3. open `http://localhost:3000` to open the app in your browser
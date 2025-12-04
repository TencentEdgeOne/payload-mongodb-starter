# EdgeOne Payload CMS + MongoDB 网站模板

这是一个基于 PayloadCMS 和 MongoDB 的网站模板，适用于构建从小型项目到企业级应用的网站、博客或作品集。本仓库包含功能完整的后端、企业级管理面板，以及设计精美、可直接用于生产环境的网站前端。

## 快速开始

### 部署到 EdgeOne Pages

1. 准备必要的环境变量：
   1. **DATABASE_URI**：MongoDB 连接字符串，格式如下：
     ```
     mongodb+srv://username:password@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
     ```
   2. **PAYLOAD_SECRET**：用于加密 JWT 令牌，应该是一个长且难以猜测的强密码。可以使用密码管理器生成，或运行以下命令：
     ```
     openssl rand -base64 32
     ```
   3. **NEXT_PUBLIC_SERVER_URL**：网站 URL，如：`https://payload-mongodb-starter.edgeone.app`
   4. **PREVIEW_SECRET**：用于验证预览请求

      **S3相关配置，用来存储上传文件，比如博客封面图等**
   5. **S3_BUCKET**
   6. **S3_REGION**
   7. **S3_ACCESS_KEY_ID**
   8. **S3_SECRET_ACCESS_KEY**
   9. **S3_ENDPOINT**

2. 一键部署到 EdgeOne Pages：

    [![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2Fzhoujie0531%2Fpayload-mongodb-starter)

3. 填写环境变量后，点击 **创建** 按钮即可启动部署


### 本地开发

1. 创建 `.env` 文件并配置环境变量：

```env
# 数据库连接字符串
DATABASE_URI=YOUR_MONGODB_URL_HERE
# 用于加密 JWT 令牌，应该是一个长且难以猜测的强密码
PAYLOAD_SECRET=YOUR_PAYLOAD_SECRET_HERE
# 用于配置 CORS、格式化链接等，末尾不要加斜杠
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
# 用于验证预览请求
PREVIEW_SECRET=YOUR_SECRET_HERE
# S3 存储配置，上传文件的存储
S3_BUCKET=xxx
S3_REGION=xxx
S3_ACCESS_KEY_ID=xxx
S3_SECRET_ACCESS_KEY=xxx
S3_ENDPOINT=xxx
```

2. 运行 `pnpm install && pnpm dev` 安装依赖并启动开发服务器
3. 打开 `http://localhost:3000` 在浏览器中访问应用

### 了解更多

[Payload 官方文档](https://payloadcms.com/docs/getting-started/what-is-payload)

# Payload CMS + MongoDB

这是一个基于 PayloadCMS 和 MongoDB 的网站模板，适用于构建从小型项目到企业级应用的网站、博客或作品集。本仓库包含功能完整的后端、企业级管理面板，以及设计精美、可直接用于生产环境的网站前端。

此模板适合以下场景：

- 个人或企业级网站、博客或作品集
- 具有完整发布工作流的内容发布平台
- 探索 Payload 的功能特性

核心功能：

- 预配置的 Payload 配置
- 用户认证
- 访问控制
- 布局构建器
- 草稿预览
- 实时预览
- 按需重新验证
- SEO
- 表单
- 搜索
- 重定向
- 网站

### 部署到 EdgeOne Pages
**第一步：准备必要的环境变量：**
1. **DATABASE_URI**：MongoDB 连接字符串，格式如下：
  ```
  mongodb+srv://username:password@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  ```
2. **PAYLOAD_SECRET**：用于加密 JWT 令牌，应该是一个长且难以猜测的强密码。可以使用密码管理器生成，或运行以下命令：
  ```
  openssl rand -base64 32
  ```
3. **NEXT_PUBLIC_SERVER_URL**：网站 URL，如：`https://payload-mongodb-starter.edgeone.app`

S3相关配置，用来存储上传文件，比如博客封面图等:

4. **S3_BUCKET**
5. **S3_REGION**
6. **S3_ACCESS_KEY_ID**
7. **S3_SECRET_ACCESS_KEY**
8. **S3_ENDPOINT**

**第二步：一键部署到 EdgeOne Pages：**

  [![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?template=payload-mongodb-starter)

**第三步：填写环境变量后，点击 **创建** 按钮即可启动部署**


### 本地开发

1. 创建 `.env` 文件并配置环境变量：

```env
# 数据库连接字符串
DATABASE_URI=YOUR_MONGODB_URL_HERE
# 用于加密 JWT 令牌，应该是一个长且难以猜测的强密码
PAYLOAD_SECRET=YOUR_PAYLOAD_SECRET_HERE
# 用于配置 CORS、格式化链接等，末尾不要加斜杠
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
# S3 存储配置，上传文件的存储
S3_BUCKET=xxx
S3_REGION=xxx
S3_ACCESS_KEY_ID=xxx
S3_SECRET_ACCESS_KEY=xxx
S3_ENDPOINT=xxx
```

2. 运行 `pnpm install && pnpm dev` 安装依赖并启动开发服务器
3. 打开 `http://localhost:3000` 在浏览器中访问应用

### 工作原理
Payload 配置专门针对大多数网站的需求进行了定制，预配置如下：

![payloadcms dashboard](https://cloudcache.tencent-cloud.com/qcloud/ui/static/other_external_resource/76012d07-80b4-435d-a1ba-0705d4849346.png)

#### Collections（集合）

详细信息请参阅 [Collections](https://payloadcms.com/docs/configuration/collections) 文档。

- ##### Users（用户认证）

  Users 是启用了认证功能的集合，可以访问管理面板和未发布的内容。

  如需更多帮助，请参阅官方 [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) 或 [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) 文档。

- ##### Posts（文章）

  Posts 用于生成博客文章、新闻资讯或任何其他随时间发布的内容。所有文章都启用了布局构建器，您可以使用布局构建块为每篇文章生成独特的布局。文章还启用了草稿功能，您可以在发布到网站之前预览它们。

- ##### Pages（页面）

  所有页面都启用了布局构建器，您可以使用布局构建块为每个页面生成独特的布局。页面还启用了草稿功能，您可以在发布到网站之前预览它们。

- ##### Media（媒体）

  这是启用了上传功能的集合，供页面、文章和项目使用，用于存储图片、视频、下载文件和其他资源。它具有预配置的尺寸、焦点和手动调整大小功能，帮助您管理图片。

- ##### Categories（分类）

  用于将文章分组的分类法。分类可以嵌套，例如"新闻 > 科技"。详情请参阅官方 [Payload Nested Docs Plugin](https://payloadcms.com/docs/plugins/nested-docs)。

- ##### Forms & Form Submissions（表单与表单提交）

  本模板预配置了官方 [Form Builder Plugin](https://payloadcms.com/docs/plugins/form-builder)。该插件允许您直接在管理面板中构建和管理自定义表单，所有表单提交数据都直接存储在数据库中，并可在管理面板中直接管理。

- ##### Redirects（重定向）

  如果您正在迁移现有网站或将内容移动到新 URL，可以使用 `redirects` 集合创建从旧 URL 到新 URL 的正确重定向。这将确保向搜索引擎返回正确的请求状态码，并确保用户不会遇到失效链接。本模板预配置了官方 [Payload Redirects Plugin](https://payloadcms.com/docs/plugins/redirects)，可在管理面板中完全控制重定向。

- ##### Search（搜索）

  本模板还预配置了官方 [Payload Search Plugin](https://payloadcms.com/docs/plugins/search)，展示了如何在 Next.js 中使用 Payload 轻松实现 SSR 搜索功能。

#### Globals（全局配置）

详细信息请参阅 [Globals](https://payloadcms.com/docs/configuration/globals) 文档。

- `Header`

  前端页头所需的数据，如导航链接。

- `Footer`

  与上述类似，用于网站页脚。

#### Access Control（访问控制）

基本的访问控制已设置好，根据发布状态限制对各种内容的访问。

- `users`：用户可以访问管理面板并创建或编辑内容。
- `posts`：所有人都可以访问已发布的文章，但只有用户可以创建、更新或删除它们。
- `pages`：所有人都可以访问已发布的页面，但只有用户可以创建、更新或删除它们。

如需了解如何扩展此功能，请参阅 [Payload Access Control](https://payloadcms.com/docs/access-control/overview#access-control) 文档。

更多详情请参阅 [Payload 官方文档](https://payloadcms.com/docs/getting-started/what-is-payload)。

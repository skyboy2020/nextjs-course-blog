This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Image 组件使用：components/home-page/hero.js

为什么pages/index.js pages/posts/index pages/posts/[slug].js 
使用 静态渲染：getStaticProps 而没有使用 动态渲染：getServerSideProps

同样，为此，我将使用 getStaticProps。

所以我将导出一个函数 getStaticProps

在这里获取我的帖子。

同样，getServerSideProps 对我来说毫无意义

因为我们不想获取所有的帖子

对于每个请求。

这对性能来说并不是那么好。

相反，在构建过程中执行一次

应该足够了。

如果我们之后更新我们的文件

我们想反映这些变化，

我们只需要重建和重新部署

但我们可能不会每天多次这样做。

如果我们添加新帖子，

因为它是整个项目文件夹的一部分，

无论如何，我们都需要重新部署。

所以这也不会是一个问题。


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

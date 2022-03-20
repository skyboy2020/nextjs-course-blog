import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

/*
为什么使用 静态渲染: getstaticProps
而没有使用 动态渲染 getServerSideProps

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
*/

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}



//getServerSideProps 动态渲染 每次请求都请求，生成新的精选帖子
export function getServerSideProps() {  
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

// getStaticProps 静态渲染
// revalidate 100 每100秒重新执行生成一次精选帖子
// 不加revalidate 100 这个段落的话，在生产环境,getStaticProps只执行一次
// 以后每次请求都不生成新的精选帖子
// export function getStaticProps() {
//     const featuredPosts = getFeaturedPosts();
  
//     return {
//       props: {
//         posts: featuredPosts,
//       },
//       revalidate: 100
//     };
//   }
  

export default HomePage;

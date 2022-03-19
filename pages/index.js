import { Fragment } from "react"
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

function HomePage() {
  return (
    <Fragment>
      {/* 顶部个人介绍组件 */}
      <Hero />
      {/* 精选博客主题 */}
      <FeaturedPosts />
    </Fragment>
  )
}

export default HomePage
import { Fragment } from "react"
import Hero from '../components/home-page/hero'

function HomePage() {
  return (
    <Fragment>
      {/* 顶部个人介绍组件 */}
      <Hero />
      {/* <FeaturedPosts /> */}
    </Fragment>
  )
}

export default HomePage
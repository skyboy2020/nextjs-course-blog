import { Fragment } from "react"
import MainNavigation from "./main-navigation"
//页面布局组件，可以用在_app.js 或 单独写在页面组件中
function Layout(props) {
  return (
     <Fragment>
         <MainNavigation />
         <main>{ props.children }</main>
     </Fragment>  
  )
}

export default Layout
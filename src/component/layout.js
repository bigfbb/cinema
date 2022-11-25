import {React,Fragment} from "react"
import Header from "../header"
import Footer from "../footer"
import { Outlet } from "react-router-dom"
const Layout =()=>{
    return(
        <Fragment>
        <Header />
        <Outlet/>
        <Footer />
    </Fragment>
    )
}
export default Layout
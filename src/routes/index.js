import About from "../page/About";
import Home from "../page/Home";
import Project from "../page/Project";
import Skills from "../page/Skills";
const routes=[
    {
        path:"/",
        element:<Home/>,
        name:'Home'
    },{
        path:"/about",
        element:<About/>,
        name:'About'
    },{
        path:"/project",
        element:<Project/>,
        name:'Project'
    },{
        path:"/skills",
        element:<Skills/>,
        name:'Skills'
    }
]
export default routes;
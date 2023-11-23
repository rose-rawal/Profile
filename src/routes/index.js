import About from "../page/About";
import Home from "../page/Home";
import Project from "../page/Project";
import Skills from "../page/Skills";
import Cv from "../page/Cv";
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
    },{
        path:"/cv",
        element:<Cv/>,
        name:'Cv'
    }
]
export default routes;
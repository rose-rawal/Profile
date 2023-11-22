import Html from '../../image/language/Html.png'
import Css from '../../image/language/Css.png'
import Js from '../../image/language/Js.webp'
import RJS from '../../image/language/React.png'
const lang=[
    {
        name:"HTML",
        icon:Html,
        link:'https://developer.mozilla.org/en-US/docs/Web/HTML',
        cont:0
    },
    {
        name:"CSS",
        icon:Css,
        cont:1,
        link:'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },{
        name:"JS",
        icon:Js,cont:2,
        link:'https://developer.mozilla.org/en-US/docs/Web/javascript'
    },
    {
        name:"REACT",
        icon:RJS,
        cont:3,
        link:'https://react.dev/learn'
    },
    {
        name:"NodeJS",
        link:'https://nodejs.org/en/docs'
    },
    {
        name:"MongoDB",
        link:'https://www.mongodb.com/docs/'
    },
    {
        name:"Express",
        link:'https://expressjs.com/'
    },
    {
        name:"SASS",
        link:'https://sass-lang.com/'
    },
]
lang.forEach((n,i)=>{
    n.cont=i+1
})
export default lang
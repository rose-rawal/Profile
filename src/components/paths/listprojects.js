import chat from '../../image/chatapp.png'
import chat2 from '../../image/chatapp2.png'
import eureka from '../../image/landingpage.png'
import eureka2 from '../../image/landingpage2.png'
import pear from '../../image/cocktailapp.png'
import pear2 from '../../image/cocktailapp2.png'
import emergency from '../../image/emergency1.jpg'
import emergency2 from '../../image/emergency2.jpg'
const listproject=[
    {
        name:"MyChat",
        image:chat,
        image2:chat2,
        context:'A chatroom implemented with secure and well managed collection of accounts',
        link:'https://peach-kuro.netlify.app/',
        created:'Self',
        Lang:'HTML, CSS, JS, MERN'
        
    },
    {
        name:"Emergency",
        image:emergency,
        image2:emergency2,
        context:'Android and IOS crossplatform app that provides SOS services for people. It provides various different features such as send emergency signal, call direct and observe all the stats of the incident reported through app.',
        link:'https://github.com/rose-rawal/emergency',
        created:'Team',
        Lang:'HTML, CSS, JS, React Native'
    },
    {
        name:"Pear",
        image:pear,
        image2:pear2,
        context:'A site to search for the available cocktails and access their recipe and ingredients giving a glimpse of data to learn the required skill to learn to prepare cocktail',
        link:'https://peaches-kuro.netlify.app/',
        created:'Self',
        Lang:'HTML, CSS, JS, React, Bootstrap'
    },
    {
        name:"Eureka",
        image:eureka,
        image2:eureka2,
        context:'An Ecommerce landing page that illustrates my skill in basic usage of HTML and CSS/ Bootstrap',
        link:'https://eureka-kuro.netlify.app/',
        created:'Self',
        Lang:'HTML, CSS'
    }
]
listproject.forEach((n,i)=>{
    n.index=i+1
})
console.log(listproject)
export default listproject
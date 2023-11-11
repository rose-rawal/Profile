import chat from '../../image/chatapp.png'
import chat2 from '../../image/chatapp2.png'

const listproject=[
    {
        name:"MyChat",
        image:chat,
        image2:chat2,
        context:'A chatroom implemented with secure and well managed collection of accounts',
        
    },
     {
        name:"MyChat",
        image:chat,
        image2:chat2,
        context:'A chatroom implemented with secure and well managed collection of accounts'
    }
]
listproject.forEach((n,i)=>{
    n.index=i+1
})
console.log(listproject)
export default listproject
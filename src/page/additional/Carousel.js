import React from 'react'
import chatapp from '../../image/chatapp.png'
import cocktailapp from '../../image/cocktailapp.png'
import landingpage from '../../image/landingpage.png'
const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide w-3/5 m-auto" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner text-black">
    <div className="carousel-item active">
      <img src={chatapp} className="d-block w-100 brightness-50" alt="tree"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='font-black'>My Chatroom</h5>
        <p>ChatRoom created with MERN without using socket and firebase. Solely running via database connection.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={cocktailapp} className="d-block w-100 brightness-50" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='font-black'>Cocktail Search Page</h5>
        <p>Created a search page to search for cocktail and learn their ingredients and recipe. Used a pre-built API.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={landingpage} className="d-block w-100 brightness-50" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='font-black'>E-Commerce Landing Page</h5>
        <p>This is a site landing page created using basic HTML CSS and Bootstrap. This website illustrates only the front page of the site.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel
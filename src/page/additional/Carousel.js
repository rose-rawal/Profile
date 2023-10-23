import React from 'react'
import chatapp from '../../image/chatapp.png'
import cocktailapp from '../../image/cocktailapp.png'
import landingpage from '../../image/landingpage.png'
const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide w-3/4 m-auto" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner text-black">
    <div class="carousel-item active">
      <img src={chatapp} class="d-block w-100 brightness-50" alt="tree"/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='font-black'>My Chatroom</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={cocktailapp} class="d-block w-100 brightness-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='font-black'>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={landingpage} class="d-block w-100 brightness-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='font-black'>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel
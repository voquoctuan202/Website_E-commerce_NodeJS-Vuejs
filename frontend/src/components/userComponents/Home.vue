<template>
    <div id="home">
      <div class="tieude">
        <h2 class="tieude">CÁC SẢN PHẨM NỔI BẬT</h2>
      </div>

      <div id="carouselExampleIndicators" class="carousel slider" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" aria-current="true"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/iphone.png" class="d-block i_mage" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/images/samsung.png" class="d-block i_mage" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/images/iphone.png" class="d-block i_mage" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
    
</template>
<style>
  #home{
    width: 97%;
    height: max-content;
    background-color:  rgb(255, 255, 255);

    margin: auto;
    margin-top: 10px;
    padding-bottom: 10px;
    border-radius: 3px;
    box-shadow:1px 1px 1px 1px rgb(222, 222, 222);
  }
  .i_mage{
    width: 90%;
    height: 450px;
    margin: auto;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }
  
</style>


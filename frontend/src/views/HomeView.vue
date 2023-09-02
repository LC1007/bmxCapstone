<template>
  <div>
    <Navbar />
    <!-- Story time section -->
    <section>
      <h1 class="text-center m-5">STORYTIME</h1>
      <div class="container">
        <div class="row m-5">
          <div class="col-12 col-lg-6 col-md-6">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, autem suscipit harum eum temporibus iste voluptas ratione reprehenderit quaerat sed.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatibus ex itaque, omnis quibusdam sit voluptates cum, aliquid laborum sint recusandae quod velit accusantium fuga architecto id incidunt modi?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur amet nam porro, commodi voluptatum iure nemo dignissimos hic autem? Voluptas consequuntur aperiam recusandae voluptatem ullam facilis nulla magni illo tempora?</p>
          </div>
          <div class="col-12 col-lg-6 col-md-6">
            <img src="https://i.postimg.cc/sgJKsQkg/pexels-zach-service-922936.jpg" class="custom-square-img w-100" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- Top picks section -->

      <section>
        <h1 class="text-center my-5">TOP PICKS</h1>  
        <div class="container">
          <div class="row my-5 g-2">
            <div class="col">
              <div class="card" style="width: 18rem">
                <img src="https://i.postimg.cc/Prw4TBd6/thumb-63ac298f5d165.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <h4 class="card-tite">Neo Bmx 16"</h4>
                  <p class="card-text">R10 000</p>
                  <router-link to="/product"><button class="btn btn-dark">View More</button></router-link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style="width: 18rem">
                  <img src="https://i.postimg.cc/Prw4TBd6/thumb-63ac298f5d165.jpg" class="card-img-top" alt="">
                  <div class="card-body">
                    <h4 class="card-tite">Neo Bmx 16"</h4>
                    <p class="card-text">R10 000</p>
                    <router-link to="/product"><button class="btn btn-dark">View More</button></router-link>
                  </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem">
                    <img src="https://i.postimg.cc/Prw4TBd6/thumb-63ac298f5d165.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                      <h4 class="card-tite">Neo Bmx 16"</h4>
                      <p class="card-text">R10 000</p>
                      <router-link to="/product"><button class="btn btn-dark">View More</button></router-link>
                    </div>
                  </div>
              </div>
              <div class="col">
                <div class="card" style="width: 18rem">
                    <img src="https://i.postimg.cc/Prw4TBd6/thumb-63ac298f5d165.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                      <h4 class="card-tite">Neo Bmx 16"</h4>
                      <p class="card-text">R10 000</p>
                      <router-link to="/product"><button class="btn btn-dark">View More</button></router-link>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

    <!-- Events section -->

    <section>
      <h1 class="text-center m-5">EVENTS</h1>
      <div class="container">
        <div class="custom-grid">
          <div class="event-1">
            <img src="https://i.postimg.cc/sgJKsQkg/pexels-zach-service-922936.jpg" class="w-100 custom-grid-img" alt="">
          </div>
          <div class="event-2">
            <img src="https://i.postimg.cc/sgJKsQkg/pexels-zach-service-922936.jpg" class="w-100 custom-grid-img" alt="">
          </div>
          <div class="event-3">
            <img src="https://i.postimg.cc/sgJKsQkg/pexels-zach-service-922936.jpg" class="w-100 custom-grid-img" alt="">
          </div>
          <div class="event-4">
            <img src="https://i.postimg.cc/sgJKsQkg/pexels-zach-service-922936.jpg" class="w-100 custom-grid-img" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- Only the best for the best section -->

    <section>
      <div class="container">
        <div class="row my-5">
          <div class="col-12 col-lg-6 col-md-6">
            <h1 class="display-1 fw-bold">ONLY THE BEST FOR THE BEST</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut minus optio expedita aut voluptatum blanditiis repellendus ullam ducimus. Explicabo hic dolorum quibusdam exercitationem, in dolores reprehenderit ab incidunt recusandae optio!</p>
            <button class="btn btn-dark">Buy now</button>
          </div>
          <div class="col-12 col-lg-6 col-md-6">
            <img src="https://i.postimg.cc/Vs76vTH8/62165db45515463e41aa6df4-crysis-champagne-2000-2.jpg" class="w-100"  alt="">
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComp.vue'

export default{
  components:{
    Navbar
  }
}
</script>

<style scoped>
.custom-square-img{
    aspect-ratio: 1 / 1;
    object-fit: cover;
}

.custom-grid{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100vh;
  gap: 2rem;
}

.custom-grid-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-1{
  grid-column: 1 / -1;
  grid-row: 1 / 7;
  background-color: red;
}

.event-2{
  grid-column: 1 / 5;
  grid-row: 7 / -1;
  background-color: blue;
}

.event-3{
  grid-column: 5 / 9;
  grid-row: 7 / -1;
  background-color: crimson;
}

.event-4{
  grid-column: 9 / -1;
  grid-row: 7 / -1;
  background-color: orangered;
}

@media only screen and (max-width: 400px) {
  .custom-grid{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}

</style>
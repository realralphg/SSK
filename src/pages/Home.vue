<template>
  <div>
    <div class="row">
      <span class="shade text-weight-light text-center text-h4 q-pa-md">Save Southern Kaduna.org</span>
      <span class="text-weight-light q-px-md"> The only thing necessary for the 
        triumph of evil is for good men to do nothing! <br>- Edmund Burke</span>
        
      <div class="col-md-8 col-sm-8 col-xs-12 ">
        <div class="q-pa-md">
          <q-video
            :ratio="16/9"
            src="https://www.youtube.com/embed/jAfH6dRpiDU"
          />
        </div>

        <div class="q-pa-md">
          <q-video
            :ratio="16/9"
            src="https://www.youtube.com/embed/WbAfW1NXtFw"
          />
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-4">
        <div class="q-pa-md">
          <span class="text-h5">About the Movement</span> <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Esse vero earum, sapiente qui sequi repudiandae aperiam 
          deserunt sit ex, in ab repellendus, consequuntur quisquam 
          excepturi facere atque optio magnam accusantium! - Read More...
        </div>

        <div class="text-center">
          <q-img src="images/kdmap.jpg" spinner-color="white" style="height: auto; max-width: 200px" />          
        </div>
      </div>
    </div>

    <!-- Carousel -->
    <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        autoplay
        animated
        infinite
        control-color="secondary"
        navigation
        height="300px"
        class="bg-grey-1 shadow-2 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="images/attack1.jpg" />
            <q-img class="rounded-borders col-6 full-height" src="images/attack2.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="images/attack3.jpg"  />
            <q-img class="rounded-borders col-6 full-height" src="images/attack4.jpg" />
          </div>
        </q-carousel-slide>      
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="images/attack5.jpg"  />
            <q-img class="rounded-borders col-6 full-height" src="images/attack6.jpg"  />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="images/burial1.jpg"  />
            <q-img class="rounded-borders col-6 full-height" src="images/burial2.jpg" />
          </div>
        </q-carousel-slide>   
      </q-carousel>
  
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      slide: 1
    }
  }
}
</script>

<style scoped>
  .shade{  
    text-align: center;
    padding: 10px;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 15px 15px 15px 15px;
    margin-bottom: 5px;
    margin-right: 5px;
    transition: 0.4s;   
    margin: 15px; 
}
</style>
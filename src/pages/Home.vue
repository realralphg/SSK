<template>
  <div>
    <div class="row">
      <span class="shade text-white text-center text-h4 q-pa-md">Save Southern Kaduna.org</span>
      <br> <br>
      <span class="text-weight-light q-mt-md q-px-md"> The only thing necessary for the 
        triumph of evil is for good men to do nothing! <br>- Edmund Burke</span>
        
      <div class="col-md-8 col-sm-8 col-xs-12">
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
          Peace and security are essential for the growth and development of any people.
          Without security there can be no peace and without peace, nothing thrives.
          The people of Southern Kaduna in Northern Nigeria have long suffered in the hands of the Fulani 
          herdsmen without appropriate response from governing authorities.Dreams have 
          been shattered and hopes dashed. This is the voice of the motherless child who
          wanders in despair, the father to murdered children whose future is now bleak, 
          the woman whose abode is now a shadow of all she holds dear, the farmers whose crops
          have been raided by the herds of the herdsmen, the voiceless dead whose inventions
          will never see the light of day. As death toll rises, we understand that we 
          all have a collective responsibility to engage the matter and take a stand against 
          the evil that befalls us as a people. We therefore call on the public to lend 
          a voice, resources, action and all that is within our rights and possessions to end 
          this wickedness that we may live free - free of all fears, because we too have the 
          right to good life.
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

  <!--P O S T S  -->
  <div class="q-mx-md q-mt-md">
    <span class="text-h5 text-weight-light">Related Posts...</span>
  </div>
      <div class="flex-container row">
        <div class="flex-item col-md-3 col-sm-4 col-xs-12">
          <router-link to="/series-of-attacks-southern-kaduna">
            <span class="text-h7 text-weight-bold">Series of Attacks Meted on The Good People of Southern Kaduna From 1980 Till Date – 247UReports</span> <br>
          </router-link>
          <q-img src="images/postpic/attack.jpg" style="max-width: 300px" />
          <p>1. KasuwanMagani in Kajuru LGA, 1980, when Hausa traders tried to 
            take over Adara land, claiming that the land belonged to them. <br>
            2.Yarkasuwa, then in Lere District in 1986, during the contest 
            for the district headship of Lere, when 
            <router-link to="/series-of-attacks-southern-kaduna" class="text-weight-bold"> read more...</router-link></p>
        </div>

        <div class="flex-item col-md-3 col-sm-4 col-xs-12">
          <router-link to="/sokapu">
            <span class="text-h7 text-weight-bold">Southern Kaduna Peoples Union (SOKAPU) - Press Statement (Friday, 11th September, 2020)</span> <br>
          </router-link>
          <q-img src="images/postpic/attack3.jpg" style="max-width: 300px" />
          <p>Early this morning, (11th September, 2020)  Manyi-Mashin village, in  Zamandabo 
            ward, in Atyap Chiefdom, Zangon Kataf Local Government Area (LGA) in Southern 
            Kaduna, was invaded by hordes of  Fulani armed men  who burnt down  almost all 
            the houses in the village, looting and carting away valuables. 
            <router-link to="/sokapu" class="text-weight-bold"> read more...</router-link></p>
        </div>

        <div class="flex-item col-md-3 col-sm-4 col-xs-12">
          <router-link to="/press-release-southern-kaduna">
            <span class="text-h7 text-weight-bold">Press Release on Recent Security and Political Developments in the Region – By the Southern Kaduna Patriots, Kaduna Youth Forum</span> <br>
          </router-link>
          <q-img src="images/postpic/attack4.jpg" style="max-width: 300px" />
          <p>Gentlemen of the Press,
            It is with great pleasure that I welcome you to this conference.
            As you all know, by May 29th 2015, democracy would be 16 years old in 
            Nigeria and Kaduna state in particular.
            <router-link to="/press-release-southern-kaduna" class="text-weight-bold"> read more...</router-link></p>
        </div>
      </div>
  
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
    background-color: rgba(245, 6, 6, 0.562);
    border-radius: 15px 15px 15px 15px;
    margin-bottom: 5px;
    margin-right: 5px;
    transition: 0.4s;   
    margin: 15px; 
}

 .flex-container{
   display: flex;
   padding: 20px;
 }

 .flex-item{
   margin-bottom: 3px;
   margin-top: 3px;
   margin-right: 15px;
 }

 a{
   text-decoration: none;   
   color: rgb(46, 44, 44);
 }
</style>
<template>
  <ion-page>
    <!-- <ion-header :translucent="true">
      <ion-toolbar>
        <div class="ion-text-center">
          <ion-title><b>Home</b></ion-title>
        </div>
      </ion-toolbar>
    </ion-header> -->
    
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col class="ion-padding-horizontal">
            <ion-text>
              <h1 style="font-size: 22pt;"><strong>Home</strong></h1>
            </ion-text>
          </ion-col>
        </ion-row>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card color="color1">
                <ion-card-header>
                  <ion-card-title><b>Kolam</b></ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-card-subtitle><h1><strong>10</strong></h1></ion-card-subtitle>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card color="color1">
                <ion-card-header>
                  <ion-card-title><b>Kolam Aktif</b></ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-card-subtitle><h1><strong>8</strong></h1></ion-card-subtitle>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card color="color1">
                <ion-card-header>
                  <ion-card-title><b>Hidup</b></ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-card-subtitle><h1><strong>182</strong> ekor</h1></ion-card-subtitle>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card color="color1">
                <ion-card-header>
                  <ion-card-title><b>Ikan Mati</b></ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-card-subtitle><h1><strong>89</strong> ekor</h1></ion-card-subtitle>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-card color="color1">
                <ion-card-header>
                  <ion-card-title><b>Panen 2022</b></ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-card-subtitle><h1><strong>109</strong> kg</h1></ion-card-subtitle>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card color="color1">
                <ion-card-header>
                  <ion-card-title><b>Total Pakan</b></ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-card-subtitle><h1><strong>223</strong> kg</h1></ion-card-subtitle>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-row class="ion-padding-horizontal">
          <ion-text>
            <h1 style="font-size: 22pt;"><strong>Total Berat Ikan</strong></h1>
          </ion-text>
        </ion-row>
        <swiper
          :slides-per-view="2" 
          :free-mode="true"
          :space-between="30" 
          :modules="modules" 
          :autoplay="false" 
          :keyboard="true" 
          :pagination="false" 
          :scrollbar="true" 
          :zoom="true">
          <swiper-slide class="ion-margin-bottom">
            <ion-card color="color1">
              <ion-img alt="Wels Catfish" src="resources/images/Wels Catfish.png" title="Wels Catfish" style="height: 150px;"></ion-img>
              <ion-card-header>
                <ion-card-title><b>Lele</b></ion-card-title>
                <ion-card-subtitle style="color: #3880ff; font-size: x-large;"><b>200 kg</b></ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </swiper-slide>
          <swiper-slide class="ion-margin-bottom">
            <ion-card color="color1">
              <ion-img alt="Nila Merah" src="resources/images/Nila Merah.png" title="Nila Merah" style="height: 150px;" />
              <ion-card-header>
                <ion-card-title><b>Nila Merah</b></ion-card-title>
                <ion-card-subtitle style="color: #3880ff; font-size: x-large;"><b>200 kg</b></ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </swiper-slide>
          <swiper-slide class="ion-margin-bottom">
            <ion-card color="color1">
              <ion-img alt="Karper Krusia" src="resources/images/Karper Krusia.png" title="Karper Krusia" style="height: 150px;" />
              <ion-card-header>
                <ion-card-title><b>Karper</b></ion-card-title>
                <ion-card-subtitle style="color: #3880ff; font-size: x-large;"><b>200 kg</b></ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </swiper-slide>
        </swiper>
        <ion-row class="ion-padding-horizontal">
          <ion-text>
            <h1 style="font-size: 22pt;"><strong>Kualitas Air</strong></h1>
          </ion-text>
        </ion-row>
        <swiper
        :free-mode="true" 
        :scrollbar="true" 
        :modules="modules" 
        class="mySwiper">
          <swiper-slide class="ion-margin-bottom">
            <ion-card color="color1">
              <ion-card-header>
                <ion-card-title style="font-size: 24pt;"><strong>pH</strong></ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-text style="font-size: 14pt; margin-right: 14px;">Normal</ion-text>
                <ion-text color="primary" style="font-size: 14pt;"><b>6 Kolam</b></ion-text>
                <br>
                <ion-text style="font-size: 14pt; margin-right: 14px;">Abnormal</ion-text>
                <ion-text color="primary" style="font-size: 14pt;"><b>6 Kolam</b></ion-text>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide class="ion-margin-bottom">
            <ion-card color="color1">
              <ion-card-header>
                <ion-card-title style="font-size: 24pt;"><strong>DO</strong></ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-text style="font-size: 14pt; margin-right: 14px;">Normal</ion-text>
                <ion-text color="primary" style="font-size: 14pt;"><b>6 Kolam</b></ion-text>
                <br>
                <ion-text style="font-size: 14pt; margin-right: 14px;">Abnormal</ion-text>
                <ion-text color="primary" style="font-size: 14pt;"><b>6 Kolam</b></ion-text>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide class="ion-margin-bottom">
            <ion-card color="color1">
              <ion-card-header>
                <ion-card-title style="font-size: 24pt;"><strong>Flok</strong></ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-text style="font-size: 14pt; margin-right: 14px;">Normal</ion-text>
                <ion-text color="primary" style="font-size: 14pt;"><b>6 Kolam</b></ion-text>
                <br>
                <ion-text style="font-size: 14pt; margin-right: 14px;">Abnormal</ion-text>
                <ion-text color="primary" style="font-size: 14pt;"><b>6 Kolam</b></ion-text>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
        </swiper>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import
{ 
  IonContent, 
  // IonHeader, 
  IonPage, 
  // IonTitle, 
  // IonToolbar, 
  IonCard, 
  IonGrid, 
  // IonSlides, 
  IonImg, 
  IonText, 
  IonRow, 
  IonCol, 
  IonCardHeader, 
  IonCardContent, 
  IonCardTitle, 
  IonCardSubtitle, 
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom'; 
import '@ionic/vue/css/ionic-swiper.css';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    // IonHeader,
    IonPage,
    // IonTitle,
    // IonToolbar,
    IonCard,
    IonGrid,
    // IonSlides,
    IonImg,
    Swiper,
    SwiperSlide,
    IonText,
    IonRow,
    IonCol,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle
  },
  setup() {
    return {
      modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, FreeMode]
    };
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

/* ion-grid {
  --ion-grid-padding: 20px;

  --ion-grid-padding-xs: 20px;
  --ion-grid-padding-sm: 20px;
  --ion-grid-padding-md: 20px;
  --ion-grid-padding-lg: 20px;
  --ion-grid-padding-xl: 20px;

  --ion-grid-column-padding: 30px;

  --ion-grid-column-padding-xs: 30px;
  --ion-grid-column-padding-sm: 30px;
  --ion-grid-column-padding-md: 30px;
  --ion-grid-column-padding-lg: 30px;
  --ion-grid-column-padding-xl: 30px;
} */

/* ion-column
{
  align-content: space-around;
} */

ion-card
{
  margin: 3px 6px;
}

</style>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" color="color2">
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/ponds">
          <ion-icon :icon="ellipse" />
          <ion-label>Kolam</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/Page3">
          <ion-icon :icon="fish" />
          <ion-label>Pakan</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab4" href="/Page4">
          <ion-icon :icon="square" />
          <ion-label>Grading</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import 
{ 
  ellipse, 
  fish, 
  home, 
  square, 
  triangle 
} from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      fish, 
      home, 
      square, 
      triangle 
    }
  }
});
</script>
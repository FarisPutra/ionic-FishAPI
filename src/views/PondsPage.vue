<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="color4" @click="openModal">
          <ion-icon :icon="add" style="font-size: 32pt;"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-list style="background: transparent;" :inset="true">
        <ion-list-header>
          <ion-label>
            <h1 style="font-size: 22pt;"><strong>Kolam</strong></h1>
          </ion-label>
          <ion-button shape="round" on-click="" color="color4">
            <ion-icon :icon="filter"></ion-icon>
          </ion-button>
          <ion-button shape="round" on-click="" color="color4">
            <ion-icon :icon="funnel"></ion-icon>
          </ion-button>
        </ion-list-header>
        
        <ion-card color="color1" class="ion-margin-bottom">
          <ion-item :button="true" :lines="'none'" color="color1">
            <div style="width: 100%;">
              <ion-item color="transparent" style="z-index: -1; border-bottom: 5px solid gray;">
                <ion-label>
                  <ion-card-title style="font-size: 18pt;"><b>Alpha</b></ion-card-title>
                </ion-label>
                <ion-button color="success" slot="end">
                  <ion-text color="color1" style="font-size: 14pt;"><strong>Aktif</strong></ion-text>
                </ion-button>
              </ion-item>
              <div class="ion-margin">
                <ion-icon item-start :icon="calendarNumberOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">01-09-2022</ion-text>
                <br>
                <ion-icon :icon="timeOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">90 hari</ion-text>
                <br>
                <ion-icon :icon="fishOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">200 ekor</ion-text>
              </div>
            </div>
          </ion-item>
        </ion-card>
        <ion-card color="color1" class="ion-margin-bottom">
          <ion-item :button="true" :lines="'none'" color="color1">
            <div style="width: 100%;">
              <ion-item color="transparent" style="z-index: -1; border-bottom: 5px solid gray;">
                <ion-label>
                  <ion-card-title style="font-size: 18pt;"><b>Beta</b></ion-card-title>
                </ion-label>
                <ion-button color="danger" slot="end">
                  <ion-text color="color1" style="font-size: 14pt;"><strong>Tidak Aktif</strong></ion-text>
                </ion-button>
              </ion-item>
              <div class="ion-margin">
                <ion-icon item-start :icon="calendarNumberOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">02-09-2022</ion-text>
                <br>
                <ion-icon :icon="timeOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">90 hari</ion-text>
                <br>
                <ion-icon :icon="fishOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">200 ekor</ion-text>
              </div>
            </div>
          </ion-item>
        </ion-card>
        <ion-card color="color1" class="ion-margin-bottom">
          <ion-item :button="true" :lines="'none'" color="color1">
            <div style="width: 100%;">
              <ion-item color="transparent" style="z-index: -1; border-bottom: 5px solid gray;">
                <ion-label>
                  <ion-card-title style="font-size: 18pt;"><b>Charlie</b></ion-card-title>
                </ion-label>
                <ion-button color="success" slot="end">
                  <ion-text color="color1" style="font-size: 14pt;"><strong>Aktif</strong></ion-text>
                </ion-button>
              </ion-item>
              <div class="ion-margin">
                <ion-icon item-start :icon="calendarNumberOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">03-09-2022</ion-text>
                <br>
                <ion-icon :icon="timeOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">90 hari</ion-text>
                <br>
                <ion-icon :icon="fishOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">200 ekor</ion-text>
              </div>
            </div>
          </ion-item>
        </ion-card>
        <ion-card color="color1" class="ion-margin-bottom">
          <ion-item :button="true" :lines="'none'" color="color1">
            <div style="width: 100%;">
              <ion-item color="transparent" style="z-index: -1; border-bottom: 5px solid gray;">
                <ion-label>
                  <ion-card-title style="font-size: 18pt;"><b>Delta</b></ion-card-title>
                </ion-label>
                <ion-button color="success" slot="end">
                  <ion-text color="color1" style="font-size: 14pt;"><strong>Aktif</strong></ion-text>
                </ion-button>
              </ion-item>
              <div class="ion-margin">
                <ion-icon item-start :icon="calendarNumberOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">04-09-2022</ion-text>
                <br>
                <ion-icon :icon="timeOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">90 hari</ion-text>
                <br>
                <ion-icon :icon="fishOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">200 ekor</ion-text>
              </div>
            </div>
          </ion-item>
        </ion-card>
        <ion-card color="color1" class="ion-margin-bottom">
          <ion-item :button="true" :lines="'none'" color="color1">
            <div style="width: 100%;">
              <ion-item color="transparent" style="z-index: -1; border-bottom: 5px solid gray;">
                <ion-label>
                  <ion-card-title style="font-size: 18pt;"><b>Epsilon</b></ion-card-title>
                </ion-label>
                <ion-button color="success" slot="end">
                  <ion-text color="color1" style="font-size: 14pt;"><strong>Aktif</strong></ion-text>
                </ion-button>
              </ion-item>
              <div class="ion-margin">
                <ion-icon item-start :icon="calendarNumberOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">05-09-2022</ion-text>
                <br>
                <ion-icon :icon="timeOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">90 hari</ion-text>
                <br>
                <ion-icon :icon="fishOutline" style="font-size: 16pt; vertical-align: middle;"></ion-icon>
                <ion-text style="font-size: 14pt; margin-left: 14px; vertical-align: middle;">200 ekor</ion-text>
              </div>
            </div>
          </ion-item>
        </ion-card>
      </ion-list>
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
  // IonGrid,
  IonItem,
  IonIcon,
  modalController,
  IonButton,
  IonText,
  IonFab,
  IonFabButton,
  IonList,
  IonListHeader,
  IonLabel,
  IonCardTitle
} from '@ionic/vue';
import { information, informationCircle, filter, funnel, add, calendarNumberOutline, timeOutline, fishOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import RegisterPond from './RegisterPond.vue';

export default defineComponent({
  name: 'PondsPage',
  components: {
    IonContent,
    // IonHeader,
    IonPage,
    // IonTitle,
    // IonToolbar,
    IonCard,
    // IonGrid,
    IonItem,
    IonIcon,
    IonButton,
    IonText,
    IonFab,
    IonFabButton,
    IonList,
    IonListHeader,
    IonLabel,
    IonCardTitle
  },
  setup() {
    return { informationCircle, filter, funnel, add, calendarNumberOutline, timeOutline, fishOutline }
  },
  data() {
    var titles:string[] = [];
    return {
      titles
    };
  },
  methods: {
    async openModal() {
      const modal = await modalController.create({
        component: RegisterPond,
      });
      modal.present();
      
      const { data, role } = await modal.onWillDismiss();
      
      if (role === 'confirm') {
        this.titles.push(data);
      }
    },
  },
});
</script>

<style scoped>
</style>

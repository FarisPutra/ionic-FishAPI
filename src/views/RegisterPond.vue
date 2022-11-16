<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="medium" @click="cancel">
          <ion-icon :icon="chevronBack"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Registrasi Kolam</ion-title>
      <!-- <ion-buttons slot="end">
        <ion-button @click="confirm">Registrasi</ion-button>
      </ion-buttons> -->
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-label position="stacked">Nama Kolam</ion-label>
      <ion-input name="pondName" v-model="pond_information.pond_name" placeholder="Kolam A"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Lokasi Kolam</ion-label>
      <ion-input placeholder="Blok A" v-model="pond_information.pond_location"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Material Kolam</ion-label>
      <ion-select v-model="pond_information.pond_material" interface="popover" placeholder="Pilih Material">
        <IonSelectOption v-for="material in pond_materials" :value="material.text">
          {{ material.text }}
        </IonSelectOption>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Bentuk Kolam</ion-label>
      <ion-select v-model="pond_information.pond_shape" interface="popover" placeholder="Pilih Bentuk">
        <IonSelectOption v-for="shape in pond_shapes" :value="shape.text">
          {{ shape.text }}
        </IonSelectOption>
      </ion-select>
    </ion-item>
    <ion-button expand="block" @click="confirm" color="color4">Registrasi</ion-button>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    modalController,
    IonSelect,
    IonSelectOption,
    IonIcon
  } from '@ionic/vue';
  import { chevronBack } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'RegisterPond',
    components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonIcon },
    setup() {
      return { chevronBack }
    },
    data() {
      return {
        pond_materials: [
          { text: 'Tanah', key: 1 },
          { text: 'Terpal', key: 2 },
          { text: 'Beton', key: 3 }
        ],
        pond_shapes: [
          { text: 'Persegi Panjang', key: 1},
          { text: 'Bundar', key: 2}
        ],
        
        pond_information: {
          pond_name: '',
          pond_location: '',
          pond_material: '',
          pond_shape: '',
        }
      }
    },
    methods: {
      cancel() {
        return modalController.dismiss(null, 'cancel');
      },
      confirm() {
        console.log(this.pond_information);
        return modalController.dismiss(this, 'confirm');
      },
      getList() {
      this.axios.get('/api/ponds').then((response) => {
        console.log(response.data)
      })
      // or
      this.$http.get('/api/ponds').then((response) => {
        console.log(response.data)
      })
      }
    },
  });
</script>
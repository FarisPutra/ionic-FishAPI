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
      <ion-input model-value="Alpha" placeholder="Kolam A"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Lokasi Kolam</ion-label>
      <ion-input placeholder="Blok A"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Material Kolam</ion-label>
      <ion-select interface="popover" placeholder="Pilih Material">
        <IonSelectOption value="tanah">Tanah</IonSelectOption>
        <IonSelectOption value="keramik">Keramik</IonSelectOption>
        <IonSelectOption value="polimer">Polimer</IonSelectOption>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Bentuk Kolam</ion-label>
      <ion-select interface="popover" placeholder="Pilih Bentuk">
        <IonSelectOption value="persegi_panjang">Persegi Panjang</IonSelectOption>
        <IonSelectOption value="bundar">Bundar</IonSelectOption>
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
    methods: {
      cancel() {
        return modalController.dismiss(null, 'cancel');
      },
      confirm() {
        return modalController.dismiss(this, 'confirm');
      },
    },
  });
</script>
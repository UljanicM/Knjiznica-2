<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6">Tablica rezervacija</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-table
          :rows="rezervacije"
          :columns="columns"
          row-key="naslov"
          flat
          bordered
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'RezervacijePage',
  setup() {
    const rezervacije = ref([]); // Reaktivna lista rezervacija
    const columns = [
      { name: 'naslov', label: 'Naslov', align: 'left', field: 'naslov' },
      { name: 'autor', label: 'Autor', align: 'left', field: 'autor' },
      { name: 'korisnik', label: 'Korisnik', align: 'left', field: 'korisnik' },
      { name: 'datum_rez', label: 'Datum rezervacije', align: 'left', field: 'datum_rez', format: val => new Date(val).toLocaleDateString() },
    ];

    onMounted(() => {
      axios.get('http://localhost:3000/api/rezervacija')
        .then(response => {
          console.log('Podaci uspješno dohvaćeni:', response.data); // Debugging
          rezervacije.value = response.data; // Dodavanje podataka u niz
        })
        .catch(error => {
          console.error('Greška pri dohvaćanju podataka:', error);
        });
    });

    return { rezervacije, columns };
  },
};
</script>

<style scoped>
.text-h6 {
  font-weight: bold;
}
</style>

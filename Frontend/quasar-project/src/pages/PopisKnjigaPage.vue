<template>

  <div class="popis-knjiga-page">
    <q-table
      :rows="books"
      :columns="columns"
      row-key="id"
      :pagination="pagination"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns = [
  {
    name: 'id',
    label: 'ID',
    align: 'left',
    field: row => row.id,
    sortable: true
  },
  {
    name: 'title',
    label: 'Naziv',
    align: 'left',
    field: row => row.title,
    sortable: true
  },
  {
    name: 'author',
    label: 'Autor',
    align: 'left',
    field: row => row.author,
    sortable: true
  },
  {
    name: 'year',
    label: 'Godina izdanja',
    align: 'left',
    field: row => row.year,
    sortable: true
  }
];

const books = ref([
  { "id": 1, "title": "The Great Adventure", "author": "John Doe", "year": 2022 },
  { "id": 2, "title": "The Secret Path", "author": "Jane Smith", "year": 2019 },
  { "id": 3, "title": "Whispers in the Dark", "author": "Emily Johnson", "year": 2018 },
  { "id": 4, "title": "Journey Through Time", "author": "Michael Brown", "year": 2021 }
]);

const pagination = ref({
  page: 1,
  rowsPerPage: 5
});
</script>

<style scoped>
.popis-knjiga-page {
  padding: 20px;
}
</style>
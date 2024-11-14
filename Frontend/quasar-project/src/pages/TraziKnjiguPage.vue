<template>
  <q-page padding>
    <!-- Pretraga -->
    <div class="q-mb-md">
      <q-input
        v-model="searchQuery"
        label="Unesite pojam za pretragu"
        filled
        class="q-mb-md"
        debounce="300"
      />

      <div class="q-mb-md">
        <q-checkbox
          v-model="searchByAuthor"
          label="Pretražuj po autoru"
        />
        <q-checkbox
          v-model="searchByTitle"
          label="Pretražuj po naslovu"
        />
      </div>

      <q-btn @click="performSearch" label="Traži" color="primary" />

      <!-- Tablica sa rezultatima -->
      <q-table
        :rows="filteredBooks"
        :columns="columns"
        row-key="id"
        class="q-mt-md"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td :props="props" prop="title" />
            <q-td :props="props" prop="author" />
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  name: "PretrazivanjePage",
  setup() {
    // Dummy podaci za testiranje
    const books = ref([
      { id: 1, title: 'Knjiga 1', author: 'Autor 1' },
      { id: 2, title: 'Knjiga 2', author: 'Autor 2' },
      { id: 3, title: 'Knjiga 3', author: 'Autor 3' },
      { id: 4, title: 'Knjiga 4', author: 'Autor 4' },
    ]);

    // Statička pretraga
    const searchQuery = ref("");
    const searchByAuthor = ref(false);
    const searchByTitle = ref(true);

    // Kolone tablice
    const columns = [
      { name: "title", label: "Naslov", required: true, align: "left", field: "title" },
      { name: "author", label: "Autor", required: true, align: "left", field: "author" }
    ];

    // Funkcija za obavljanje pretrage
    const performSearch = () => {
      console.log("Performing search with query:", searchQuery.value);
      filteredBooks.value = books.value.filter((book) => {
        const searchText = searchQuery.value.toLowerCase();
        let matches = false;

        // Ako je odabrano pretraživanje po naslovu
        if (searchByTitle.value && book.title.toLowerCase().includes(searchText)) {
          matches = true;
        }

        // Ako je odabrano pretraživanje po autoru
        if (searchByAuthor.value && book.author.toLowerCase().includes(searchText)) {
          matches = true;
        }

        return matches;
      });
      console.log("Filtered books:", filteredBooks.value);
    };

    // Reaktivno praćenje promjena unosa u pretragu
    const filteredBooks = ref(books.value);

    // Watch za praćenje promjena unosa i checkboxova
    watch([searchQuery, searchByAuthor, searchByTitle], () => {
      performSearch(); // Automatski pokreće pretragu kad god se promijene ovi podaci
    });

    return {
      searchQuery,
      searchByAuthor,
      searchByTitle,
      columns,
      filteredBooks,
      performSearch,
    };
  },
};
</script>

<style scoped>
/* Stilizacija inputa i tablice */
.q-table {
  min-height: 300px;
}

.q-checkbox {
  margin-right: 20px;
}
</style>
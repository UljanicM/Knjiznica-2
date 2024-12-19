const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Početna stranica
      { path: 'popisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') }, // Popis svih knjiga
      { path: 'popisKnjigaBaza', component: () => import('pages/PopisKnjigaBazaPage1.vue') }, // Popis svih knjiga
      { path: 'pretrazivanje', component: () => import('pages/TraziKnjiguPage.vue') }, // Pretraživanje
      { path: 'o_nama', component: () => import('pages/ONamaPage.vue') }, // O nama
      { path: 'lokacija', component: () => import('pages/LokacijaPage.vue') }, // Lokacija
      { path: 'login', component: () => import('pages/LoginPage.vue') }, // Login
      { path: 'registracija', component: () => import('pages/RegistracijaPage.vue') }, // Registracija
      { path: 'rezervacija', component: () => import('pages/RezervacijaPage.vue') } // Registracija
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Početna stranica
      { path: '/admin/popisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') }, // Popis svih knjiga
      { path: '/admin/pretrazivanje', component: () => import('pages/TraziKnjiguPage.vue') }, // Pretraživanje
      { path: '/admin/popisKorisnika', component: () => import('pages/PopisKorisnikaPage.vue') }, // Pretraživanje
      { path: '/admin/unosKnjiga', component: () => import('pages/UnosKnjigaPage.vue') }, // Login
      { path: '/logout', component: () => import('pages/LogoutPage.vue') }, // Registracija
    ]
  },
  {
    path: '/:catchAll(.)',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

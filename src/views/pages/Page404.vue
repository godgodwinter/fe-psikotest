<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="6">
          <div class="clearfix">
            <h1 class="float-start display-3 me-4">404</h1>
            <h4 class="pt-3">Oops! You're lost.</h4>
            <p class="text-medium-emphasis float-start">
              Halaman tidak ditemukan.
            </p>
          </div>

      <router-link :to="{name: 'Sekolah'}" class="btn btn-info btn-lg btn-round" >
   <i class="fas fa-backward fa-lg px-2"></i>
    &nbsp; Kembali
    <!-- <span class="badge bg-primary ms-auto">!</span> -->
    </router-link>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Page404',
}
</script>

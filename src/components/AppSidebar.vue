<template>


  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="
      (event) =>
        $store.commit({
          type: 'updateSidebarVisible',
          value: event,
        })
    "
  >
    <CSidebarBrand>
      <CIcon
        custom-class-name="sidebar-brand-full"
        :icon="logoNegative"
        :height="35"
      />
      <CIcon
        custom-class-name="sidebar-brand-narrow"
        :icon="sygnet"
        :height="35"
      />
    </CSidebarBrand>

    <!-- <AppSidebarNav /> -->
    <ul class="sidebar-nav">

    <li class="nav-item active">
      <router-link :to="{name: 'Dashboard'}" class="nav-link" >
    <i class="fas fa-school fa-lg px-2" ></i>
    &nbsp; Dashboard
    </router-link ></li>

    <li class="nav-title">
      Menu
    </li>

    <li class="nav-item">
      <router-link :to="{name: 'Sekolah'}" class="nav-link" >
    <i class="fas fa-school fa-lg px-2" ></i>
    &nbsp; Sekolah
    <span class="badge bg-primary ms-auto">NEW</span>
    </router-link></li>

    </ul>

    <CSidebarToggler
      class="d-none d-lg-flex"
      @click="$store.commit('toggleUnfoldable')"
    />
  </CSidebar>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from '@/assets/brand/logo-negative'
import { sygnet } from '@/assets/brand/sygnet'
export default {
  name: 'AppSidebar',
  components: {
    // AppSidebarNav,
  },
  setup() {
    const store = useStore()
    return {
      logoNegative,
      sygnet,
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },
}
</script>

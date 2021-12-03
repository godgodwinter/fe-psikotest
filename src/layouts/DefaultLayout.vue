<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
      <div class="body flex-grow-1 px-3">
        <CContainer xl>
          <router-view />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { getCurrentInstance } from 'vue';

import { CContainer } from '@coreui/vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppFooter,
    AppHeader,
    AppSidebar,
    CContainer,
  },

        setup() {
            const { proxy } = getCurrentInstance();

            //state token
            const token = localStorage.getItem('token')

            //inisialisasi vue router on Composition API
            const router = useRouter()

            //state user
            const user = ref('')

            //mounted properti
            onMounted(() =>{
              // console.log(proxy.baseUrl );
                //check Token exist
                if(!token) {
                    return router.push({
                        name: 'login'
                    })
                }
                validasitoken();

            })

          function validasitoken() {

                //validasitoken
                axios.defaults.headers.common.Authorization = `Bearer ${token}`
                axios.post(`${proxy.baseUrl}validasitoken`)
                .then(response => {

                    if(response.data.success) {


                       console.log('Validasi Token Success' );

                    }
                    // console.log('Tokentidak valid');


                })
                .catch(error => {
                    console.log(error.response.data)

                    return router.push({
                        name: 'login'
                    })
                })

            }



            return {
                token,      // <-- state token
                user,       // <-- state user
                validasitoken,       // <-- state user
            }


        }
}
</script>

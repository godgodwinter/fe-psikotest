<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                  <h1>Login</h1>
                  <p class="text-medium-emphasis">Masuk sebagai Yayasan</p>
                <!-- <div v-if="loginFailed" class="alert alert-danger">
                        Email atau Password Anda salah.
                    </div> -->
                <form @submit.prevent="login">
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username atau Email"
                      autocomplete="username" v-model="user.email"
                    />

                            <div v-if="validation.email" class="mt-2 alert alert-danger">
                                {{ validation.email[0] }}
                            </div>
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"  v-model="user.password"
                    />
                            <div v-if="validation.password" class="mt-2 alert alert-danger">
                                {{ validation.password[0] }}
                            </div>
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4"> Login </CButton>
                    </CCol>
                    <!-- <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                    </CCol> -->
                  </CRow>
                </form>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Nama Lembaga</h2>
                  <p>
                    Deskripsi dan Alamat .
                  </p>

  <button @click="showAlert">Hello world</button>
                  <!-- <CButton color="light" variant="outline" class="mt-3">
                    Register Now!
                  </CButton> -->
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { inject } from 'vue'
import { getCurrentInstance } from 'vue';

export default {
  name: 'LoginYayasan',
  methods: {
        showAlert() {
                    // Use sweetalert2
              this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              });
        },
    },

        setup() {
            const { proxy } = getCurrentInstance();

        const swal = inject('$swal')

            //inisialisasi vue router on Composition API
            const router = useRouter()

            //state user
            const user = reactive({
                email: '',
                password: '',
            })

            //state validation
            const validation = ref([])

            //state loginFailed
            const loginFailed = ref(null)

          // method swetalert2
          async function tampilAlert() {
                    swal({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Login Gagal!',
                  footer: 'Email atau Password Anda salah.',
                  showConfirmButton: false,
                  timer: 1500
                  // footer: '<a href="">Why do I have this issue?</a>'
                })
            }

            //method login
            function login() {

                //define variable
                let email = user.email
                let password = user.password

                //send server with axios
                axios.post(`${proxy.baseUrl}login`, {
                        email,
                        password,
                })
                .then(response => {

                    if(response.data.success) {

                        //set token
                        localStorage.setItem('token', response.data.token)

                        //redirect ke halaman dashboard
                        return router.push({
                            name: 'Sekolah'
                        })
                    }
                      tampilAlert();
                    //set state loggedIn to true
                    loginFailed.value = true
                    user.password=''


                }).catch(error => {
                    //set validation dari error response
                    validation.value = error.response.data
                })

            }

            return {
                user,           // <-- state user
                validation,     // <-- state validation
                loginFailed,    // <-- state loggedIn
                login           // <-- method login
            }

        }
}
</script>

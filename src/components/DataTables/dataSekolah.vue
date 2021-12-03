<template>
<div class="container py-4">

    <table id="myTable" class="table table-hover table-striped py-2 px-2" style="width:100%">
        <thead class="table-dark">
            <tr >
                <th>No</th>
                <th>Aksi</th>
                <th>Nama Sekolah</th>
                <th>Alamat</th>
                <th>Status</th>
                <th>Logo</th>
            </tr>
        </thead>
        <tbody>
           <template v-for="(data,index) in datas" :key="index">
              <tr >
                <td class="babeng-min-row text-center">{{index+1}}</td>
                <td class="babeng-min-row">
                  <button class="btn btn-sm btn-info">
                    <i class="fas fa-angle-double-right"></i>
                    </button>
                </td>
                <td>{{data.nama}}</td>
                <td>{{data.alamat}}</td>
                <td v-if="data.status!='Aktif'" class="text-center babeng-min-row">
                    <button class="btn btn-sm btn-warning btn-round">{{data.status}}</button>
                </td>
                <td v-else  class="text-center babeng-min-row">
                    <button class="btn btn-sm btn-success btn-round">{{data.status}}</button>
                </td>
                <td class="babeng-min-row">

<div class="avatar avatar-md"><img class="avatar-img" :src="avatar" alt="user@email.com"><span class="avatar-status bg-success"></span></div>

                </td>
            </tr>
        </template>
        </tbody>
    </table>
    </div>
</template>

<script>
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import avatar from '@/assets/images/avatars/8.jpg'

// import { onMounted } from 'vue'
// import { useRouter } from 'vue-router'
import axios from 'axios'
import { getCurrentInstance } from 'vue';

export default {
  name: 'dataSekolah',


  data(){
      return{
          datas:[],
          avatar:avatar,
      };
  },
  methods:{

getDatas(){
            const { proxy } = getCurrentInstance();
          const token = localStorage.getItem('token')

      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      axios.get(`${proxy.baseUrl}sekolah`)

      .then(res=>(this.datas=res.data.data))
      .catch(err=>console.log(err));

},
myDataTable(){
$(document).ready( function () {
      $('#myTable').DataTable({
          paging: true,
          info: false,
          searching: true,
          language: {
            oPaginate: {
              sNext: '<i class="fa fa-forward"></i>',
              sPrevious: '<i class="fa fa-backward"></i>',
              sFirst: '<i class="fa fa-step-backward"></i>',
              sLast: '<i class="fa fa-step-forward"></i>'
            }
          }
          })
          })
}
  },

// setTimeout(function() {
//   $("#myTable").DataTable();
//    }, 1000);
  mounted(){
    //   if (localStorage.getItem('keranjangUser')) {
    //       try{
    //           this.keranjangUser = JSON.parse(localStorage.getItem('keranjangUser'));
    //         }catch(e){
    //             localStorage.removeItem('keranjangUser');
    //         }
    // }

this.getDatas()

    // this.myDataTable()

setTimeout(function() {
  $("#myTable").DataTable({
          paging: true,
          info: false,
          searching: true,
          language: {
            oPaginate: {
              sNext: '<i class="fa fa-forward"></i>',
              sPrevious: '<i class="fa fa-backward"></i>',
              sFirst: '<i class="fa fa-step-backward"></i>',
              sLast: '<i class="fa fa-step-forward"></i>'
            }
          }
          });
   }, 1000);
// setTimeout(() => this.suppliers = fakeData(50), 1000);
  }

  // data() {
  //   return {
  //     getResult: null,
  //   }
  // },
  // methods: {
  //   async getDatas() {
  //     try {

  //         const token = localStorage.getItem('token')
  //       axios.defaults.headers.common.Authorization = `Bearer ${token}`
  //       const res = await axios.get('http://localhost:8000/api/sekolah')

  //       const result = {
  //         // status: res.status + "-" + res.statusText,
  //         // headers: res.headers,
  //         data: res.data,
  //       };

  //       // this.getResult = this.fortmatResponse(result);
  //       console.log('Berhasil');
  //     } catch (err) {
  //       console.log('Gagal');
  //       // this.getResult = this.fortmatResponse(err.response?.data) || err;
  //     }
  //   },

  // },

  //       setup() {
  // //           //state token
  //           // const token = localStorage.getItem('token')

  // //           //inisialisasi vue router on Composition API
  //           // const router = useRouter()

  // //           //state user
  // //           let datas = []

  // //   const getDatas = async () => {
  // //       axios.defaults.headers.common.Authorization = `Bearer ${token}`
  // //       let response = await axios.get('http://localhost:8000/api/sekolah')
  // //       datas.value = response.data.data
  // //       console.log(datas);
  // //   }


  //           //mounted properti
  //           onMounted(() =>{
  //          $('#myTable').DataTable({
  //               paging: true,
  //               info: false,
  //               searching: true,
  //               language: {
  //                 oPaginate: {
  //                   sNext: '<i class="fa fa-forward"></i>',
  //                   sPrevious: '<i class="fa fa-backward"></i>',
  //                   sFirst: '<i class="fa fa-step-backward"></i>',
  //                   sLast: '<i class="fa fa-step-forward"></i>'
  //                 }
  //               }
  //               })

  // //           getDatas()
  // //             //   //get data user
  // //             // ( async ()=> {
  // //             //   try {
  // //             //     axios.defaults.headers.common.Authorization = `Bearer ${token}`
  // //             //     const data = await axios.get('http://localhost:8000/api/sekolah')

  // //             //     this.datas = data.data;
  // //             //   } catch (e) {
  // //             //     console.log(e);
  // //             //   }
  // //             // })()

  // //               // axios.defaults.headers.common.Authorization = `Bearer ${token}`
  // //               //  axios.get('http://localhost:8000/api/sekolah')
  // //               // .then(response => {

  // //               //     //console.log(response.data.name)
  // //               //     datas =  response.data
  // //               //     console.log(datas);

  // //               // })
  // //               // .catch(error => {
  // //               //     console.log(error.response.data)
  // //               // })

  // //       // })
  //       })
  //         return {
  //               datas,       // <-- state user
  //               // ref,       // <-- state user
  //           }
  // }
}
</script>

<style scoped src="@/assets/css/babeng.css">
</style>
<style scoped >

.th{
  background-color: '#C0C0C0';
}
  /* .paginate_button.active .page-link {
        color: #ffffff;
        background: #23adad;
        font-weight: 600;
        border: 1px solid #23adad;
  }
  #myTable.span{
      background: #ffffff;
      box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
      border-radius: 0.6rem;
      padding: 2rem;
      font-size: 3rem;
      transition: all 0.3s ease;
    }

  #myTable_next{
      background: #ffffff;
  }
  #myTable_previous{
      background: #ffffff;
  } */

</style>

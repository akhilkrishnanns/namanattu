import Vue from "vue";
import VueRouter from "vue-router";

// import Mainapp from '@/components/MainApp';
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';



// const childPaths = [
//     ];

    Vue.use(VueRouter);


  //   const router = new VueRouter({
        
  // base: "localhost:8080",
        
  //   })

    export default new VueRouter({
      mode: "history",
      routes:[
        {
          path: "/",
          name: "Home",
          component: Home,
          props: false,
          meta: {
            title: "Namanattu Kudumba Kshethram",
            description:
              "Namanattu Kudumbam (Namanattu family) is a very ancient family. It is situated near to A.K.G. Junction, Parayakadu, Kuthiathod Village, Cherthala Taluk, Alappuzha District, in the State of Kerala. ",
            keywords:
              "Namanattu Kudumba Kshethram, Naalukulangara, Nalukulangara, Thuravoor, Namanattu, Namanatu, Kudumba Kshethram, Kaavu, Serpent pond, Small Forest",
            pageName: "home-page"
          }
        },
        {
          path: "/about",
          name: "About",
          component: About,
          props: false,
          meta: {
            title: "Namanattu Kudumba Kshethram",
            description:
              "Namanattu Kudumbam (Namanattu family) is a very ancient family. It is situated near to A.K.G. Junction, Parayakadu, Kuthiathod Village, Cherthala Taluk, Alappuzha District, in the State of Kerala. ",
            keywords:
              "Namanattu Kudumba Kshethram, Naalukulangara, Nalukulangara, Thuravoor, Namanattu, Namanatu, Kudumba Kshethram, Kaavu, Serpent pond, Small Forest",
            pageName: "about"
          }
        }
    ]
    })
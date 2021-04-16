import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';

import ChooseMediaType from './components/TheMediaTypeComponent.js';
import MovieComponent from './components/TheMovieComponent.js';
import MusicComponent from "./components/TheMusicComponent.js";
import TVshowComponent from "./components/TheTVshowComponent.js";




const router = new VueRouter({
    routes: [
        { path: '/', name: 'root', component: LoginComponent, beforeEnter: (to, from, next) => {
            // if you're authenticated (set in localstorage), then go to the home page
            if (localStorage.getItem('cacheduser')) {
                let user = JSON.parse(localStorage.getItem('cacheduser'));
                next({name: 'home', params: {currentuser: user}});
            } else {
                next();
            }
        }},
        { path: '/users', name: 'users', component: AllUsers },
        { path: '/media', name: 'media', component: ChooseMediaType, props: true },
        { path: '/movies', name: 'movies', component: MovieComponent,props: true },
        { path: '/musics', name: 'musics', component: MusicComponent,props: true },
        { path: '/tvshows', name: 'tvshows', component: TVshowComponent,props: true },
   

    ]
});

(() => {
    const vm = new Vue({
        data: {
            authenticated: false,
            isAdmin: false,
            currentUser: undefined,


        },

        created: function() {
            // use this if you want
        },

        methods: {
            logout() {
                // push user back to login page
                // this.$router.push({ name: "login" });
                // this.authenticated = false;

                //remove the cached user from localstorage, if it exists
                if (localStorage.getItem('cacheduser')) {
                    localStorage.removeItem('cacheduser');

                    if (localStorage.getItem("cachedVideo"))
                    localStorage.removeItem("cachedVideo");
                }

                this.$router.push({ name: "root" });
                this.currentUser = undefined;
            },

            authenticateuser(user) {
                // debugger;
                this.currentUser = user;
            },

           

            

        },

        router
    }).$mount("#app");
})();
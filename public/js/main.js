import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/TheAllUsersComponent.js';
import HomeComponent from './components/TheHomeComponent.js';
import AudioComponent from "./components/TheAudioComponent.js";
import VideoComponent from "./components/TheVideoComponent.js";


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
        { path: '/home', name: 'home', component: HomeComponent,props: true }
    ]
});

(() => {
    const vm = new Vue({
        data: {
            authenticated: false,
            isAdmin: false,
            currentUser: undefined,
            activeComponent: VideoComponent

        },

        created: function() {
            // use this if you want
        },

        methods: {
            logout() {
                // push user back to login page
                this.$router.push({ name: "login" });
                this.authenticated = false;

                //remove the cached user from localstorage, if it exists
                if (localStorage.getItem('cacheduser')) {
                    localStorage.removeItem('cacheduser');

                    if (localStorage.getItem("cachedVideo"))
                    localStorage.removeItem("cachedVideo");
                }

                // this.$router.push({ name: "root" });
                // this.currentUser = undefined;
            },

            authenticateuser(user) {
                // debugger;
                this.currentUser = user;
            },

            switchComponents() {
                this.activeComponent = (this.activeComponent.name === "VideoComponent")? AudioComponent : VideoComponent;
            }

        },

        router
    }).$mount("#app");
})();
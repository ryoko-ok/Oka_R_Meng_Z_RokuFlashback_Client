export default {
    name: "MovieComponent",

    props: ['currentuser'],

    template: `
    <div class="container">
    <component :is="this.activeComponent"></component>
    <div class="media-switch">
            <div class="tv" @click="seetvshow">
                <i class="fas fa-tv"></i>
                <discrive>TV</discrive>
            </div>
            
            <div class="music" @click="seemusic">
                <i class="fas fa-music"></i>
                <discrive>MUSIC</discrive>

            </div>
         </div>
       
        <div class="movie-card" >
            
                <video id="video" ref="myMedia" autoplay controls :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>          

            <div class="media-detail-info">
                <h4 class="media-title">{{currentMediaDetails.movies_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
                <span class="media-time">{{currentMediaDetails.movies_runtime}}</span>
                <span class="media-year">Released in {{currentMediaDetails.movies_year}}</span>
                <span class="media-genre">Genre : {{currentMediaDetails.movies_genre}}</span>
            </div>
           
        </div>
                <h4>{{message}}</h4>
                <div class="clearfix">
                    <img v-for="media in retrievedMedia" :src="'images/video/' + media.movies_cover" alt="media thumb" class="img-thumbnail rounded float-left media-thumb" @click="switchCurrentMedia(media)">
                </div>
    </div>
    `,

    data() {
        return {
            // push first (or random) media object here (selected / filtered on create)
            // message:"What elses we have:",
            currentMediaDetails: {},
            retrievedMedia: [],

            isPlaying:false,
            isFullscreen : false,

          
        }
    },

    created: function() {
    
        this.loadMedia(null,'movies');
        this.$emit('setuser', this.currentuser);
    },

    methods: {
        
        

        loadMedia(filter,mediaType) {
        // fetch data here
            let url = (filter == null) ? `/api/${mediaType}` : `/api/${mediaType}/${filter}`;

            fetch(url)
               .then(res => res.json())
               .then(data => {
                   this.retrievedMedia =data;

                   //pcik a random media object from the array
                   this.currentMediaDetails = data[Math.floor(Math.random() * data.length)];

               })
               .catch((err) =>console.error(err));
        },

        seetvshow(){
            this.$router.push({ name: "tvshows"});
        },
    
    
        seemusic(){
            this.$router.push({ name: "musics"});
        }

  
    }
}
export default {
    name: "TVshowComponent",

    props: ['currentuser'],

    template: `
    <div class="container">
    <component :is="this.activeComponent"></component>

        <div class="media-switch">
            <div class=" " @click="seemovie">
            <i class="fas fa-film" ></i>
            </div>
            
            <div class=" " @click="seemusic">
            <i class="fas fa-music"></i>
            </div>
         </div>

        <div >
                <video ref="myMedia" autoplay controls  :src="'video/' + currentMediaDetails.tvs_trailer" class="fs-video"></video>
                
            </div>

            <div class="media-detail-info">
                <h4 class="media-title">{{currentMediaDetails.tvs_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.tvs_storyline"></p>
                <span class="media-time">{{currentMediaDetails.tvs_runtime}}</span>
                <span class="media-year">Released in {{currentMediaDetails.tvs_year}}</span>
                <span class="media-genre">For {{currentMediaDetails.tvs_category}}</span>

            </div>

       

            <h4>{{message}}</h4>
                <div class="clearfix">
                    <img v-for="media in retrievedMedia" :src="'images/tv/' + media.tvs_cover" alt="media thumb" class="img-thumbnail rounded float-left media-thumb" @click="switchCurrentMedia(media)">
                </div>
                 
        </div> <!-- end 2-up for media info -->
    </div>
    `,

    data() {
        return {
            message:"What elses we have:",
            currentMediaDetails: {},

            retrievedMedia: [],
        }
    },

    created: function() {

        this.loadMedia(null,'tvs');
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

     
    
        seemovie() {
            this.$router.push({ name: "movies"});
            
        },
        seemusic(){
            this.$router.push({ name: "musics"});
        }

    }
}


export default {
    name: "MusicComponent",

    props: ['currentuser'],

    template: `
    <div class="container">
    <component :is="this.activeComponent"></component>

            <div class="music_card">
             <img :src="'images/music/' + currentMediaDetails.musics_cover" alt="media thumb"  class="rotate">
             <audio ref="myMedia" autoplay controls :src="'audio/' + currentMediaDetails.musics_audio" class="fs-audio"></audio >
            </div>
        
            <div class="media-detail-info">
                <h4 class="media-title">{{currentMediaDetails.musics_title}}</h4>
                <span class="media-singer">Released in {{currentMediaDetails.musics_singer}}</span>
                <span class="media-year">Released in {{currentMediaDetails.musics_year}}</span>
                <span class="media-genre">Genre : {{currentMediaDetails.musics_genre}}</span>

            </div>
             <h4>{{message}}</h4>
                <div class="clearfix">
                    <img v-for="media in retrievedMedia" :src="'images/music/' + media.musics_cover" alt="media thumb" class="img-thumbnail rounded float-left media-thumb" @click="switchCurrentMedia(media)">
                </div>
        
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

        this.loadMedia(null,'musics');
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

        switchCurrentMedia(media){
            this.currentMediaDetails = media;
        }

    }
}
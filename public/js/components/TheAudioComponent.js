export default {
    name: "TheAudioComponent",

    template: `
    <section>
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.musics_title}}</h4>
                <span class="media-singer">{{currentMediaDetails.musics_singer}}</span>
                <span class="media-year">{{currentMediaDetails.musics_year}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'images/music/' + currentMediaDetails.musics_audio" class="fs-audio"></video>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-sm-9">
                <div class="thumb-wrapper clearfix">
                    <img v-for="item in allRetrievedAudio" :src="'images/music/' + item.musics_cover" alt="media thumb" @click="loadNewMusic(item)" class="img-thumbnail rounded float-left media-thumb">
                </div>
            </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedAudios: []
        }
    },

    created: function() {
        this.retrieveAudioContent();
    },

    methods: {
        retrieveAudioContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            if (localStorage.getItem("cachedAudio")) {
                this.allRetrievedAudios = JSON.parse(localStrage.getItem("cachedAudio"));

                this.currentMediaDetails = this.allRetrievedAudios[0];
            } else {
                let url = `./admin/index.php?media=musics`;

                fetch(url) 
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("cachedAudio", JSON.stringify(data));

                        this.allRetrievedAudios = data;
                        this.currentMediaDetails = data[0];
                    })
            }
        },
        
        loadNewMusic(music) {
            this.currentMediaDetails = music;
        }
    }
}
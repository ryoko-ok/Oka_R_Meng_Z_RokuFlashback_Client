export default {
    name: "TheTVComponent",

    template: `
    <section>
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{currentMediaDetails.tvs_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.tvs_storyline"></p>
                <span class="media-year">{{currentMediaDetails.tvs_year}}</span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'images/tv/' + currentMediaDetails.tvs_trailer" class="fs-video"></video>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-sm-9">
                <div class="thumb-wrapper clearfix">
                    <img v-for="item in allRetrievedVideos" :src="'images/tv/' + item.tvs_cover" alt="media thumb" @click="loadNewTv(item)" class="img-thumbnail rounded float-left media-thumb">
                </div>
            </div>
        </div>
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedVideos: []
        }
    },

    created: function() {
        this.retrieveVideoContent();
    },

    methods: {
        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            if (localStorage.getItem("cachedVideo")) {
                this.allRetrievedVideos = JSON.parse(localStrage.getItem("cachedVideo"));

                this.currentMediaDetails = this.allRetrievedVideos[0];
            } else {
                let url = `./admin/index.php?media=tvs`;

                fetch(url) 
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("cachedVideo", JSON.stringify(data));

                        this.allRetrievedVideos = data;
                        this.currentMediaDetails = data[0];
                    })
            }
        },
        
        loadNewTv(tv) {
            this.currentMediaDetails = tv;
        }
    }
}
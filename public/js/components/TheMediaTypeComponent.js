export default {
    name: "theMediaChoose",

    props: ['liveuser','currentuser'],
    

	template: `
     
        
        <section class="all_media">
        <h2 >Please select the media type you like</h2>
          <div class="media-button">
            <div class="tv" @click="seetvshow">
                <i class="fas fa-tv"></i>
                <p>TV</p>
            </div>

            <div class="film" @click="seemovie">
                <i class="fas fa-film fa-fw" ></i>
                <p>MOVIE</p>

            </div>
            
            <div class="music" @click="seemusic">
                <i class="fas fa-music fa-fw"></i>
                <p>MUSIC</p>

            </div>
         </div>
        </section>
	`,


    created: function() {

        this.$emit('setuser', this.currentuser);
    
    },

   methods: {
    seetvshow(){
        this.$router.push({ name: "tvshows"});
    },

    seemovie() {
        this.$router.push({ name: "movies"});
        
    },
    seemusic(){
        this.$router.push({ name: "musics"});
    }
}
}
export default {
    name: "theMediaChoose",

    props: ['liveuser','currentuser'],
    

	template: `
        <section class="all_media">

            <div class=" " @click="seetvshow">
                <i class="fas fa-tv"></i>
            </div>

            <div class=" " @click="seemovie">
            <i class="fas fa-film" ></i>
            
            </div>
            
            <div class=" " @click="seemusic">
            <i class="fas fa-music"></i>
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
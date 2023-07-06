const app = {
    data() {
      return {
        cube_pos: false,
        cube_vertical: -6,
        init_scroll: 0,
      }
    },
    mounted(){
        window.addEventListener('mousewheel', this.handleScroll);
        window.addEventListener('mousemove', this.handleMove);
    },
    methods:{
        rotate: function(up, amount){
            if (up){
                this.cube_vertical += amount
                this.cube_vertical = this.cube_vertical % 360
                
            }else{
                this.cube_vertical -= amount
                this.cube_vertical = this.cube_vertical % -360
            }
        },

        handleScroll: function(event) {
            if (this.init_scroll === 0){this.init_scroll = event.pageY}

            this.isUserScrolling = (window.scrollY > 0);
            if (event.pageY > this.init_scroll){this.rotate(true, 1)}
            if (event.pageY < this.init_scroll){this.rotate(false, 1)}
        },
        handleMove: function(event) {
            this.init_scroll = 0
        },
        reset_rotation: function(){
            this.cube_vertical = -25
        }
    }
  }
  
  Vue.createApp(app).mount('#app')
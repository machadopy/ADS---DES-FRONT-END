class Mobilenavbar {
    constructor(menuresp, navlist, navlinks) {
        this.menuresp = document.querySelector(menuresp);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeclass = 'active';

        this.handleclick = this.handleclick.bind(this);
    }

    animatedlinks(){
    this.navlinks.forEach((link,index) => {
        link.style.animation
            ?(link.style.animation ="")
            :(link.style.animation =`navlinkfade 0.5s ease fowards ${index/7 + 0.3}s`);
    });
    
    }


    handleclick() {
        this.navlist.classList.toggle(this.activeclass);
        this.animatedlinks();
    }



    addclickevent() {
        this.menuresp.addEventListener("click", this.handleclick);
    }

    init() {
        if (this.menuresp) {
            this.addclickevent();
        }
        return this;
    }
}

const mobilenavbar = new Mobilenavbar(
    '.menuresp',
    '.navlist',
    '.navlist li',
);
mobilenavbar.init();
// darkmode
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',() => {
    document.body.classList.toggle('dark');
    document.getElementById("home").classList.toggle('dark')
    document.getElementById("check").checked = true;
    if(checkbox.checked==false){
        document.getElementById("check").checked = false;
    }
});

const check = document.getElementById('check');
check.addEventListener('change',() => {
    document.body.classList.toggle('dark');
    document.getElementById("home").classList.toggle('dark')
    document.getElementById("checkbox").checked = true;
    if(check.checked==false){
        document.getElementById("checkbox").checked = false;
    }
});


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Programmer", "Designer", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // stats
    var statSection = $("#stats"),
        stats = $(".stat-number");

    statSection.waypoint({

        handler: function(direction) {

            stats.each(function() {
                var $this = $(this);

                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 6000,
                    easing: 'swing',
                    step: function(curValue) {
                        $this.text(Math.ceil(curValue));
                    }
                });
            });
            
            this.destroy();

        },

        offset: "90%"

    });
    
    
});

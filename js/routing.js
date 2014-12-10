(function($) {
    var app = $.sammy(function(){

        this.get('#/', function(){
            $.ajax({
                url: 'content/overview.html',
                cache: false,
                success: function(msg){
                    $("#content").html(msg);
                }
            })
        })

        this.get('#aboutme', function(){
            $.ajax({
                url: 'content/aboutme.html',
                cache: false,
                success: function(msg){
                    $("#content").html(msg);
                }
            })
        })

        this.get('#skills', function(){
            $.ajax({
                url: 'content/skills.html',
                cache: false,
                success: function(msg){
                    $("#content").html(msg);
                }
            })
        })

        this.get('#contact', function(){
            $.ajax({
                url: 'content/contact.html',
                cache: false,
                success: function(msg){
                    $("#content").html(msg);
                }
            })
        })
    });


    $(function() {
        app.run('#/');
    });
})(jQuery);
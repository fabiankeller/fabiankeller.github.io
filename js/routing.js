(function($) {
    var app = $.sammy('#main', function(){

        this.get('#/', function(){
            console.log("/#");
            $.ajax({
                url: 'content/overview.html',
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
        /*I needed to change the description to be visible on the click of the card and to be hidden when the previous status was visible */
    
        var templateHTML="<div class=\"gallery-container board-gallery\">"+
            "<div class=\"gallery-item\"> "+
            "<div class=\"text-area\"><h3>Person @insertRandomData</h3><p>Aliquam sed vulputate ipsum, auctor lobortis quam. Maecenas pulvinar eleifend neque eget tempus. Nullam viverra ipsum eu mattis hendrerit. </p>"+
            "<a class=\"read-bio\"><span>Read Bio</span></a></div>"+
            "<div class=\"image\"><img src=\"https://raw.githubusercontent.com/MarchesaLore/NoLayoutShiftCards/master/img/avatar-placeholder.jpeg\" alt=\"image of Name 2\"></div>"+
            "</div>"+
            "<div class=\"description\" style=\"display: none;\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum urna sit amet nibh sagittis, in consequat urna dictum.  </p></div>"+
            "</div>"
 
$( document ).ready(function() {
    console.log( "ready!" );
	var resultHTML ="";
    for (let i = 1; i < 15; i++) {
        resultHTML += templateHTML;
        resultHTML = resultHTML.replace("@insertRandomData", i);
    }
    $("#containerGeneratedHTML").html(resultHTML);
    jQuery(".gallery-item").on('click', function (event) {
        var panel = this.nextElementSibling;
        var rememberStatus = (panel.style.display === "block");
        $('.description').each(function (i, obj) {
            this.style.display = "none";
        });
        
        if (rememberStatus) {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        event.stopImmediatePropagation();
    });
});

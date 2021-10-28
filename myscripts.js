/*I needed to change the description to be visible on the click of the card and to be hidden when the previous status was visible */
jQuery(".gallery-item").on('click', function (event) {
    console.log('1');
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
console.log('1');
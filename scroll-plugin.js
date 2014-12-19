jQuery('a[href^="#"]').on('click', function(event){
    event.preventDefault(); //Prevent default link 
    var $linkTarget = jQuery(this).attr('href'); //Get the href of the anchor attribute
    var $jqueryLinkTargetObject = jQuery($linkTarget); //Cache it as a jQuery select
    $jqueryLinkTargetObject.velocity("scroll", {duration: 1000, easing: "easeInOutCirc"}); //Scroll to link
});
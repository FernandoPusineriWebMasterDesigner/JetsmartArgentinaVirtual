document.addEventListener("DOMContentLoaded", function() {
    var windowWidth = window.innerWidth;

    
    if (windowWidth >= 375 && windowWidth <= 1366) {
        var images = document.querySelectorAll("#a320 img");
        for (var i = 3; i < images.length; i++) { 
            images[i].style.display = "none";
        }
    }
});

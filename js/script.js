/*navgation open*/
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/*navgation closed*/
/*contact form start*/
// Get the modal
var modal1 = document.getElementById('id01');
var blocker1 = document.getElementById('blocker1');

// When the user clicks anywhere outside of the modal, close it
blocker1.onclick = function () {
        modal1.style.display = "none";
} 
/*contact form end*/
/* join start*/
var modal2 = document.getElementById('id02');
var blocker2 = document.getElementById('blocker2');

// When the user clicks anywhere outside of the modal, close it
blocker2.onclick = function () {
        modal2.style.display = "none";
}
/* join end*/
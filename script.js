
function menuBT() {
    let navBar = document.getElementById('nav-Bar');
    navBar.style.right = '0px';
    document.getElementById('MenuImg').style.opacity = "0";
    document.getElementById('MenuImg').disabled = true;

}
function closeBT() {
    let navBar = document.getElementById('nav-Bar');
    navBar.style.right = '-150px';
    document.getElementById('MenuImg').style.opacity = "1";
    document.getElementById('MenuImg').disabled = false;
}
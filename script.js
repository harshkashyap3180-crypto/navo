let menuSection = document.getElementById("menu-section");
let openMenu = document.getElementById("open-menu");


let check = false;
openMenu.onclick = () => {
  if(check == false){
    check = true;
    menuSection.style.transform = "translateY(0px)";
  }
  else if(check == true){
    check = false;
    menuSection.style.transform = "translateY(-400px)";
  }
}

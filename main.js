var family_member = ["My Dad!", "My Mom!", "Me!", "My Grandpa!", "My Grandmom!"];
var album = ["Dad.png", "Mom.png", "Me.png", "GrandPa.png", "GrandMom.png"];

var i = 0;
function next(){
    i = i + 1

    if (i == 5){
        i = 0;
    }

    document.getElementById("img1").src=album[i];
    document.getElementById("family_member").innerHTML=family_member[i];
}

function previous(){
    i = i - 1

    if (i == -1){
        i = 4;
    }

    document.getElementById("img1").src=album[i];
    document.getElementById("family_member").innerHTML=family_member[i];
}

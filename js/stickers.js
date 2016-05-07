var stickers = [
    {
        name: "lara",
        path: "assets/stickers/lara.png"
    },
    {
        name: "tree",
        path: "assets/stickers/tree.png"
    },
    {
        name: "gogo",
        path: "assets/stickers/gogo.png"
    },
    {
        name: "panda",
        path: "assets/stickers/panda.png"
    },
    {
        name: "sad",
        path: "assets/stickers/sad.png"
    },
    {
        name: "heisenberg",
        path: "assets/stickers/heisenberg.png"
    },
    {
        name: "android",
        path: "assets/stickers/android.png"
    }
];

var stickersInLibrary = ["gogo"];
//TODO get and save stickers using cookies.
var stickersContainer = document.getElementById("stickersContainer");

for(var i = 0; i < stickers.length; i++) {
    var stickerName = stickers[i].name;

    var divElement = document.createElement("div");
    divElement.className = "col-md-4 col-sm-6";
    stickersContainer.appendChild(divElement);

    var thumbnailElement = document.createElement("div");
    thumbnailElement.className = "thumbnail";
    divElement.appendChild(thumbnailElement);

    var imgElement = document.createElement("img");
    imgElement.src = stickers[i].path;
    thumbnailElement.appendChild(imgElement);

    var divCaptionElement = document.createElement("div");
    divCaptionElement.className = "caption";
    thumbnailElement.appendChild(divCaptionElement);

    var nameElement = document.createElement("h3");
    nameElement.innerText = stickerName;
    divCaptionElement.appendChild(nameElement);

    var stickerAdded = isStickerAdded(stickerName);

    var addStickerButton = document.createElement("button");
    addStickerButton.type = "button";
    addStickerButton.className = "btn btn-primary";
    addStickerButton.innerText = stickerAdded ? "-" : "+";
    divCaptionElement.appendChild(addStickerButton);
    addStickerButton.stickerName = stickerName;
    addStickerButton.stickerAdded = stickerAdded;
    addStickerButton.addEventListener("click", onAddBtnClick);
}

function onAddBtnClick() {
    if(this.stickerAdded) {
        stickersInLibrary.splice(stickersInLibrary.indexOf(this.stickerName), 1);
        this.innerText = "+";
    } else {
        stickersInLibrary.push(this.stickerName);
        this.innerText = "-";
    }
    this.stickerAdded = ! this.stickerAdded;
}

function isStickerAdded(name) {
    for(var i = 0; i < stickersInLibrary.length; i++) {
        if(stickersInLibrary[i] == name) {
            return true;
        }
    }
    return false;
}
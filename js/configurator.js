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

var configurator = new Phaser.Game(800, 600, Phaser.AUTO, 'configuratorContainer', {
    preload: preload,
    create: create
});

function preload() {
    configurator.load.image("cover", "assets/mac-cover.png");
    for(var i=0;i < stickers.length; i++) {
        configurator.load.image(stickers[i].name, stickers[i].path);
    }
}

function create() {
    var cover = configurator.add.sprite(0,0, "cover");
    cover.scale.setTo(configurator.world.width / cover.width);
}

// TODO use cookies to add/remove stickers that will be in the list.

var stickersList = document.getElementById("stickersList");
for (var i = 0; i < stickers.length; i++) {
    var liElement = document.createElement("li");
    liElement.className = "list-group-item";
    liElement.innerHTML = '<img src="'+ stickers[i].path +'">' + stickers[i].name;
    liElement.stickerName = stickers[i].name;
    liElement.addEventListener("click", onListCallback);
    stickersList.appendChild(liElement);
}

function onListCallback() {
    var sticker = configurator.add.sprite(configurator.world.centerX, configurator.world.centerY, this.stickerName);
    sticker.scale.setTo(0.5);
    sticker.anchor.setTo(0.5);
    sticker.inputEnabled = true;
    sticker.input.enableDrag(false);
}
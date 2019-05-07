var previewWindow = document.getElementById("workItemPreviewWindow");

// Add event listeners on item that has class 'my-works__item"
function workItemsLooper() {
    var myWorksItemList = document.getElementsByClassName("my-works__item");
    var itemsArrLength = myWorksItemList.length;

    for (var i = 0; i < itemsArrLength; i++) {
        myWorksItemList[i].addEventListener("click", workItemToggleVisibility, false);
    }
}

// Call event listeners' func
workItemsLooper();

// Close item preview when click on (X) button
document.getElementById("closeItemPreview").addEventListener("click", workItemToggleVisibility, false);

// Toggle visibility of an item
function workItemToggleVisibility() {

    previewWindow.classList.toggle("invisible");
}

previewWindow.addEventListener("click", function(event){
    if (event.target.contains(previewWindow)) {previewWindow.classList.toggle("invisible");}
    else {
        return;
    }
});

/*
function previewSrcSwitcher() {
    var myWorksItem= document.getElementById("itemPreviewImage");
    var imgRoot = "/assets/img/";

    myWorksItem.src=imgRoot + "showcase-kroduct.png";
    console.log(myWorksItemList[0]);
}

*/
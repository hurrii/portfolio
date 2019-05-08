var previewWindow = document.getElementById("workItemPreviewWindow");

// Add event listeners on item that has class 'my-works__item"
function workItemsLooper() {
    var myWorksItemList = document.getElementsByClassName("my-works__item");
    var itemsArrLength = myWorksItemList.length - 1; // Shorten the array to make sure placeholder items don't display preview
    var myWorksItem = document.getElementById("itemPreviewImage");
    var rootArray = ["emtsosk.jpg", "showcase-kroduct.png", "showcase-example.png"];
    var itemPreviewDescription = document.getElementById("itemPreviewDescription");
    var itemPreviewNewText = "";

    for (var i = 0; i < itemsArrLength; i++) {

        myWorksItemList[i].addEventListener("click", workItemToggleVisibility, false);
        
    }

    myWorksItemList[0].onclick = function() {
        myWorksItem.src = "assets/img/" + rootArray[0];
        itemPreviewNewText = "Сайт для АНО \"ЭМЦОСК\"";
        itemPreviewDescription.innerText = itemPreviewNewText;
    }
    myWorksItemList[1].onclick = function() {
        myWorksItem.src = "assets/img/" + rootArray[1];
        itemPreviewNewText = "Kroduct";
        itemPreviewDescription.innerText = itemPreviewNewText;
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

// Close preview on click outside the window
previewWindow.addEventListener("click", function(event){
    if (event.target.contains(previewWindow)) {previewWindow.classList.toggle("invisible");}
    else {
        return;
    }
});
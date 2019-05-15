var previewWindow = document.getElementById("workItemPreviewWindow");


function workItemsLooper() {
    var myWorksItemList = document.getElementsByClassName("my-works__item");
    var itemsArrLength = myWorksItemList.length - 1; // Shorten the array to make sure placeholder items don't display preview
    var myWorksItem = document.getElementById("itemPreviewImage");
    var rootArray = ["emtsosk.jpg", "kroduct.jpg", "showcase-example.png"];
    var itemPreviewDescription = document.getElementById("itemPreviewDescription");

    // Generate preview window content
    function previewGenerator(previewArrIndex, previewTextInsert, previewLinkInsert) {
        myWorksItem.src = "assets/img/" + rootArray[previewArrIndex];
        itemPreviewDescription.innerText = previewTextInsert;
        document.getElementById("itemPreviewLink").href = previewLinkInsert;
    }

    // Event listeners with content
    myWorksItemList[0].addEventListener("click", function()
    {
        previewGenerator(0, "Сайт для АНО \"ЭМЦОСК\"", "http://atomcert.org/");
    },
    false);

    myWorksItemList[1].addEventListener("click", function()
    {
        previewGenerator(1, "Kroduct", "https://hurrii.github.io/kroduct/app/index.html");
    },
    false);

    // Add event listeners on portfolio works to toggle visibility on click
    for (var i = 0; i < itemsArrLength; i++) {

        myWorksItemList[i].addEventListener("click", workItemToggleVisibility, false);
        
    }
}

console.log(window.itemPreviewDescription);

// Call event listeners' func
workItemsLooper();

// Close item preview when click on (X) button
document.getElementById("closeItemPreview").addEventListener("click", workItemToggleVisibility, false);

// Toggle visibility of an item
function workItemToggleVisibility() {
    setTimeout(function(){
        previewWindow.classList.toggle("invisible");
    }, 100);
}

// Close preview on click outside the window
previewWindow.addEventListener("click", function(event){
    if (event.target.contains(previewWindow))
    {
        previewWindow.classList.toggle("invisible");
    }
    else {
        return;
    }
});
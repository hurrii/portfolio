var myWorksItemList = document.getElementsByClassName("my-works__item");
var myWowksItem = document.getElementById("myWorksItem")

console.log(myWorksItemList[0]);

myWorksItem.onclick = function showItemPreview() {
    console.log('It worked');
}
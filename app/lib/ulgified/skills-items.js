var previewWindow=document.getElementById("workItemPreviewWindow");function workItemsLooper(){var e=document.getElementsByClassName("my-works__item"),t=e.length-1,n=document.getElementById("itemPreviewImage"),o=["emtsosk.jpg","kroduct.jpg","showcase-example.png"],r=document.getElementById("itemPreviewDescription");function i(e,t,i){n.src="assets/img/"+o[e],r.innerText=t,document.getElementById("itemPreviewLink").href=i}e[0].addEventListener("click",function(){i(0,'Сайт для АНО "ЭМЦОСК"',"http://atomcert.org/"),console.log("Emtsosk event listener has been added.")},!1),e[1].addEventListener("click",function(){i(1,"Kroduct","https://hurrii.github.io/kroduct/app/index.html")},!1);for(var s=0;s<t;s++)e[s].addEventListener("click",workItemToggleVisibility,!1)}function workItemToggleVisibility(){setTimeout(function(){previewWindow.classList.toggle("invisible")},100),document.getElementById("previewContent").style.animation="slide-rotate-ver-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both"}workItemsLooper(),document.getElementById("closeItemPreview").addEventListener("click",function(){document.getElementById("previewContent").style.animation="",previewWindow.classList.toggle("invisible")},!1),previewWindow.addEventListener("click",function(e){e.target.contains(previewWindow)&&(document.getElementById("previewContent").style.animation="",previewWindow.classList.toggle("invisible"))});
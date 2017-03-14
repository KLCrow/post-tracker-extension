// Add bubble to the top of the page.
var postTrackSelection;
var imgURL = chrome.extension.getURL("images/icon25_25.jpg");
var bubbleDOM = document.createElement("input");
bubbleDOM.setAttribute('class', 'selection_bubble');
bubbleDOM.setAttribute('id', 'selection_bubble');
bubbleDOM.src = imgURL;
bubbleDOM.type = "image";
document.body.appendChild(bubbleDOM);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function (e) {
  var selection = window.getSelection().toString();
  if (selection.length > 0) {
    renderBubble(e.pageX - 12.5, e.pageY + 12.5, selection);
  }
}, false);


// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (e) {
  bubbleDOM.style.visibility = 'hidden';
  if (e.target.id == "selection_bubble") {
  	window.open('http://www.post-tracker.info/search?&code=' + postTrackSelection);
  }
}, false);

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
  postTrackSelection = selection;
  bubbleDOM.style.top = mouseY + 'px';
  bubbleDOM.style.left = mouseX + 'px';
  bubbleDOM.style.visibility = 'visible';
};

document.getElementById('selection_bubble').addEventListener("click", function(e){
	window.open('http://www.post-tracker.info/search?&code=' + postTrackSelection);
	e.stopPropagation();
});

var isInstalledNode = document.createElement('div');
isInstalledNode.id = 'extension-installed-with-id-ocemjnadfmjophkhhgeekjmkeecipngm';
document.body.appendChild(isInstalledNode);

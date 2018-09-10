
function addLoadEvent(func) {
  var oldOnload = window.onload;
  if (typeof oldOnload !== 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldOnload();
      func();
    }
  }
}

function showPic(whichpic) {
  var placeholder = document.getElementById('placeholder');
  var description = document.getElementById('description');
  if (placeholder && description) {
    var source = whichpic.getAttribute('href');
    var text = whichpic.getAttribute('title');
    placeholder.setAttribute('src', source);
    description.firstChild.nodeValue = text;
    return true;
  }
  return false;
}

function prepareGallery() {
  if (
    document.getElementsByTagName &&
    document.getElementById &&
    document.getElementById('gallery')
  ) {
    var gallery = document.getElementById('gallery');
    var links = gallery.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].onclick = function () {
        return !showPic(this);
      }
    }
  }
}

addLoadEvent(prepareGallery);

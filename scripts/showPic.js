
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

function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function preparePloaceholder() {
  if (!document.createElement || !document.createTextNode
    || !document.getElementById || !document.getElementById('gallery')
  ) {
    return false;
  }
  var placeholder = document.createElement('img');
  placeholder.setAttribute('id', 'placeholder');
  placeholder.setAttribute('src', 'images/5.jpg');
  placeholder.setAttribute('alt', 'image gallery');
  var description = document.createElement('p');
  var descText = document.createTextNode('Choose an image');
  description.setAttribute('id', 'description');
  description.appendChild(descText);
  var gallery = document.getElementById('gallery');
  insertAfter(placeholder, gallery);
  insertAfter(description, placeholder);
}

addLoadEvent(preparePloaceholder);
addLoadEvent(prepareGallery);

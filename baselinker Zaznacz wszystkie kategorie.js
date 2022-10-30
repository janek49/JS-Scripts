
function getRoot() {
  return document.getElementById("categories_tree").getElementsByTagName("ul")[0];
}

function goUp() {
  let el = getRoot().previousElementSibling.previousElementSibling;
  eval(el.getAttribute("onclick"));
}

function isLoading() {
  return document.getElementById("mini_loading") !== null;
}

var visited = [];

function runCode() {

  if (isLoading()){
    setTimeout(() => {
      runCode();
    }, 100);
    return;
  }

  checkAllTheBoxes();

  setTimeout(() => {
    var els = getRoot().getElementsByTagName("a");

    for (let i = 0; i < els.length; i++) {
      let el = els[i];
      let action = el.getAttribute("onclick");

      if (visited.includes(action))
        continue;

      visited.push(action);
      eval(action);

        runCode();

      return;
    }

    goUp();

      runCode();

  }, 100);
}


function checkAllTheBoxes() {
  var els = getRoot().getElementsByTagName("input");

  for (let i = 0; i < els.length; i++) {
    let el = els[i];
    if (el.checked) {
      el.click();
    }
  }
}


runCode();
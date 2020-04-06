
var activeClass = [];
filterSelection("all", "art-card", "");



function filterSelection(c, cl, tag) {
  var x, i;
  x = document.getElementsByClassName(cl);

  if (c == "all") {
    c = "";
  }

  
  tagActive(tag, c);

  for (i = 0; i < x.length; i++) {
    k=0;
    for(j=0;j < activeClass.length; j++) {
      if(x[i].className.indexOf(activeClass[j]) > -1) {
        k++;
      }
    }
    if(k === activeClass.length) {
      AddClass(x[i], "show");
     
    } else {
      RemoveClass(x[i], "show");
    }
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function tagActive(tagClass, className) {
  var y = document.getElementsByClassName(tagClass);
  for (let i = 0; i < y.length; i++) {
    if(y[i].className.indexOf('active') !== -1) {
      RemoveClass(y[i], "active");
      if(i ==0) {
        for (j=0;j<activeClass.length;j++) {
          if(activeClass[j] === className) {
            activeClass.splice(j, 1);  
            break;
          }
        }
      }
     
    } else {
      AddClass(y[i], "active");
      if(i==0) {
        activeClass.push(className);
      }
    
    }
  }
  
}
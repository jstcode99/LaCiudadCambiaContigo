var data;
var currentPage = 1;
var recordsPerPage = 6;

function getData() {
  $.getJSON('data.json',function(response){
    data = response
    changePage(1);
  }).error(function(error){
    console.log('error', error);
  });
}

function prevPage(){
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
  }
}

function nextPage(){
  if (currentPage < numPages()) {
    currentPage++;
    changePage(currentPage);
  }
}

function appendRow(div) {
  var div = document.createElement("div");
  div.classList.add('w3-row-padding');
  return div
  // Append the new elements
}

function appendCard(data) {
  var divCard = document.createElement("div");
  var classNames = ['w3-third', 'w3-container', 'w3-margin-bottom'];
  classNames.forEach(className => {
    divCard.classList.add(className);
  });
  

  var img = document.createElement("img");
  img.classList.add('w3-row-padding');
  img.style.width = '100%';
  img.src = data.url
  divCard.append(img);

  var divCardContainer = document.createElement("div");
  var classNames2 = ['w3-container', 'w3-white'];
  classNames2.forEach(className => {
    divCardContainer.classList.add(className);
  });
  divCard.append(divCardContainer);

  var title = document.createElement("p");
  title.innerText = data.title;
  divCardContainer.append(title);
  var decription = document.createElement("p");
  divCardContainer.append(decription);
  decription.innerText = data.description;
  return divCard;
}

function changePage(page){
  var btnNext = document.getElementById("btnNext");
  var btnPrev = document.getElementById("btnPrev");
  var listingContent = document.getElementById("list-content");
  let cuter = 3;
  let counterCuter = 0;
  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();
  
  listingContent.innerHTML = "";
  
  for (var i = (page-1) * recordsPerPage; i < (page * recordsPerPage); i++) {
    if(counterCuter === 0) {
      var div = appendRow()
      listingContent.append(div)
    }
    if(counterCuter < cuter) {
      div.append(appendCard(data[i]))
    }
    counterCuter +=1
    if(counterCuter === cuter) {
      counterCuter = 0
    }
  }

  if (page == 1) {
    btnPrev.style.visibility = "hidden";
  } else {
    btnPrev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btnNext.style.visibility = "hidden";
  } else {
    btnNext.style.visibility = "visible";
  }
}

function numPages(){
  return Math.ceil(data.length / recordsPerPage);
}
$( document ).ready(function() {
  getData();
})
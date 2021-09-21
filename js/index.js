var data;
var currentPage = 1;
var recordsPerPage = 8;
var cuter = 4;

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
  div.classList.add('cards');
  return div
  // Append the new elements
}

function appendCard(data) {
  var divCard = document.createElement("article");
  var classNames = ['card'];
  classNames.forEach(className => {
    divCard.classList.add(className);
  });
  
  var picture = document.createElement("picture");
  picture.classList.add('thumbnail');
  var img = document.createElement("img");
  img.classList.add('w3-row-padding');
  img.style.width = '100%';
  img.style.height = '250px';
  img.src = data.url
  picture.append(img);
  divCard.append(picture);

  var divCardContainer = document.createElement("div");
  var classNames2 = ['card-content'];
  classNames2.forEach(className => {
    divCardContainer.classList.add(className);
  });
  divCard.append(divCardContainer);

  var title = document.createElement("h6");
  title.innerText = data.title;
  divCardContainer.append(title);
  var decription = document.createElement("p");
  divCardContainer.append(decription);
  decription.innerText = data.description;
  return divCard;
}

function changePage(page){
  document.getElementById('currentPage').textContent = currentPage + '/' + data.length
  var btnNext = document.getElementById("btnNext");
  var btnPrev = document.getElementById("btnPrev");
  var listingContent = document.getElementById("list-content");
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
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
  div.classList.add('container');
  return div
  // Append the new elements
}

function appendCard(data) {
  var divCard = document.createElement("div");
  var classNames = ['card'];
  classNames.forEach(className => {
    divCard.classList.add(className);
  });

  var divCardItem = document.createElement("div");
  divCardItem.classList.add('card-item');

  var divCardImg = document.createElement("div");
  divCardImg.classList.add('card-image');
  divCardImg.style.backgroundImage = "url(__URL__)".replace('__URL__', data.url);
  divCardItem.append(divCardImg);



  var divCardInfo = document.createElement("div");
  var classNames2 = ['card-info'];
  classNames2.forEach(className => {
    divCardInfo.classList.add(className);
  });
  var title = document.createElement("h2");
  title.classList.add('card-title');
  title.innerText = data.title;
  divCardInfo.append(title);

  var category = document.createElement("small");
  category.classList.add('card-category');
  category.innerText = data.idCategory;
  divCardInfo.append(category);

  var decription = document.createElement("p");
  title.classList.add('card-title');
  decription.innerText = data.description;
  divCardInfo.append(decription);

  divCardItem.append(divCardInfo);

  divCard.append(divCardItem);

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
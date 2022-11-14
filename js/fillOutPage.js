const worksContainer = document.querySelector('.works');


for(let work in worksArrea) {
   let block = document.createElement('div');
   block.className = "work item";

   let title = document.createElement('div');
   title.className = "work__title";
   let titleText = '';
   if(worksArrea[work]['titelLinkText'] != '') {
      titleText += `<a class="link" href="${worksArrea[work]['titleLink']}" target="_blank">${worksArrea[work]['titelLinkText']}</a> : `;
   }
   titleText += worksArrea[work]['title'];
   title.innerHTML = titleText;

   let image = document.createElement('div');
   image.className = "work__image";
   image.innerHTML = `<img class="item" src="${worksArrea[work]['linkImage']}" alt="">`

   let links = document.createElement('div');
   links.className = "work__links";
   links.innerHTML = `<a href="${worksArrea[work]['linkGit']}" target="_blank" class="work__link link">git</a>
   <a href="${worksArrea[work]['linkBeb']}" target="_blank" class="work__link link">На сайт</a>`;
   
   block.append(title);
   block.append(image);
   block.append(links);

   worksContainer.prepend(block);
}

//2й способ вставки в документ
//чтоб не заполнять новые работы снизу списка в date переворачиваем выполнение с помощью доп строки
//let works = '';
//for(let work in worksArrea) {
//   let block = '';
//   block += '<div class="work item">';
//   block += '<div class="work__title">';
//   if(worksArrea[work]['titelLinkText'] != '') {
//      console.log(worksArrea[work]['titleLink']);
//      console.log(worksArrea[work]['titleLinkText']);
//      block += `<a class="link" href="${worksArrea[work]['titleLink']}" target="_blank">${worksArrea[work]['titelLinkText']}</a> : `;
//   }
//   block += `${worksArrea[work]['title']}</div>`;
//   block += '<div class="work__image">';
//   block += `<img class="item" src="${worksArrea[work]['linkImage']}" alt="">`;
//   block += '</div>';
//   block += '<div class="work__links">';
//   block += `<a href="${worksArrea[work]['linkGit']}" target="_blank" class="work__link link">git</a>`;
//   block += `<a href="${worksArrea[work]['linkBeb']}" target="_blank" class="work__link link">На сайт</a>`;
//   block += '</div>';
//   block += '</div>';
//   block += works;
//   works = block;
//}
//worksContainer.innerHTML = works;
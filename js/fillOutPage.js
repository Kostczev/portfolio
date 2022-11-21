const worksContainer = document.querySelector('.works');

fetch('./js/data.json')
   .then(resp => resp.json())
   .then(json => appendWorks(json));

function appendWorks(data){
   data.forEach(element => {
      let block = document.createElement('div');
      block.className = "work item";

      let title = document.createElement('div');
      title.className = "work__title";
      let titleText = '';
      if(element.titelLinkText != '') {
         titleText += `<a class="link" href="${element.titleLink}" target="_blank">${element.titelLinkText}</a> : `;
      }
      titleText += element.title;
      title.innerHTML = titleText;

      let image = document.createElement('div');
      image.className = "work__image";
      image.innerHTML = `<img class="item" src="${element.linkImage}" alt="">`

      let links = document.createElement('div');
      links.className = "work__links";
      links.innerHTML = `<a href="${element.linkGit}" target="_blank" class="work__link link">git</a>
      <a href="${element.linkBeb}" target="_blank" class="work__link link">На сайт</a>`;
      
      block.append(title);
      block.append(image);
      block.append(links);

      worksContainer.append(block);
   });
}
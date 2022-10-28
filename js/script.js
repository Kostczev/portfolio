const workImages = document.querySelectorAll('.work__image');
const educationImages = document.querySelectorAll('.show-education__image');

const panelShowImage = document.querySelector('.show-more-image');
const buttonsEducation = document.querySelectorAll('.persona-card__education');
const buttonClose = document.querySelectorAll('.button-close');
const body = document.querySelector('body');


let isOpenPanelShowImage;

function clickWorkImage() {
   workImages.forEach((image, index) => {
      image.addEventListener('click', e => {
         if( !isOpenPanelShowImage ) {
            let stateObj = {
               name: 'workImage',
               index: index,
            }
            history.pushState({stateObj: stateObj}, '');
            openPanelWorkImage(index);
         }
      })
   })
}

function clickEducationImage() {
   educationImages.forEach(image => {
      image.addEventListener('click', e => {
         let src = e.currentTarget.src;
         window.open(src);
      })
   })
}


function openPanelWorkImage(index) {
   panelShowImage.querySelector('img').src = workImages[index].src;
   openShowPanel(panelShowImage);
}

function openPanelEducations() {
   buttonsEducation.forEach((education, index) => {
      education.addEventListener('click', e => {
         if( !isOpenPanelShowImage ) {
            let stateObj = {
               name: 'educations',
               selector: e.target.dataset.education,
            }
            history.pushState({stateObj: stateObj}, '');
            openPanelEducation(e.target.dataset.education);
         }
      })
   })
}

function openPanelEducation(selector) {
   openShowPanel(document.querySelector(selector));
}

function openShowPanel(panel) {
   panel.classList.add('active-panel');
   panel.classList.remove('no-active-panel');
   body.classList.add('lock');
}



function openingLockPanelShowImage() {
   panelShowImage.addEventListener("animationstart", e => {
      swapCursorPointer(workImages);
      swapCursorPointer(buttonsEducation);
      isOpenPanelShowImage = true;
   }, false);
   panelShowImage.addEventListener("animationend", function() {
      swapCursorPointer(workImages);
      swapCursorPointer(buttonsEducation);
      isOpenPanelShowImage = false;
   }, false);
}

function swapCursorPointer(array) {
   array.forEach(el => {
      el.classList.toggle('pointer-off');
   })
}


function clickCloseShowPanels() {
   buttonClose.forEach((button, index) => {
      button.addEventListener('click', e => {
         history.pushState({stateObj: null}, '');
         closeShowPanelByIndex(index);
      })
   })
}

function closeShowPanelByIndex(index) {
   //закрывает что? крестик, с ним и работаем не зная про панель.
   //уже в закрытии узнаем, что именно закрываем.
   let panel = buttonClose[index].closest('.show-more');
   closeShowPanel(panel);
}

function closeShowPanel(panel) {
   panel.classList.remove('active-panel');
   panel.classList.add('no-active-panel');
   body.classList.remove('lock');
}

window.addEventListener('popstate', e=> {
   let state = e.state.stateObj;
   if( state!= null ) {
      switch (state.name) {
         case 'workImage':
            console.log('workImage');
            openPanelWorkImage(state.index);
            break;
         case 'educations':
            openPanelEducation(state.selector);
            break;
      
         default:
            break;
      }
   } else {
      closeShowPanel(document.querySelector('.active-panel'));
   }
   
})


clickWorkImage();
clickEducationImage();
clickCloseShowPanels();
openPanelEducations();  
openingLockPanelShowImage();

history.replaceState({stateObj: null}, '');
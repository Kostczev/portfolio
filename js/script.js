const workImages = document.querySelectorAll('.work__image');
const panelShowImage = document.querySelector('.show-image');


let isOpenPanelShowImage;

function openWorkImage() {
   workImages.forEach((image, index) => {
      image.addEventListener('click', e => {
         if( !isOpenPanelShowImage ) {
            panelShowImage.querySelector('img').src = image.src;
   
            panelShowImage.classList.add('active');
            panelShowImage.classList.remove('no-active');
         }
      })
   })
}


//transitionstart
function openingLockPanelShowImage() {
   panelShowImage.addEventListener("animationstart", e => {
      swapCursorPointer(workImages);
      isOpenPanelShowImage = true;
   }, false);
   panelShowImage.addEventListener("animationend", function() {
      swapCursorPointer(workImages);
      isOpenPanelShowImage = false;
   }, false);
}

function swapCursorPointer(array) {
   array.forEach(el => {
      el.classList.toggle('pointer-off');
   })
}

function closePanelShowImage() {
   panelShowImage.addEventListener('click', e => {
      panelShowImage.classList.remove('active');
      panelShowImage.classList.add('no-active');
   })
}


openWorkImage();
closePanelShowImage();
openingLockPanelShowImage();
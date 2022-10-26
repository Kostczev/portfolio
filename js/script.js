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

//const burger = document.querySelector('.burger');
//const container = document.querySelector('.container');
//const screens = document.querySelectorAll('.screen');
//const links = document.querySelectorAll('.link');

//let shadowImageOne = getComputedStyle( document.querySelector('.np-2') ,null).getPropertyValue('background');
//let shadowImageTwo = getComputedStyle( document.querySelector('.np-3') ,null).getPropertyValue('background');
//let oldBg;

//burger.addEventListener('click', () => {
//   //container.classList.toggle('active');
//   activation3D();
//})

//function activation3D() {
//   if(container.classList.contains('active')) {
//      container.classList.remove('active');
//      container.classList.add('no-active');
//   }
//   else {
//      container.classList.add('active');
//      container.classList.remove('no-active');
//   }
//}

//function replaceBg(id) {
//   const bg = document.getElementById(id);
//   if(bg != oldBg) {
//      hideUnnecessaryBg(bg);
//      setShadowImage(bg);
//      updateShadowValues(bg);
//   }
//   oldBg = bg;
//}

////самокоментирующийся код :)
//function hideUnnecessaryBg(bg) {
//   screens.forEach(screen => {
//      screen.style.display = 'none';
//   })
//   bg.style.display = 'block';
//}

//function setShadowImage(bg) {
//   bg.querySelector('.shadow.one').style.background = shadowImageOne;
//   bg.querySelector('.shadow.two').style.background = shadowImageTwo;
//}

//function updateShadowValues(bg) {
//   shadowImageTwo = shadowImageOne;
//   shadowImageOne = getComputedStyle( bg.querySelector('.page') ,null).getPropertyValue('background');
//}

//function highlightLink(linkHighlight) {
//   links.forEach(link => {
//      link.classList.remove('active');
//   })
//   linkHighlight.classList.add('active');
//}

//function changeBg() {
//   links.forEach((link, index) => {
      
//      link.addEventListener('mouseenter', e => {
//         if(container.classList.contains('active')) {
//            e.preventDefault();
//            replaceBg(e.target.dataset.link);
//            highlightLink(link);
//         }
//      })

//      link.addEventListener('click', e => {
//         e.preventDefault();
//         //container.classList.toggle('active');
//         activation3D();
//      })
      
//   })
//}

////Отключаем все экраны кроме 1го
//replaceBg(screens[0].id);

////Запускаем прослушку
//changeBg();
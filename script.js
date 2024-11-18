 
 function changeURL(buttonId) {
    const imageMap = {
      click1: './images/backdrops/wallet-app-1.png',
      click2: './images/backdrops/wallet-app-2.png',
      click3: './images/backdrops/wallet-app-3.png',
      click4: './images/backdrops/wallet-app-4.png'
    };


    const imageElement = document.getElementById('mainImage');


    if (buttonId in imageMap) {
     
      imageElement.style.opacity = 0;

      
      setTimeout(() => {
        imageElement.src = imageMap[buttonId];
      
        imageElement.onload = () => {
          imageElement.style.opacity = 1;
        };
      }, 500); 
    }



    const elements = document.querySelectorAll('p[id^="click"]');


    elements.forEach(el => {
        if (el.id !== buttonId) {
          el.style.display = 'none'; // Hide all other elements
        }
      });


        const element = document.getElementById(buttonId);

       
        
        if (element) {
            element.style.display = element.style.display === 'flex' ? 'none' : 'flex';
          }
      

  }
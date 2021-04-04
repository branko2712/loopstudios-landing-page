window.addEventListener('load', () => {
   const mobileMenuButtonOpen = document.querySelector('#openBtn');
   
   if(mobileMenuButtonOpen){
       mobileMenuButtonOpen.addEventListener('click', ()=>{
        const mobileNavigation = document.querySelector('#mobileNavigation');
        mobileNavigation.classList.add('active');

        const closeButton = document.querySelector('#closeBtn');

        if(closeButton){
            closeButton.addEventListener('click', () =>         mobileNavigation.classList.remove('active')
            );
        }
       });
   }
});
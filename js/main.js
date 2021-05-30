window.addEventListener('load', () => {
   const mobileMenuButtonOpen = document.querySelector('#openBtn');
   
   if(mobileMenuButtonOpen){
       mobileMenuButtonOpen.addEventListener('click', ()=>{
        const mobileNavigation = document.querySelector('#mobileNavigation');
        const htmlRootEl = document.querySelector('html');
        mobileNavigation.classList.add('active');
        htmlRootEl.style.overflow = 'hidden';

        const closeButton = document.querySelector('#closeBtn');

        if(closeButton){
            closeButton.addEventListener('click', () =>         {
                mobileNavigation.classList.remove('active');
                htmlRootEl.style.overflow = 'auto   ';

            }
            );
        }
       });
   }
});

const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.gallery-card').forEach(card=>{card.addEventListener('click',()=>{const img=card.querySelector('img');let box=document.querySelector('.lightbox');if(!box){box=document.createElement('div');box.className='lightbox';box.innerHTML='<button class="close-lightbox" aria-label="Close">×</button><img alt="J&M Plasters portfolio image">';document.body.appendChild(box);box.querySelector('.close-lightbox').onclick=()=>box.classList.remove('open');box.onclick=e=>{if(e.target===box)box.classList.remove('open')}}box.querySelector('img').src=img.src;box.classList.add('open');});});

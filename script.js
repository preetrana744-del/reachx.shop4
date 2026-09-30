
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){ entry.target.classList.add('show'); revealObserver.unobserve(entry.target); }
  });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

document.querySelectorAll('[data-smooth]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id && id.startsWith('#')){
      const el=document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    }
  })
});

const form=document.querySelector('#leadForm');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.querySelector('#name')?.value.trim() || 'there';
    const email=document.querySelector('#email')?.value.trim() || '';
    const message=`Hi Reach X, I’m ${name}. Please contact me${email ? ` at ${email}` : ''} about a website project.`;
    window.location.href=`mailto:reachx.shop@gmail.com?subject=${encodeURIComponent('Reach X — New Project Enquiry')}&body=${encodeURIComponent(message)}`;
  });
}

document.querySelectorAll('[data-copy]').forEach(btn=>{
  btn.addEventListener('click',async()=>{
    const text=btn.getAttribute('data-copy');
    try{await navigator.clipboard.writeText(text);btn.textContent='Copied';setTimeout(()=>btn.textContent='Copy',1000)}catch{}
  });
});

document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(1200px) rotateX(${(-y*3).toFixed(2)}deg) rotateY(${(x*4).toFixed(2)}deg)`;
  });
  card.addEventListener('pointerleave',()=>card.style.transform='');
});

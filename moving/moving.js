
d=document.getElementsByClassName('d')

d[0].style.top=44+'%'
d[0].innerHTML='<br>GO'
d[1].style.top=66+'%'
d[1].style.width=0+'%'
d[2].style.top=88+'%'
d[2].style.width=0+'%'


n=0 
sh='../pics/insect/'
mn=['1b.png','2b.png','3b.png','4b.png']
sh1='../pics/1x/'
//=['1b.png','2b.png','3b.png','4b.png']
i=0,ii=0; w=0; t=0; b=1
 bm=[0,0], itr=0

idim.style.left=111+'px'

 
function imcl()
{
 idim.src=sh+mn[i]; i++; i%=4;
   w++;
 d[1].style.width=t/10+'px'
  d[1].innerHTML='speed: '+t/10 
 d[2].style.width=w+'px'   
  d[2].innerHTML='distance: '+w 
   
}


d[0].onclick=()=>
{ 
    t=333
  if(!b)
   {d[0].innerHTML='GO'; clearInterval(itr);}
     else 
   {d[0].innerHTML='STOP'; itr=setInterval(imcl,t);}
  b=!b	   
}

idim.onclick=()=>{bm[0]=!bm[0];}
idim.onmousemove=()=>
{ if(bm[0]){
  idim.style.left=event.clientX-55+'px'
  idim.style.top=event.clientY-55+'px';	 
 }
}

idim1.onclick=()=>{bm[0]=!bm[0];}
idim1.onmousemove=()=>
{ if(bm[0]){
  idim1.style.left=event.clientX-55+'px'
  idim1.style.top=event.clientY-55+'px';	 
 }
}




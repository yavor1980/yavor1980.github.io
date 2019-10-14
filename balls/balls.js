

cnt=document.getElementById('cnt')

 

var s=
{
  b:1, a:[], n:0,  

init:function()//Math.random*4
{ //if(event.clientX)
 s.a[s.n]=
 {x:0, y:0,dx:Math.random()*10-5,dy:Math.random()*10-5,
  b:0,
  d:document.createElement('div'),  
  init:function()
  { 
	this.d.className='idd'; 
     this.d.onclick=()=>this.clk()
      this.d.onmousemove=()=>this.mv()
	  
    this.x=Math.round(Math.random()*444) 
	this.y=Math.round(Math.random()*444); 	
   
   r=Math.round(Math.random()*9); 
   g=Math.round(Math.random()*9); 
   b=Math.round(Math.random()*9);     
   
     this.d.style.left=this.x+'px'
     this.d.style.top=this.y+'px'
	  this.d.style.background='#'+r+g+b;
	  cnt.appendChild(this.d);
	 
  },
  cl:function()
  {
   this.x+=this.dx; this.y+=this.dy;
    this.d.style.left=this.x+'px'
    this.d.style.top=this.y+'px'
	if((this.x<0)||(this.x>600)) this.dx*=-1 //this.d.style.opacity='1'   
	if((this.y<0)||(this.y>555)) this.dy*=-1 //this.d.style.opacity='1'   
  },
  clk:function()
  {	 //if(this.b==0) this.b=1
     //if((event.clientX>this.x)&&(event.clientX<this.x+22)
		// &&(event.clientY>this.y)&&(event.clientY<this.y+22))	
	// if(this.b==0)		 
	  this.b=!this.b;	  
        	
  },
  mv:function()
  {if(this.b==1)	
    {
	    this.x=(event.clientX-15)
        this.y=(event.clientY-15)
	 this.d.style.left=this.x+'px'; 
	 this.d.style.top=this.y+'px';
	} 
  }
  
 }
  s.a[s.n].init()
   
   s.n++
     
},

cl:function()
{    
 for(i=0;i<s.n;i++) 
   s.a[i].cl()
      
},



}
 //for(i=0;i<7;i++) 


setInterval(()=>s.init(),3333)
//setInterval(()=>s.cl(),99)
  
 



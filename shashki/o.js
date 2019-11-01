//#import s.js

o=
  {
   a:[],i:0,
   set:function()
   { j=7
    for(i=0;i<12;i++)    
    {    {if((i>0)&&(i%4==0))j--;  }
     o.a[i]=
     {el:document.createElement("div"),
       x:i%4*2,y:j,dx:0,dy:-1,b:0,
       set:function()
       {if(j%2==1){this.x+=1;}
        this.el.className='f';  
        	//this.el.onmousedown=()=>{this.chs(); }
			//this.el.onmousemove=()=>{this.mv(); }
			//this.el.style.cursor='pointer'
		this.el.style.background='#000'	
        this.el.style.left=this.x*50+'px'
        this.el.style.top=this.y*50+'px'  
         cont.appendChild(this.el);
		  
       },  
      	          
       mv:function()
	 {   var v=0
        function f()
        {  
         if(Math.random()<0.5)
           v=-1; else v=1; 
          
		 idp.innerHTML=this.b
        }
   f()
   for(i=0;i<12;i++)
   {	   
   // if((this.x==)&&(this.y==s.a[i].y))
	if(s.a[i].x==this.x && s.a[i].y==this.y)
		s.a[i].el.style.visibility='hidden'
		
	
   }	
   while((this.x+v<0)||(this.x+v>7))  f()
	  this.x+=v
	  this.y+=this.dy
	  
	    this.el.style.left=this.x*50+'px'
        this.el.style.top=this.y*50+'px'
	
	
	 },
        
   }
     o.a[i].set();  
   } 
  },
      
	
    mv:function()
    {//for(i=0;i<12;i++) s.a[i].dest();  
           
      o.a[Math.round(Math.random()*3)+8].mv()
       
    },
   
  }
    o.set()	 
 //o.a[0].dest()
	
	


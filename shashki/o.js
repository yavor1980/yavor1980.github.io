
o=
  {
   a:[],
   set:function()
   { j=7
    for(i=0;i<12;i++)    
    {    {if((i>0)&&(i%4==0))j--;  }
     o.a[i]=
     {el:document.createElement("div"),
       x:i%4*2,y:j,dx:0,dy:0,b:0,
       set:function()
       {if(j%2==1){this.x+=1;}
        this.el.className='f';  
        	this.el.onmousedown=()=>{this.chs(); }
			this.el.onmousemove=()=>{this.mv(); }
			
		this.el.style.background='#aaa'	
        this.el.style.left=this.x*50+'px'
        this.el.style.top=this.y*50+'px'  
         cont.appendChild(this.el);
		  this.b=0;
       },  
       chs:function()
       {
		   this.b=!this.b;
       },
	          
     mv:function()
	 {
	  if(this.b==1)	  
      { 
        this.x=(event.clientX-35);
		this.y=(event.clientY-35);
		 this.el.style.left=this.x+'px'
         this.el.style.top=this.y+'px'  
	  }
	 },
        
   }
     o.a[i].set();  
   } 
  },
   
   chs:function()
    {//for(i=0;i<12;i++) 
	   //s.a[i].chs();      
      
    },
	
    dest:function()
    {//for(i=0;i<12;i++) s.a[i].dest();      
    
    },
   
  }
    o.set()	 
 //o.a[0].dest()
	
	


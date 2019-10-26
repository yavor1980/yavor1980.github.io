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
       x:i%4*2,y:j,dx:0,dy:0,b:0,
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
       chs:function()
       {
		   
       },
	          
       mv:function()
	 {    
       
	  this.x-=1
	  this.y-=1
	    this.el.style.left=this.x*50+'px'
        this.el.style.top=this.y*50+'px'
		
		 idp.innerHTML=b
	
	 },
        
   }
     o.a[i].set();  
   } 
  },
   
   chs:function()
    {//for(i=0;i<12;i++) 
	   //s.a[i].chs();      
      
    },
	
    mv:function()
    {//for(i=0;i<12;i++) s.a[i].dest();      
      o.a[Math.round(Math.random()*3)+8].mv()
       
    },
   
  }
    o.set()	 
 //o.a[0].dest()
	
	


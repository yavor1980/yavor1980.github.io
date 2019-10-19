
  s=
  {
   a:[],i:0,
   set:function()
   { j=0
    for(i=0;i<12;i++)    
    {    {if((i>0)&&(i%4==0))j++;  }
     s.a[i]= 
     {el:document.createElement("div"),
       x:i%4*2,y:j,dx:0,dy:0,d:5,n:i,b:0,
       set:function()
       {if(j%2==1){this.x+=1;}
        this.el.className='f';  
        	this.el.onmousedown=()=>{this.chs(); }
			this.el.onmousemove=()=>{this.mv(); }
			//this.d.onmouseup=()=>{this.dest();}
        this.el.style.left=this.x*50+'px'
        this.el.style.top=this.y*50+'px'  
         cont.appendChild(this.el);
		  
       },  
	   //
       chs:function()
       { 
	    /* if(this.b==1)
		 {
	      this.x=this.x/50
          this.y=this.y/50
	    this.d.style.left=this.x+'px'; 
	    this.d.style.top=this.y+'px';   
			 
		 }*/
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
     s.a[i].set();  
     } 
    },
   chs:function()
   {
   },
   dest:function()
   {
    
   },
   
  }
    s.set()	 


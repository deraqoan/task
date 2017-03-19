
function test ()
    {   var order=document.getElementsByTagName('input')[0].value;
	var div = document.getElementById('div');
	if(order == "TUN RIG"){
        var reg = /(rotate\([\-\+]?((\d+)(deg))\))/i;
        var wt = div.style['-webkit-transform'], wts = wt.match (reg);
        var $2 = RegExp.$2;
        
        div.style['-webkit-transform'] = wt.replace ($2, parseFloat (RegExp.$3) + 90 + RegExp.$4);
	}
	if(order == "TUN LEF"){
        var reg = /(rotate\([\-\+]?((\d+)(deg))\))/i;
        var wt = div.style['-webkit-transform'], wts = wt.match (reg);
        var $2 = RegExp.$2;
        
        div.style['-webkit-transform'] = wt.replace ($2, parseFloat (RegExp.$3) + 270 + RegExp.$4);
	}
	if(order == "TUN BAC"){
        var reg = /(rotate\([\-\+]?((\d+)(deg))\))/i;
        var wt = div.style['-webkit-transform'], wts = wt.match (reg);
        var $2 = RegExp.$2;
        
        div.style['-webkit-transform'] = wt.replace ($2, parseFloat (RegExp.$3) + 180 + RegExp.$4);
	}

	if (order =='TRA BOT') {
		var top = div.offsetTop;
		if(top<400){
		div.style.top = parseInt(top)+41+'px';
		}
    };
	if(order == "TRA RIG"){
		var left = div.offsetLeft;
		if(left<400){
		div.style.left = parseInt(left)+41+'px';
		
	}
	}
	if(order == "TRA TOP"){
		var top = div.offsetTop;
		if(top>42){
		div.style.top = parseInt(top)-41+'px';
		}
		
	}
	if(order == "TRA LEF"){
		var left = div.offsetLeft;
		if(left>41){
		div.style.left = parseInt(left)-41+'px';
		}
		
	}
	if (order =='MOV BOT') {
		var top = div.offsetTop;
		if(top<400){
			div.style.transform = 'rotate(180deg)'; 
		div.style.WebkitTransform = 'rotate(180deg)';
		div.style.msTransform = 'rotate(180deg)';
		div.style.top = parseInt(top)+41+'px';
		}
    };
	if(order == "MOV RIG"){
		var left = div.offsetLeft;
		if(left<400){
			div.style.transform = 'rotate(90deg)'; 
		div.style.WebkitTransform = 'rotate(90deg)';
		div.style.msTransform = 'rotate(90deg)';
		div.style.left = parseInt(left)+41+'px';
		
	}
	}
	if(order == "MOV TOP"){
		var top = div.offsetTop;
		if(top>42){
			div.style.transform = 'rotate(0deg)'; 
		div.style.WebkitTransform = 'rotate(0deg)';
		div.style.msTransform = 'rotate(0deg)';
		div.style.top = parseInt(top)-41+'px';
		}
		
	}
	if(order == "MOV LEF"){
		var left = div.offsetLeft;
		if(left>41){
		div.style.left = parseInt(left)-41+'px';
		div.style.transform = 'rotate(270deg)'; 
		div.style.WebkitTransform = 'rotate(270deg)';
		div.style.msTransform = 'rotate(270deg)';
		}
		
	}
	if(order == "GO"){
		var left = div.offsetLeft;
		var top = div.offsetTop;
		var reg = /(rotate\([\-\+]?((\d+)(deg))\))/i;
        var wt = div.style['-webkit-transform'], wts = wt.match (reg);
        var $2 = RegExp.$2;
        
		var mydeg = parseInt($2)%360;
		
		if(left>41&&left<400&&top>42&&top<400){
			
			if(mydeg==0){
				div.style.top = parseInt(top)-41+'px';
			}
			if(mydeg==90){
				div.style.left = parseInt(left)+41+'px';
			}
			if(mydeg==180){
				div.style.top = parseInt(top)+41+'px';
			}
			if(mydeg==270){
				div.style.left = parseInt(left)-41+'px';
			}
			}
		
		
	}
	
    }

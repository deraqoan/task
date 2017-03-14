var orderArr = [],orderArrt = [],domArr = [], index = 0, queryVal, clearSign,targetNode;
var message = document.querySelector('span');
var myDiv = document.getElementsByTagName('div');
function preOrder (node) {
	if (node !==null) {
		var childNodes = node .children;
		orderArr.push(node);
		for (var i = 0; i < childNodes.length; i++) {
			preOrder(childNodes[i]);
		};
	};
}
function postOrder (node) {
	if (node !==null) {
		var childNodes = node .children;
		
		for (var i = 0; i < childNodes.length; i++) {
			postOrder(childNodes[i]);
		};
		orderArrt.push(node);
	};
}

function changeColor (arr, query) {
	if (index<= arr.length) {
		if (index != 0) {
			arr[index-1].style.backgroundColor='#fff';
		};
	    if (index!=arr.length) {
	    	arr[index].style.backgroundColor='#9DA5BC';
	    };
	    if (query && index !=arr.length 
		&& arr[index].firstChild.nodeValue.trim().toLowerCase() == query.toLowerCase()) {
	    	arr[index].style.backgroundColor = "#efaca6";
            message.innerHTML = "所查询的字符在红色标记处";
        } else if (query && index == arr.length){
            message.innerHTML = "未找到, 请尝试其他字符串";
        } else {
            index++;
            clearSign = setTimeout(function(){
            	changeColor(arr,query);
            },1000);
		}
	}
            else{
            	index=0;
            }
}
function clearPre (arr) {
	
	for(var i=0;i<myDiv.length;i++){
            myDiv[i].style.backgroundColor="#fff";}
	index=0;
	clearTimeout(clearSign);
	message.innerHTML = '';
}
function addEventHandler(element,event,listener) {
    if(element.addEventListener){
        element.addEventListener(event,listener);
    }else if(element.attachEvent){
        element.attachEvent('on'+event,listener);
    }else{
        element['on'+event]=listener;
    }
}
			function removeElement(_element){
         var _parentElement = _element.parentNode;
         if(_parentElement){
                _parentElement.removeChild(_element);  
         }
}
function init () {
	var root = document.querySelector('.wrapper');
    var btnGroup = document.querySelectorAll('button');
    var input = document.querySelector('#my-input');
	
   
	addEventHandler(root,'click',function(e){
	if(!e){  
          var e = window.event;  
        }  
		for(var i=0;i<myDiv.length;i++){
            myDiv[i].style.backgroundColor="";
			myDiv[i].index = i;
        }
        var targ = e.target;  
		targ.style.backgroundColor="#72b12a";
		var targt = targ.index;
		domArr.unshift(targt);
      
    });
	  
    addEventHandler(input,'change',function() {
    	queryVal = this.value;
    });
	
    addEventHandler(btnGroup[0],'click',function(){
    	clearPre(orderArr);
		preOrder(root);
    	message.innerHTML='查询结果';
    	changeColor(orderArr);
    });
	addEventHandler(btnGroup[1],'click',function(){
    	clearPre(orderArrt);
		postOrder(root);
    	message.innerHTML='查询结果';
    	changeColor(orderArrt);
    });
    addEventHandler(btnGroup[2],'click',function(){
		preOrder(root);
    	if(queryVal){
			
    		clearPre(orderArr);
    		message.innerHTML='查询中。。。。请等待';
    		changeColor(orderArr,queryVal);
    	}else{
    		alert('请输入查询字符')
    	}
    });
	
	addEventHandler(btnGroup[3],'click',function(){
		var myTarg = domArr[0];
		if(myTarg){
			removeElement(myDiv[myTarg]);
			   }else{
				alert('请点击选择删除节点');}
		});
		addEventHandler(btnGroup[4],'click',function(){
			var myTarg = domArr[0];
			var text=document.getElementById('agg').value;
			if(text&&myTarg){
				var node=document.createElement("div");
                node.textContent=text;
                myDiv[myTarg].appendChild(node);
				node.setAttribute("class","level");
			}else if(text){
			  alert('请点击选择添加节点的位置');
			}
			else{
				alert('请输入文本节点');
			}
		});
}
init();
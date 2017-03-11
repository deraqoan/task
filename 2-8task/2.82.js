var orderArr = [], index = 0, queryVal, clearSign;
var message = document.querySelector('span');
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
		orderArr.push(node);
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
	arr.forEach(function(item) {
		item.style.backgroundColor='#fff';
		// body...
	})
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
function init () {
	var root = document.querySelector('.wrapper');
    var btnGroup = document.querySelectorAll('button');
    var input = document.querySelector('input');
    
    addEventHandler(input,'change',function() {
    	queryVal = this.value;
    	// body...
    });
    addEventHandler(btnGroup[0],'click',function(){
		preOrder(root);
    	clearPre(orderArr);
    	message.innerHTML='查询结果';
    	changeColor(orderArr);
    });
	addEventHandler(btnGroup[1],'click',function(){
		postOrder(root);
    	clearPre(orderArr);
    	message.innerHTML='查询结果';
    	changeColor(orderArr);
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
    })


	// body...
}
init();
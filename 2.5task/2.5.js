
        window.onload = function () {
            var btnRandomNum = document.getElementById("random-num");
            var btnOne = document.getElementById("left-in");
            var btnTwo = document.getElementById("right-in");
            var btnThree = document.getElementById("left-out");
            var btnFour = document.getElementById("right-out");
			var btnFive = document.getElementById("pop");
			
			
            function newDiv(){
                var myText = document.getElementById("my-text").value;
                 var myDiv = document.createElement("div");
                if(myText>10&&myText<100){
                var myTextNode = document.createTextNode(myText);
                myDiv.appendChild(myTextNode);
                myDiv.className = "my-box";
                myDiv.style.height=myText*3+'px';
				
                }
                else {
                    alert('请输入10到100的值')
                }
                return myDiv;
				
            }
			function removeElement(_element){
         var _parentElement = _element.parentNode;
         if(_parentElement){
                _parentElement.removeChild(_element);  
         }
}
            btnRandomNum.onclick = function huiubjl() {
                
                document.getElementById("my-text").value = Math.ceil(Math.random() * 99);
            }
            btnOne.onclick = function leftAddDiv() {
               var divNum = document.getElementsByClassName("my-box");
				if(divNum.length<60){
              var myBody = document.getElementsByClassName("big-box")[0].firstChild;
                myBody.parentElement.insertBefore(newDiv(), myBody);
            }else{
             alert('队列数量不能超过60');
              }
            }
            btnTwo.onclick = function rightAddDiv() {
				var divNum = document.getElementsByClassName("my-box");
				if(divNum.length<60){
                var myBody = document.getElementsByClassName("big-box")[0];
                myBody.appendChild(newDiv());
            }else{
             alert('队列数量不能超过60');
              }
            }
            btnThree.onclick = function leftDelDiv() {
                var myBody = document.getElementsByTagName('div');
                if (myBody[0].innerText) {
                    alert(myBody[0].innerText);
                    removeElement(myBody[0]);
                }
            }
            btnFour.onclick = function rightDelDiv() {
               var myBody = document.getElementsByTagName('div');
                if (myBody[myBody.length-1].innerText) {
                    alert(myBody[myBody.length-1].innerText);
                    removeElement(myBody[myBody.length-1]);
                }
            }
			btnFive.onclick = function sortNum() {
             var aDiv = document.getElementsByTagName('div');
    var arr = [];
    for(var i=0;i<aDiv.length;i++)
    {
        arr.push(aDiv[i]);  
    }
    arr.sort(function(a,b){return parseInt(a.innerHTML) - parseInt(b.innerHTML)});
    for(var i=0;i<arr.length;i++)
    {
        document.body.appendChild(arr[i]); //将排好序的元素，重新塞到body里面显示。
    }
   
            }
        }
 
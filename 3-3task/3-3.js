function $(elementId){
    return document.getElementById(elementId);
    }

  
function userNameFocus(){
    var userNameId=$("userNameId");
	userNameId.className="import_prompt";
    userNameId.innerHTML="必填，长度为4~16个字符";
    }  
function repwdFocus(){
    var repwdId=$("repwdId");
    repwdId.className="import_prompt";
    repwdId.innerHTML="再次输入相同密码";
    }
function pwdFocus(){
    var pwdId=$("pwdId");
    pwdId.className="import_prompt";
    pwdId.innerHTML="密码长度为6-16";
    }         
function telFocus(){
    var telId=$("telId");
    telId.className="import_prompt";
    telId.innerHTML="手机号码以13，15，18开头且由11位数字组成";
    }
function emailFocus(){
    var emailId=$("emailId");
    emailId.className="import_prompt";
    emailId.innerHTML="请输入您常用的电子邮箱";
    }
    
function userNameBlur(){
    var userName=$("userName");
    var userNameId=$("userNameId");
    var reg=/^[0-9a-zA-Z][0-9a-zA-Z_.-]{4,16}[0-9a-zA-Z]$/;
    if(userName.value==""){
        userNameId.className="error_prompt";
        userNameId.innerHTML="名称不能为空";
		userName.style.border = "#E93F33 2px solid";
        return false;
        }
    if(reg.test(userName.value)==false){
        userNameId.className="error_prompt";
        userNameId.innerHTML="由字母、数字、符号组成且只能以数字、字母开头或结尾，且长度为4-16";
		userName.style.border = "#E93F33 2px solid";
        return false;
        }
        userNameId.className="ok_prompt";
        userNameId.innerHTML="通行证用户名输入正确";
		userName.style.border = "#62BC47 2px solid";
        return true;
    }
function pwdBlur(){
    var pwd=$("pwd");
    var pwdId=$("pwdId");
    if(pwd.value==""){
        pwdId.className="error_prompt";
        pwdId.innerHTML="密码不能为空";
		pwd.style.border = "#E93F33 2px solid";
        return false;
        }
    if(pwd.value.length<6 || pwd.value.length>16){
        pwdId.className="error_prompt";
        pwdId.innerHTML="密码长度为6-16";
		pwd.style.border = "#E93F33 2px solid";
        return false;
        }
        pwdId.className="ok_prompt";
        pwdId.innerHTML="密码输入正确";
		pwd.style.border = "#62BC47 2px solid";
        return true;
    }
    
function repwdBlur(){
    var repwd=$("repwd");
    var pwd=$("pwd");
    var repwdId=$("repwdId");
    if(repwd.value==""){
        repwdId.className="error_prompt";
        repwdId.innerHTML="重复密码不能为空";
		repwd.style.border = "#E93F33 2px solid";
        return false;
        }
    if(repwd.value!=pwd.value){
        repwdId.className="error_prompt";
        repwdId.innerHTML="两次输入的密码不一致";
		repwd.style.border = "#E93F33 2px solid";
        return false;
        }
        repwdId.className="ok_prompt";
        repwdId.innerHTML="输入正确";
		repwd.style.border = "#62BC47 2px solid";
        return true;
    }
 
function telBlur(){
    var tel=$("tel");
    var telId=$("telId");
    var reg=/^(13|15|18)\d{9}$/;
    if(tel.value==""){
        telId.className="error_prompt";
        telId.innerHTML="手机号码不能为空";
		tel.style.border = "#E93F33 2px solid";
        return false;
        }
    if(reg.test(tel.value)==false){
        telId.className="error_prompt";
        telId.innerHTML="手机号码输入不正确";
		tel.style.border = "#E93F33 2px solid";
        return false;
        }
        telId.className="ok_prompt";
        telId.innerHTML="输入正确";
		tel.style.border = "#62BC47 2px solid";
        return true;
    }    
function emailBlur(){
    var email=$("email");
    var emailId=$("emailId");
    var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
    if(email.value==""){
        emailId.className="error_prompt";
        emailId.innerHTML="保密邮箱不能为空";
		email.style.border = "#E93F33 2px solid";
        return false;
        }
    if(reg.test(email.value)==false){
        emailId.className="error_prompt";
        emailId.innerHTML="邮箱格式不正确";
		email.style.border = "#E93F33 2px solid";
        return false;
        }
        emailId.className="ok_prompt";
        emailId.innerHTML="邮箱输入正确";
		email.style.border = "#62BC47 2px solid";
        return true;
    }
function switchItem(tag){
   var s1 = document.getElementById('s1');
   var s2 = document.getElementById('s2');
   
   if(tag=='外'){
    s1.style.display = '';
    s2.style.display = 'none';
   
   }
   else{
    s1.style.display = 'none';
    s2.style.display = '';
   
   }
  }
 
function toVaild(){
	  var flagUserName=userNameBlur();
      var flagPwd=pwdBlur();
      var flagRepwd=repwdBlur();
      var flagTel=telBlur();
      var flagEmail=emailBlur(); 
	  userNameBlur();
      pwdBlur();
      repwdBlur();
      telBlur();
      emailBlur();  
                
                if(flagUserName==true &&flagPwd==true &&flagRepwd==true &&flagNickName==true&&flagTel==true&flagEmail==true){
                   alert("校验成功，之后进行提交");
                  
               }
               else{
                    alert("输入错误，请重新输入");
                   return false;
                }
             }

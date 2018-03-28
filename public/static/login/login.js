$(function () {
    //注册首页 pc验证
    var Forms = {};
    $(".Review .determine").click(function(){
        var valid = true;
        var Forms = {
            username : $("#username").val(),
            tel : $("#tel").val(),
            email : $("#email").val(),
            Orders : $("#Orders").val()
        };
        console.log(Forms);
        if(valid && Forms.username.length <= 3){
            valid = false;
            $("#username").css('borderColor','red');
            // var tips = $("#username").attr("data-foolish-msg");
            $("#username").focus();


        }else{
            $("#username").css('border','1px solid #6aaaf2');
        }
        if(valid && Forms.tel.length <= 3){
            valid = false;
            $("#tel").css('borderColor','red');
            // var tips = $("#tel").attr("data-foolish-msg");
            $("#tel").focus();


        }else{
            $("#tel").css('border','1px solid #6aaaf2');
        }
        if(valid && Forms.email.length <= 3){
            valid = false;
            $("#email").css('borderColor','red');
            // var tips = $("#email").attr("data-foolish-msg");
            $("#email").focus();


        }else{
            $("#email").css('border','1px solid #6aaaf2');
        }
        if(valid && Forms.Orders.length <= 3){
            valid = false;
            $("#Orders").css('borderColor','red');
            // var tips = $("#Orders").attr("data-foolish-msg");
            $("#Orders").focus();


        }else{
            $("#Orders").css('border','1px solid #6aaaf2');
        }
        if(valid){
            $(".Review").css('display','none');
            $(".idcard").css('display','block');
            $("telVal").text(Forms.tel);
            console.log($("telVal").text());
            $("#telVal").text($("#tel").val()); //获取电话号码
            var str = $("#telVal").text();
            $("#telVal").html(str.substring(0,3)+"****"+str.substring(7,11)) //号码加密
            return true;
        }else{
            return false;
        }

    });
// 注册首页PC 验证


// 注册手机端验证
    $(".modal_btn button").click(function(){
        var valid = true;
        var Forms = {
            username : $("#username").val(),
            tel : $("#tel").val(),
            email : $("#email").val(),
            Orders : $("#Orders").val()
        };
        console.log(Forms);
        if(valid && Forms.username.length <= 3){
            valid = false;
            $("#username").css('border','1px solid red');
            $("#username").focus();
        }else{
            $("#username").css('border','1px solid transparent');
        }
        if(valid && Forms.tel.length <= 3){
            valid = false;
            $("#tel").css('border','1px solid red');
            $("#tel").focus();


        }else{
            $("#tel").css('border','1px solid transparent');
        }
        if(valid && Forms.email.length <= 3){
            valid = false;
            $("#email").css('border','1px solid red');
            $("#email").focus();


        }else{
            $("#email").css('border','1px solid transparent');
        }
        if(valid && Forms.Orders.length <= 3){
            valid = false;
            $("#Orders").css('border','1px solid red');
            $("#Orders").focus();
        }else{
            $("#Orders").css('border','1px solid transparent');
        }
        if(valid){
            $(".Review").css('display','none');
            $(".idcard").css('display','block');
            $("#telVal").text($("#tel").val()); //获取电话号码
            var str = $("#telVal").text();
            $("#telVal").html(str.substring(0,3)+"****"+str.substring(7,11)) //号码加密
            return true;
        }else{

            return false;
        }

    });
//注册首页手机端验证

//PC端 -- 短信验证
    $(".idcard .main_item.confirm .determine").click(function () {
        var vaild =  true;
        var Forms = {
            V_input :  $(".idcard .main_item .V_input").val()
        };
        if( vaild && Forms.V_input.length <= 0 ){
            vaild = false;
            $(".idcard .main_item .V_input").css('border','1px solid red');
            $(".idcard .main_item .V_input").focus();
        }else{
            $(".idcard .main_item .V_input").css('border','1px solid #6aaaf2');
        }

        if(vaild){
            $(".idcard").css('display','none');
            $(".Application").css('display','block');
        }else{
            return false;
        }
    });
//PC端 -- 短信验证


//手机端 -- 短信验证
    $(".idcard .modal_bottom .modal_btn button").click(function () {
        var vaild =  true;
        var Forms = {
            V_input :  $(".idcard .main_item .V_input").val()
        };
        if( vaild && Forms.V_input.length <= 0 ){
            vaild = false;
            $(".idcard .main_item .V_input").css('border','1px solid red');
            $(".idcard .main_item .V_input").focus();
        }else{
            $(".idcard .main_item .V_input").css('border','1px solid transparent');
        }

        if(vaild){
            $(".idcard").css('display','none');
            $(".Application").css('display','block');
        }else{
            return false;
        }

    });
//手机端 -- 短信验证

// PC --用户名/性别验证
    $(".Application .main_item button").click(function(){
        var valid = true;
        var Forms = {
            usernameTwo : $("#usernameTwo").val(),
            sex : $("#sex").val()
        }
        console.log(Forms);
        if(valid && Forms.usernameTwo.length <= 3){
            valid = false;
            $("#usernameTwo").css('border','1px solid red');
            $("#usernameTwo").focus();
        }else{
            $("#usernameTwo").css('borderColor','#6aaaf2');

        }
        if(valid && Forms.sex <= 0 ){
            valid = false;
            $("#sexM").css('border','1px solid red');
            $("#sex").focus();
        }else{
            $("#sexM").css('borderColor','#6aaaf2');
        }

        if(valid){
            // window.location.href='login.html';
            $(".Application").css('display','none');

            $(".login").css('display','block');

        }else{
            return false;
        }

    });// PC ——  —— 用户/性别验证

// 手机端 —— —— 用户/性别验证
    $(".Application .modal_btn button").click(function(){
        var valid = true;
        var Forms = {
            usernameTwo : $("#usernameTwo").val(),
            sex : $("#sex").val()
        }
        if(valid && Forms.usernameTwo.length <= 3){
            valid = false;
            $("#usernameTwo").css('border','1px solid red');
            $("#usernameTwo").focus();
        }else{
            $("#usernameTwo").css('borderColor','transparent');
        }
        if(valid && Forms.sex <=0 ){
            valid = false;
            $("#sexM").css('border','1px solid red');
            $("select").focus();
        }else{
            $("#sexM").css('borderColor','transparent');
        }

        if(valid){

            $(".Application").css('display','none');
            $(".idcard").css('display','none');
            $(".login").css('display','block');

        }else{
            return false;
        }


    });   // 手机端 —— —— 用户/性别验证



//短信60s倒计时
    (function () {
        var wait=60;
        function time(o) {
            if (wait == 0) {
                o.removeAttribute("disabled");
                o.value="获取验证码";
                wait = 60;
            } else {

                o.setAttribute("disabled", true);
                o.value= wait + "s";
                wait--;
                setTimeout(function() {
                        time(o)
                    },
                    1000)
            }
        }
        $("#Verification").click=function(){time(this);}
        
    })();
//短信60s倒计时


    (function () {
        var   Login = {};

        //手机端 —— —— 登录验证
        $(".Login .modal_btn button").click(function(){
            var valid = true;
            var Login = {
                usernametreen : $("#usernametreen").val(),
                password : $("#password").val()
            }

            if(valid && Login.usernametreen.length <= 3){
                $('#usernametreen').css('border','1px solid red');
                $('#usernametreen').focus();
            }else{
                $('#usernametreen').css('border','1px solid transparent');
            }

            if(valid && Login.password.length <= 2){
                $('#password').css('border','1px solid red');
                $('#password').focus();

            }else{
                $('#password').css('border','1px solid transparent');
            }

            if(valid){
                $(".Application").css('display','none');
                $('#login_form').submit();
            }else{
                return false;
            }

        })
        //手机端 —— —— 登录验证

        // PC 登录验证
        $(".Login .main_item button").click(function(){
            var valid = true;
            var Login = {
                usernametreen : $("#usernametreen").val(),
                password : $("#password").val()
            }

            if(valid && Login.usernametreen.length <= 3){
                $('#usernametreen').css('border','1px solid red');
                $('#usernametreen').focus();
            }else{
                $('#usernametreen').css('border','1px solid #6aaaf2');
            }

            if(valid && Login.password.length <= 2){
                $('#password').css('border','1px solid red');
                $('#password').focus();

            }else{
                $('#password').css('border','1px solid #6aaaf2');
            }

            if(valid){
                $(".Application").css('display','none');
                $('#login_form').submit();
            }else{
                return false;
            }

        });
        // PC 登录验证
    })();
});
window.onload = function () {
    var text = document.querySelector('input');
    var Btn = document.getElementById('buton');
    var Text = document.getElementById('username');
    var Div = document.getElementById('aftername');
    var login = document.querySelector('.login-icon');
    var loading = document.querySelector('.loading');
    var eye = document.getElementById('eye');
    var pwd = document.getElementById('pwd');
    var register = document.querySelector('.register');
    var close = document.querySelector('.closeone');
    var title = document.getElementsByClassName('recommend')[0];
    var tip = document.querySelector('.tips');
    var tiptwo = document.querySelector('.tip');
    var flag = 0;
    // 失去焦点搜索字出现
    text.onfocus = function () {
        if (text.placeholder === '搜索') {
            this.placeholder = '';
        }
    };
    text.onblur = function () {
        if (this.placeholder === '') {
            this.placeholder = '搜索'
        }
    };
    
    // 显示用户名  
    Btn.addEventListener('click', function () {
        Div.innerHTML = Text.value;
        Div.style.display = 'block';
        register.style.display = 'none';
        login.style.display = 'none';
        // 加载动画
        loading.style.visibility = 'visible';
        setTimeout(function () {
            loading.style.display = 'none';
        }, 3000);
    })
    document.addEventListener('keyup', function (e) {
        if (e.keyCode == 13) {
            register.style.display = 'none';
            Div.innerHTML = Text.value;
            Div.style.display = 'block';
            login.style.display = 'none';
            loading.style.visibility = 'visible';
        }
    });

    //验证用户信息是否完整

    pwd.addEventListener('mouseout', function () {
        if (Text.value === '') {
            tip.style.display = 'block';
        }
        if (pwd.value === '') {
            tiptwo.style.display = 'block';
        };
    })
    // 用户名聚焦字消失
    Text.addEventListener('focus', function () {
        if (Text.placeholder === '用户名') {
            this.placeholder = '';
        }
        this.style.color = '#333'
    });

    Text.addEventListener('blur', function () {
        if (this.placeholder === '') {
            this.placeholder = '用户名';
        }
        this.style.color = '#979797'
    })
    pwd.addEventListener('focus', function () {
        if (this.placeholder === '*******') {
            this.placeholder = '';
        }
        this.style.color = '#333'
    });

    pwd.addEventListener('blur', function () {
        if (this.placeholder === '') {
            this.placeholder = '*******';
        }
        this.style.color = '#979797'
    })

    // 用户自己决定是否看密码
    eye.onclick = function () {
        if (flag == 0) {
            pwd.type = 'text';
            eye.src = 'imgs/eye-open.png';
            flag = 1;
        }
        else {
            pwd.type = 'password';
            eye.src = 'imgs/eye-close.png';
            flag = 0;
        }
    };
    // 点×关闭注册页面
    login.addEventListener('click', function () {
        register.style.display = 'block';

    })
    close.addEventListener('click', function () {
        register.style.display = 'none';
    });
    // 拖拽登录框
    // 1.按下鼠标，获得鼠标在盒子内坐标
    title.addEventListener('mousedown', function (e) {
        var x = e.pageX - register.offsetLeft;
        var y = e.pageY - register.offsetTop;
        // 2.鼠标移动
        document.addEventListener('mousemove',move)
        function move(e) {
            register.style.left = e.pageX - x + 'px';
            register.style.top= e.pageY - y + 'px';
        }
        // 3.鼠标弹起，让移动事件移除
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', move);
        })
    })

}
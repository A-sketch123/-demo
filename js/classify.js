window.onload = function () {
    $.ajax({
        url: 'http://vtmer.cn/class',
        dataType: 'json',
        type: 'POST',
        success: function (data) {
            var json = eval(data.bookclass[0]);
            var booknumber = [];
            var publish = [];
            var positionname = [];
            var timename = [];
            var doubanUrl = [];
            var zhiUrl = [];
            var jdUrl = [];
            var dangUrl = [];
            var amaUrl = [];
            var ahthor = [];
            var bookIntro = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var photo = [];
            var mark = [];
            var book = [];
            var people = [];
            var samePhoto = document.getElementsByTagName('img')[14];
            var samewriter = document.getElementsByClassName('author')[0];
            var samebookname = document.getElementById('samename');
            var pub = document.getElementsByClassName('author')[1];
            var pubDate=document.getElementsByClassName('author')[2];
            var booknum = document.getElementsByTagName('span')[11];
            var bookposition = document.getElementById('position');
            var douban = document.getElementsByTagName('a')[14];
            var zhi = document.getElementsByTagName('a')[15];
            var jd=document.getElementsByTagName('a')[16];
            var dd=document.getElementsByTagName('a')[17];
            var aUrl=document.getElementsByTagName('a')[18];
            var writerintro = document.getElementsByClassName('detials-introduction')[0];
            var bookintro = document.getElementsByClassName('detials-introduction')[1];
            for (var i = 0; i < 8; ++i) {
                arr1.push(json.bookInfo[i].cover);
                arr2.push(json.bookInfo[i].socre);
                arr3.push(json.bookInfo[i].title);
                arr4.push(json.bookInfo[i].author);
                booknumber.push(json.bookInfo[i].library[0].total);
                positionname.push(json.bookInfo[i].library[0].position);
                timename.push(json.bookInfo[i].publishDate);
                doubanUrl.push(json.bookInfo[i].bookUrl[0].doubanUrl);
                zhiUrl.push(json.bookInfo[i].bookUrl[0].zhihuUrl);
                jdUrl.push(json.bookInfo[i].buyUrl[0].jDUrl);
                dangUrl.push(json.bookInfo[i].buyUrl[0].DangUrl);
                amaUrl.push(json.bookInfo[i].buyUrl[0].AmazonUrl);
                ahthor.push(json.bookInfo[i].ahthorIntro);
                bookIntro.push(json.bookInfo[i].bookIntro);
                publish.push(json.bookInfo[i].publish)
                photo.push(document.getElementsByTagName('img')[i + 6]);
                mark.push(document.getElementsByTagName('p')[3 * i]);
                book.push(document.getElementsByTagName('p')[3 * i + 1]);
                people.push(document.getElementsByTagName('p')[3 * i + 2]);
              
            }
            // 一样的信息
            var btn1 = document.getElementById('btn1');
            var btn2 = document.getElementById('btn2');
            var btn3 = document.getElementById('btn3');
            var btn4 = document.getElementById('btn4');
            var btn5 = document.getElementById('btn5');
            var btn6 = document.getElementById('btn6');
            var btn7 = document.getElementById('btn7');
            var btn8 = document.getElementById('btn8');
            btn1.addEventListener('click', function () {
                samePhoto.src = arr1[0];
                samewriter.innerHTML = arr4[0];
                samebookname.innerHTML = arr3[0];
                pub.innerHTML = publish[0];
                pubDate.innerHTML = timename[0];
                booknum.innerHTML = booknumber[0];
                bookposition.innerHTML = positionname[0];
                douban.href = doubanUrl[0];
                zhi.href = zhiUrl[0];
                jd.href = jdUrl[0];
                dd.href = dangUrl[0];
                aUrl.href = amaUrl[0];
                writerintro.innerHTML = ahthor[0];
                bookintro.innerHTML = bookIntro[0];
            });
            btn2.addEventListener('click', function () {
                samePhoto.src = arr1[1];
                samewriter.innerHTML = arr4[1];
                samebookname.innerHTML = arr3[1];
                pub.innerHTML = publish[1];
                pubDate.innerHTML = timename[1];
                booknum.innerHTML = booknumber[1];
                bookposition.innerHTML = positionname[1];
                douban.href = doubanUrl[1];
                zhi.href = zhiUrl[1];
                jd.href = jdUrl[1];
                dd.href = dangUrl[1];
                aUrl.href = amaUrl[1];
                writerintro.innerHTML = ahthor[1];
                bookintro.innerHTML = bookIntro[1];
            });

            btn3.addEventListener('click', function () {
                samePhoto.src = arr1[2];
                samewriter.innerHTML = arr4[2];
                samebookname.innerHTML = arr3[2];
                pub.innerHTML = publish[2];
                pubDate.innerHTML = timename[2];
                booknum.innerHTML = booknumber[2];
                bookposition.innerHTML = positionname[2];
                douban.href = doubanUrl[2];
                zhi.href = zhiUrl[2];
                jd.href = jdUrl[2];
                dd.href = dangUrl[2];
                aUrl.href = amaUrl[2];
                writerintro.innerHTML = ahthor[2];
                bookintro.innerHTML = bookIntro[2];
            });
            btn4.addEventListener('click', function () {
                samePhoto.src = arr1[3];
                samewriter.innerHTML = arr4[3];
                samebookname.innerHTML = arr3[3];
                pub.innerHTML = publish[3];
                pubDate.innerHTML = timename[3];
                booknum.innerHTML = booknumber[3];
                bookposition.innerHTML = positionname[3];
                douban.href = doubanUrl[3];
                zhi.href = zhiUrl[3];
                jd.href = jdUrl[3];
                dd.href = dangUrl[3];
                aUrl.href = amaUrl[3];
                writerintro.innerHTML = ahthor[3];
                bookintro.innerHTML = bookIntro[3];
            });
            btn5.addEventListener('click', function () {
                samePhoto.src = arr1[4];
                samewriter.innerHTML = arr4[4];
                samebookname.innerHTML = arr3[4];
                pub.innerHTML = publish[4];
                pubDate.innerHTML = timename[4];
                booknum.innerHTML = booknumber[4];
                bookposition.innerHTML = positionname[4];
                douban.href = doubanUrl[4];
                zhi.href = zhiUrl[4];
                jd.href = jdUrl[4];
                dd.href = dangUrl[4];
                aUrl.href = amaUrl[4];
                writerintro.innerHTML = ahthor[4];
                bookintro.innerHTML = bookIntro[4];
            });
            btn6.addEventListener('click', function () {
                samePhoto.src = arr1[5];
                samewriter.innerHTML = arr4[5];
                samebookname.innerHTML = arr3[5];
                pub.innerHTML = publish[5];
                pubDate.innerHTML = timename[5];
                booknum.innerHTML = booknumber[5];
                bookposition.innerHTML = positionname[5];
                douban.href = doubanUrl[5];
                zhi.href = zhiUrl[5];
                jd.href = jdUrl[5];
                dd.href = dangUrl[5];
                aUrl.href = amaUrl[5];
                writerintro.innerHTML = ahthor[5];
                bookintro.innerHTML = bookIntro[5];
            });
            btn7.addEventListener('click', function () {
                samePhoto.src = arr1[6];
                samewriter.innerHTML = arr4[6];
                samebookname.innerHTML = arr3[6];
                pub.innerHTML = publish[6];
                pubDate.innerHTML = timename[6];
                booknum.innerHTML = booknumber[6];
                bookposition.innerHTML = positionname[6];
                douban.href = doubanUrl[6];
                zhi.href = zhiUrl[6];
                jd.href = jdUrl[6];
                dd.href = dangUrl[6];
                aUrl.href = amaUrl[6];
                writerintro.innerHTML = ahthor[6];
                bookintro.innerHTML = bookIntro[6];
            });
            btn8.addEventListener('click', function () {
                samePhoto.src = arr1[7];
                samewriter.innerHTML = arr4[7];
                samebookname.innerHTML = arr3[7];
                pub.innerHTML = publish[7];
                pubDate.innerHTML = timename[7];
                booknum.innerHTML = booknumber[7];
                bookposition.innerHTML = positionname[7];
                douban.href = doubanUrl[7];
                zhi.href = zhiUrl[7];
                jd.href = jdUrl[7];
                dd.href = dangUrl[7];
                aUrl.href = amaUrl[7];
                writerintro.innerHTML = ahthor[7];
                bookintro.innerHTML = bookIntro[7];
            });
            function marksocre(mark1) {
                var str = '';
                for (var i = 1; i <= mark1; i++) {
                    str = str + '★';
                }
                var j = str.length;
                while (j != 5) {
                    str = str + '☆';
                    j = str.length;
                }
                return str;
            }
            for (var i = 0; i < arr1.length; i++) {
                photo[i].src = arr1[i];
                mark[i].innerHTML = marksocre(arr2[i]);
                book[i].innerHTML = arr3[i];
                people[i].innerHTML = arr4[i];
            };



        },
        error: function () {
            alert('error');
        }
    });
    var appeartext = document.getElementById('search');
    // 1.失去焦点搜索框字消失
    appeartext.onfocus = function () {
        if (appeartext.placeholder === '请搜索') {
            this.placeholder = '';
        }
        this.style.color = '#333'
    }
    appeartext.onblur = function () {
        if (this.placeholder === '') {
            this.placeholder = '请搜索'
        }
        this.style.color = '#979797'
    }
    // 2.点击❌详情页关闭
    var close = this.document.querySelector('.closeagain');
    var chan1 = document.getElementById('btn1');
    var chan2 = document.getElementById('btn2');
    var chan3 = document.getElementById('btn3');
    var chan4 = document.getElementById('btn4');
    var chan5 = document.getElementById('btn5');
    var chan6 = document.getElementById('btn6');
    var chan7 = document.getElementById('btn7');
    var chan8 = document.getElementById('btn8');
    var detail = document.querySelector('.particulars');
    close.addEventListener('click', function () {
        var detail = document.querySelector('.particulars');
        detail.style.visibility = 'hidden';
        detail.style.transition = ' none';
        detail.style.width = '0';
        detail.style.opacity = '0';
    })
    // 3.获取书本信息过渡  
    detail.style.width = '0';
    detail.style.opacity = '0';
    function detailappear() {
        detail.style.opacity = '1';
        detail.style.visibility = 'visible';
        detail.style.hight = '100%';
        detail.style.width = '100%';
        detail.style.transition = ' all 1s ease';
    }
    chan1.onclick = detailappear;
    chan2.onclick = detailappear;
    chan3.onclick = detailappear;
    chan4.onclick = detailappear;
    chan5.onclick = detailappear;
    chan6.onclick = detailappear;
    chan7.onclick = detailappear;
    chan8.onclick = detailappear; 
}
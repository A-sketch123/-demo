window.onload = function () {
   $.ajax({
      url: 'http://vtmer.cn/class',
      dataType: 'json',
      type: 'POST',
      success: function (data) {
         var json = eval(data.bookclass[0]);
         var arr1 = [];
         var arr2 = [];
         var arr3 = [];
         var arr4 = [];
         var photo = [];
         var mark = [];
         var book = [];
         var people = [];
         for (var i = 0; i < 8; ++i) {
            arr1.push(json.bookInfo[i].cover);
            arr2.push(json.bookInfo[i].socre);
            arr3.push(json.bookInfo[i].title);
            arr4.push(json.bookInfo[i].author);
            photo.push(document.getElementsByTagName('img')[i + 6]);
            mark.push(document.getElementsByTagName('p')[3 * i]);
            book.push(document.getElementsByTagName('p')[3 * i + 1]);
            people.push(document.getElementsByTagName('p')[3 * i + 2]);
         }
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
         mark[0].innerHTML = marksocre(arr2[0]);
         book[0].innerHTML = arr3[0];
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
}
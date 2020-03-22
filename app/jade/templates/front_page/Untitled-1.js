//  Calendar
function Calendar3(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),
        D = new Date(year,month,Dlast),
        DNlast = D.getDay(),
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
        calendar = '<tr>',
        m = document.querySelector('#'+id+' option[value="' + D.getMonth() + '"]'),
        g = document.querySelector('#'+id+' input');
    if (DNfirst != 0) {
      for(var  i = 1; i < DNfirst; i++) calendar += '<tdclass="date_fields">';
    }else{
      for(var  i = 0; i < 6; i++) calendar += '<td>';
    }
    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today date_field">' + i;
      }else{
        if (  // список официальных праздников
            (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
            (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новий Рік
            ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новий Рік
            (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Різдво
            (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // 8 Березня
            (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // 1 травня
            (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) // День Перемоги
           ) {
          calendar += '<td class="holiday date_fields">' + i;
        }else{
          calendar += '<td class="date_fields">' + i;
        }
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    g.value = D.getFullYear();
    m.selected = true;
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
    document.querySelector('#'+id+' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)';
    }
    Calendar3("calendar3",new Date().getFullYear(),new Date().getMonth());
    document.querySelector('#calendar3').onchange = function Kalendar3() {
      Calendar3("calendar3",document.querySelector('#calendar3 input').value,parseFloat(document.querySelector('#calendar3 select').options[document.querySelector('#calendar3 select').selectedIndex].value));
    }

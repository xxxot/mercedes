$(document).ready(function () {
  var f = ['Maja', 'Marcela', 'Ula', 'Gosia'];
  var m = ['Dawid', 'Darek', 'Młody'];

  const COLUMNS = 4;
  var ludzie = m.concat(f);

  $('#generuj').click(function () {
    generate();
  });

  function generate() {
    var special = [];
    var tempLudzie = m.slice();
    while (special.length < COLUMNS) {
      tempLudzie = shuffle(tempLudzie);
      var czlowiek = tempLudzie.shift();
      if (special.length == COLUMNS - 1) {
        czlowiek = special[0];
      }

      special.push(czlowiek);

      if (tempLudzie.length === 0) {
        tempLudzie = m.slice();
      }
    }

    var order = [];
    tempLudzie = ludzie.slice();

    for (var i = 0; i < COLUMNS; i++) {
      while (true) {
        tempLudzie = shuffle(tempLudzie);
        if (tempLudzie[0] !== special[i]) {
          var czlowiek = tempLudzie.shift();
          order.push(czlowiek);
          break;
        }
      }
      if (tempLudzie.length === 0) {
        tempLudzie = ludzie.slice();
      }
    }

    var order2 = [];
    tempLudzie = ludzie.slice();

    for (var i = 0; i < COLUMNS; i++) {
      while (true) {
        tempLudzie = shuffle(tempLudzie);
        if (tempLudzie[0] !== special[i] && tempLudzie[0] !== order[i]) {
          var czlowiek = tempLudzie.shift();
          order2.push(czlowiek);
          break;
        }
      }
      if (tempLudzie.length === 0) {
        tempLudzie = ludzie.slice();
      }
    }

    var order3 = [];
    tempLudzie = ludzie.slice();

    for (var i = 0; i < COLUMNS; i++) {
      while (true) {
        tempLudzie = shuffle(tempLudzie);
        if (tempLudzie[0] !== special[i] && tempLudzie[0] !== order[i] && tempLudzie[0] !== order2[i]) {
          var czlowiek = tempLudzie.shift();
          order3.push(czlowiek);
          break;
        }
      }
      if (tempLudzie.length === 0) {
        tempLudzie = ludzie.slice();
      }
    }

    var order4 = [];
    tempLudzie = ludzie.slice();

    for (var i = 0; i < COLUMNS; i++) {
      var count = 0;
      while (true) {
        count++;
        if (count > 20) {
          generate();
          return;
        }
        tempLudzie = shuffle(tempLudzie);
        if (tempLudzie[0] !== special[i] && tempLudzie[0] !== order[i] && tempLudzie[0] !== order2[i] && tempLudzie[0] !== order3[i]) {
          var czlowiek = tempLudzie.shift();
          order4.push(czlowiek);
          break;
        }
      }
      if (tempLudzie.length === 0) {
        tempLudzie = ludzie.slice();
      }
    }

    var order5 = [];
    tempLudzie = ludzie.slice();

    for (var i = 0; i < COLUMNS; i++) {
      var count = 0;
      while (true) {
        count++;
        if (count > 20) {
          generate();
          return;
        }
        tempLudzie = shuffle(tempLudzie);
        if (tempLudzie[0] !== special[i] && tempLudzie[0] !== order[i] && tempLudzie[0] !== order2[i] && tempLudzie[0] !== order3[i] && tempLudzie[0] !== order4[i]) {
          var czlowiek = tempLudzie.shift();
          order5.push(czlowiek);
          break;
        }
      }
      if (tempLudzie.length === 0) {
        tempLudzie = ludzie.slice();
      }
    }

    var order6 = [];
    tempLudzie = ludzie.slice();

    for (var i = 0; i < COLUMNS; i++) {
      var count = 0;
      while (true) {
        count++;
        if (count > 20) {
          generate();
          return;
        }
        tempLudzie = shuffle(tempLudzie);
        if (tempLudzie[0] !== special[i] && tempLudzie[0] !== order[i] && tempLudzie[0] !== order2[i] && tempLudzie[0] !== order3[i] && tempLudzie[0] !== order4[i] && tempLudzie[0] !== order5[i]) {
          var czlowiek = tempLudzie.shift();
          order6.push(czlowiek);
          break;
        }
      }
      if (tempLudzie.length === 0) {
        tempLudzie = ludzie.slice();
      }
    }

    for (var i = 0; i < COLUMNS; i++) {
        $('tr').eq(1).find('td').eq(i + 1).text(order[i]);
        $('tr').eq(2).find('td').eq(i + 1).text(order2[i]);
        $('tr').eq(3).find('td').eq(i + 1).text(order3[i]);
        $('tr').eq(4).find('td').eq(i + 1).text(order4[i]);
        $('tr').eq(5).find('td').eq(i + 1).text(order5[i]);
        $('tr').eq(6).find('td').eq(i + 1).text(special[i]);
        $('tr').eq(7).find('td').eq(i + 1).text(order6[i]);
    }
  }

  $('#kopiuj').click(function () {
    var wynikTekstowy = '';

    var nazwyKolumn = [];
    $('thead th').each(function() {
      var nazwaKolumny = $(this).text();
      nazwyKolumn.push(nazwaKolumny);
    });    
    wynikTekstowy += nazwyKolumn.join('\t') + '\n';

    $('#siedzenia tbody tr').each(function () {
      var nazwaWiersza = $(this).find('td:first-child').text();
      var wiersz = [nazwaWiersza];
      $(this).find('td:not(:first-child)').each(function () {
        var zawartosc = $(this).text() || '-';
        wiersz.push(zawartosc);
      });
      wynikTekstowy += wiersz.join('\t') + '\n';
    });

    var textarea = document.createElement('textarea');
    textarea.value = wynikTekstowy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Wyniki zostały skopiowane do schowka.');
  });
  
  $('#data').text((new Date()).toLocaleDateString('pl-PL'));
  
});

function shuffle(lista) {
  var licznik = lista.length;

  while (licznik > 0) {
    var index = Math.floor(Math.random() * licznik);

    licznik--;

    var temp = lista[licznik];
    lista[licznik] = lista[index];
    lista[index] = temp;
  }

  return lista;
}


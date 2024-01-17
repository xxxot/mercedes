$(document).ready(function () {
  var f = ['Agnieszka', 'Justyna', 'Paulina', 'Gosia'];
  var m = ['Rafał', 'Darek', 'Szymon'];

  const COLUMNS = 4;
  var ludzie = m.concat(f);
	
	checking();
	
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
  $('#a1, #a2, #a3').on('click', function(){
	  checking();
  });

	function checking() {
		var a1Check = $('#a1').is(':checked');
		var a2Check = $('#a2').is(':checked');
		var a3Check = $('#a3').is(':checked');
		
		if (a1Check == true)
		{
			$('#czas1').text('6-8');
			$('#czas2').text('8-10');
			$('#czas3').text('10-12');
			$('#czas4').text('12-14');
		}
		else if (a2Check == true)
		{
			$('#czas1').text('14-16');
			$('#czas2').text('16-18');
			$('#czas3').text('18-20');
			$('#czas4').text('20-22');
		}
		else if (a3Check == true)
		{
			$('#czas1').text('22-24');
			$('#czas2').text('00-02');
			$('#czas3').text('02-04');
			$('#czas4').text('04-06');
		}		
	}
  
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

/*
	$('#a1 ,#a2 , #a3').on('click' , function(){
    var $a1Check  = $('#a1').is(':checked');
    var $a2Check  = $('#a2').is(':checked');
    var $a3Check  = $('#a3').is(':checked');
    if($a1Check)
	{
       
    }
    else if($a2Check)
	{
        
    }    
    else if($a3Check) 
	{
        
    }};
*/


	


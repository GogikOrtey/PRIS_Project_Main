var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/php/getdata_2.php', true);
xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) {
    alert('Ошибка: ' + xhr.status + ': ' + xhr.statusText);
  } else {
    console.log(xhr.responseText);
  }
};

xhr.onerror = function() {
  alert('Запрос не удался');
};

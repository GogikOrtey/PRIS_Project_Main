<?php
$servername = "gogortv0.beget.tech";
$username = "gogortv0_plants1";
$password = "5*CdHns2"; 
$dbname = "gogortv0_plants1";

// Создание соединения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
  die("Ошибка подключения: " . $conn->connect_error);
}
echo "Успешное подключение";
?> 
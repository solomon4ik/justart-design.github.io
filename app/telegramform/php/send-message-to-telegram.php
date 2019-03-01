<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['name']) && !empty($_POST['phone'])){
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "Ім'я клієнта: ";
  }
}

if (isset($_POST['phone'])) {
  if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phoneFieldset = "Телефон: ";
  }
}
if (isset($_POST['email'])) {
  if (!empty($_POST['email'])){
  $email = strip_tags($_POST['email']);
  $emailFieldset = "Email: ";
  }
}
if (isset($_POST['message'])) {
  if (!empty($_POST['message'])){
  $message = strip_tags($_POST['message']);
  $messageFieldset = "Тема: ";
  }
}
$token = "786554058:AAHOJnGbmftXwxlH3rFhNCIZ4G4-yaAMZDE";
$chat_id = "-330131750";
$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $emailFieldset => $email,
  $messageFieldset => $message
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
 
  echo '<p class="success">Дякую за відправку, ми з"яжемось з Вами найближчим часом!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Помилка. Повідомлення не надіслано!</b></p>';
}
} else {
  echo '<p class="fail">Будь ласка заповніть усі поля!</p>';
}
} else {
header ("Location: /");
}

?>
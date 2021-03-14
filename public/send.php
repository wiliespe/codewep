<?php 
$destination= "info@codewep.com";
$name= $_POST["name"];
$email= $_POST["email"];
$subject= $_POST["subject"];
$message= $_POST["message"];

$content= "Nombre: " . $name . "\nAsunto: " . $subject . "\nEmail: " . $email . "\nMensaje: " . $message;

mail($destination, "Contacto Codewep Dessarrollo Web", $content);

echo '<script type="text/javascript">alert("!Ehorabuena el mensaje ha sido enviado con éxito¡")
  window.location.href="index.html";
 </script>';

?>
<?php

$recipient = 'mail@albert-wissigkeit.de';

if (empty($recipient)) {
    die("Bitte geben Sie die E-Mail-Adresse in Zeile 5 an.");
}

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;

        $subject = "Contact From " . $_POST['name'];
        $headers = "From: " . $_POST['email'];

        mail($recipient, $subject, $_POST['message'], $headers);

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
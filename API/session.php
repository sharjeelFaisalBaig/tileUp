<?php
require 'vendor/autoload.php';
require 'credentials.php';

$gEmail = 'sharjeelFaisalBaig@gmail.com';
$gPass = 'sharjeelFaisalBaig10365';
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
try {
    //Server settings
    // $mail->SMTPDebug = 3;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = $gEmail;                     // SMTP username
    $mail->Password   = $gPass;                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    if (isset($phpForm['attachment'])) {
        for ($i = 0; $i < count($phpForm['attachment']); $i++) {
            $mail->addAttachment('attachments/' . $phpForm['attachment'][$i]['fileName']);
        }
    }
    //Recipients
    $mail->setFrom($gEmail, 'Tile-up');
    $mail->addAddress($gEmail, 'Tile-up');     // Add a recipient
    $mail->addReplyTo($senderEmail);

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New Order -TileUp';
    $mail->Body = "
        <div class='header-custom email-signup-thankyou' style='border: 20px dashed #ff8100;background: #000000c7;padding: 31px;color: white;font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size: 17px;'>
            <div class='content' style='text-align: center;'>
                <div class='left-hole'></div>
                <div class='right-hole'></div>
                <div class='main-content'>
                <h1>Offer Availing Request</h1>
                <h6 style='font-size: 25px;padding: 0px !important;font-family: system-ui;margin: 0;font-weight: 700;color: #eb7f25;letter-spacing: 3px;'>@Tile-up</h6>
            </div>
            <div class='content' style='text-align: left !important;'>
                <ul>
                    <li class='titleBefore'><span style='color: #cdcdce;font-size: 18px;margin-right: 22px;font-weight: 500;'>Name:</span> <strong></strong></li>
                    <li class='titleBefore  '><span style='color: #cdcdce;font-size: 18px;margin-right: 22px;font-weight: 500; '>Sender Email: </span> <strong style='color: #eb7f25;'></strong></li>
                    <li class='titleBefore'><span style='color: #cdcdce;font-size: 18px;margin-right: 22px;font-weight: 500;'>Contact Number: </span> <strong></strong></li>
                </ul>
                </div>
            </div>
        </div>
    ";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    $status = [
        'status' => 'success'
    ];

    $statusJson = json_encode($status);
    echo $statusJson;
} catch (Exception $e) {
    $status = [
        'status' => 'failiure',
        'error' => $mail->ErrorInfo
    ];
    $statusJson = json_encode($status);
    echo $statusJson;
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

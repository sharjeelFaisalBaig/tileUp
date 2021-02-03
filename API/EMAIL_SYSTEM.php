<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// Instantiation and passing `true` enables exceptions
require 'cors.php';
if (isset($_GET['key'])) {
    if ($_GET['key'] == 'XXXXXXXXXXXXXXXXXXZAKTILE1926192012sdhsajdhsadjisajdisadksaoeowque843psadTilesdsdsdUP') {
        if (file_get_contents('php://input')) {
            $phpForm = json_decode(file_get_contents('php://input'), true);
            require 'vendor/autoload.php';
            $mail = new PHPMailer(true);
            try {
                //Server settings
                $gEmail = 'sharjeelFaisalBaig@gmail.com';
                $gPass = 'rizwan10365';
                // $mail->SMTPDebug = 3;                      // Enable verbose debug output
                $mail->isSMTP();                                            // Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = $gEmail;                     // SMTP username
                $mail->Password   = $gPass;                               // SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
                // if (isset($phpForm['attachment'])) {
                //     for ($i = 0; $i < count($phpForm['attachment']); $i++) {
                //         $mail->addAttachment('attachments/' . $phpForm['attachment'][$i]['fileName']);
                //     }
                // }
                
                //Recipients
                $mail->setFrom($gEmail, 'Tile-up');
                $mail->addAddress($gEmail, 'Tile-up');     // Add a recipient
                // $mail->addReplyTo($phpForm['emailOfUser']);

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
                            <li class='titleBefore'><span style='color: #cdcdce;font-size: 18px;margin-right: 22px;font-weight: 500;'>Name:</span> <strong>{$phpForm['nameOfUser']}</strong></li>
                            <li class='titleBefore  '><span style='color: #cdcdce;font-size: 18px;margin-right: 22px;font-weight: 500; '>Email: </span> <strong style='color: #eb7f25;'>{$phpForm['emailOfUser']}</strong></li>
                            <li class='titleBefore'><span style='color: #cdcdce;font-size: 18px;margin-right: 22px;font-weight: 500;'>Contact Number: </span> <strong>{$phpForm['phonenumberOfUser']}</strong></li>
                            <li class='titleBefore'><span style='color: #cdcdce;font-size: 18px;margin-right: 22px;font-weight: 500;'>State Address: </span> <strong>{$phpForm['stateOfUser']}</strong></li>
                            <li class='titleBefore'><span style='color: #cdcdce;font-size: 18px;margin-right: 22px;font-weight: 500;'>Town Address: </span> <strong>{$phpForm['townOfUser']}</strong></li>
                            <li class='titleBefore'><span style='color: #cdcdce;font-size: 18px;margin-right: 22px;font-weight: 500;'>Street Address: </span> <strong>{$phpForm['add1OfUser']}</strong></li>
                        </ul>
                        </div>
                    </div>
                    <div style='width:100%;over-flow:auto;'>
                        <table>
                            <thead>
                                <th>Sr. No</th>
                                <th>Image name</th>
                                <th>Image Frame Style</th>
                                <th>Actions</th>
                            </thead>
                            <tbody>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tbody>
                        </table>
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
        }
    } else {
        echo json_encode(['status' => 'failiure', 'message' => 'Try to hit TILE-UP API insecurely ACCESS TOKEN WRONG']);
    }
} else {
    echo json_encode(['status' => 'failiure', 'message' => 'Try to hit TILE-UP API insecurely ACCESS TOKEN MISSING']);
}
?>
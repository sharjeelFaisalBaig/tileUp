<?php
require('session.php');
if (isset($_GET['AccessToken'])) {
    if ($_GET['AccessToken'] == 'XXXXXXXXXXXXXXXXXXZAKTILE1926192012sdhsajdhsadjisajdisadksaoeowque843psad') {
        include('cors.php');
        if (isset($_FILES['attachment0']) && isset($_POST['name'])) {
            $success = array();
            $Failiure = array();
            $Images = array();
            $name = $_POST['name'];
            $email = $_POST['email'];
            $code = md5(sha1(base64_encode("{$_POST['name']}-{$_POST['email']}")));
            if (!file_exists('attachments/' . date('d_m_y'))) {
                mkdir('attachments/' . date('d_m_y'), 0777);
            }
            for ($i = 0; $i < count($_FILES); $i++) {
                $fileGet = $_FILES['attachment' . $i]['name'];
                $ext = pathinfo($fileGet, PATHINFO_EXTENSION);
                if (!move_uploaded_file($_FILES['attachment' . $i]['tmp_name'], 'attachments/' . date('d_m_y') . '/' . date('h_i_s') . '-' . $code . '-'  . $fileGet)) {
                    array_push($Failiure, ['filePath' => $_FILES['attachment' . $i]['tmp_name'], 'fileName' => $_FILES['attachment' . $i]['name'], 'fileExtention' => $ext]);
                } else {
                    array_push($Images, ['attachments/' . date('d_m_y') . '/' . date('h_i_s') . '-|' . $code . '|'  . $fileGet]);
                }
            }
            $imageJson = json_encode($Images);
            // DB CONNECTIONS CRITERA
            $host = 'localhost';
            $user = 'root';
            $pass = '';
            $db = 'tileup';
            $conn = new mysqli($host, $user, $pass, $db);
            if ($conn->connect_error) {
                echo json_encode(['status' => 'failed', 'error' => 'database connection error']);
                die();
            } else {
                $insertQuery = "INSERT INTO `tu_orders`(`tu_o_name`, `tu_o_email`, `tu_o_code`, `tu_o_files`) VALUES ('{$name}','{$email}','{$code}','{$imageJson}')";
                if (!$conn->query($insertQuery)) {
                    array_push($Failiure, ['status' => 'failed', 'error' => 'database Query error']);
                }
            }
            if (empty($Failiure)) {
                echo json_encode(['status' => 'success', 'message' => 'Files Uploaded Successfully', 'USER_CODE' => $code]);
            } else {
                echo json_encode(['status' => 'failiure', 'message' => 'Issue with following files', 'files' => $Failiure]);
            }
        } else {
            echo json_encode(['status' => 'warning', 'message' => 'Try to hit TILE-UP API insecurely REQUEST NONE']);
        }
    } else if ($_GET['AccessToken'] == 'XXXXXXXXXXXXXXXXXXZAKTILE1926192012sdhsajdhsadjisajdisadksaoeowque843psadUDERPsdsss') {
        include('cors.php');
        if (isset($_FILES['attachment0']) && isset($_POST['name'])) {
            $success = array();
            $Failiure = array();
            $Images = array();
            $name = $_POST['name'];
            $email = $_POST['email'];
            $code = md5(sha1(base64_encode("{$_POST['name']}-{$_POST['email']}")));
            if (!file_exists('underProcess/' . date('d_m_y'))) {
                mkdir('underProcess/' . date('d_m_y'), 0777);
            }
            for ($i = 0; $i < count($_FILES); $i++) {
                $fileGet = $_FILES['attachment' . $i]['name'];
                $ext = pathinfo($fileGet, PATHINFO_EXTENSION);
                if (!move_uploaded_file($_FILES['attachment' . $i]['tmp_name'], 'underProcess/' . date('d_m_y') . '/' . date('h_i_s') . '-' . $code . '-'  . $fileGet)) {
                    array_push($Failiure, ['filePath' => $_FILES['attachment' . $i]['tmp_name'], 'fileName' => $_FILES['attachment' . $i]['name'], 'fileExtention' => $ext]);
                } else {
                    array_push($Images, ['http://' . $_SERVER['HTTP_HOST'] . '/zak' . '/' . 'API/' . 'underProcess/' . date('d_m_y') . '/' . date('h_i_s') . '-' . $code . '-'  . $fileGet]);
                }
            }
            $imageJson = json_encode($Images);
            $code = 'UNDER-PROCESS-' . $code;
            $_SESSION['CurrCode'] = $code;
            $_SESSION['images'] = $Images;
            $_SESSION['name'] = $name;
            $_SESSION['email'] = $email;
            if (empty($Failiure)) {
                echo json_encode(['status' => 'success', 'message' => 'Files Uploaded Successfully', 'uNDER_SESSION_CODE' => $_SESSION['CurrCode'], 'fILES' => $imageJson, 'session' => session_id()]);
            } else {
                echo json_encode(['status' => 'failiure', 'message' => 'Issue with following files', 'files' => $Failiure]);
            }
        } else {
            echo json_encode(['status' => 'warning', 'message' => 'Try to hit TILE-UP API insecurely REQUEST NONE']);
        }
    } else {
        echo json_encode(['status' => 'warning', 'message' => 'Try to hit TILE-UP API insecurely ACCESS TOKEN WRONG']);
    }
} else {
    echo json_encode(['status' => 'warning', 'message' => 'Try to hit TILE-UP API insecurely ACCESS TOKEN MISSING']);
}

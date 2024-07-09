<?php
session_start();
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access_Control-Allow-Origin: *');
header('Access_Control-Allow-Methods: POST');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] !== "POST") {
    http_response_code(403); // Send a 403 Forbidden status code
    die(json_encode(["message" => "Forbidden - You are not authorized to view this page"]));
}

$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'];
$name = $data['name'];
$message = $data['message'];

//write code to enter this data into database

$host = 'localhost';
$username = 'yash';
$password = 'yashserversqlphpmyadmin';
$database = 'contactform';

// $host = 'localhost';
// $username = 'root';
// $password = '';
// $database = 'contactform';

$conn = mysqli_connect($host, $username, $password, $database);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = 'INSERT INTO portfolio (name, email, message) VALUES (?, ?, ?)';
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "sss", $name, $email, $message);

if (mysqli_stmt_execute($stmt)) {
    
    mysqli_stmt_close($stmt);
    mysqli_close($conn);

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'us2.smtp.mailhostbox.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'yash@profolio.tech';                     //SMTP username
        $mail->Password   = 'xpIOcZo0';                               //SMTP password
        $mail->SMTPSecure = 'tls';                                      //Enable implicit TLS encryption
        $mail->Port       = 587;  //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        
        $date = date('Y-m-d');

        //Recipients
        $mail->setFrom('yash@profolio.tech', 'Profolio');
        $mail->addAddress($email, $name);     //Add a recipient
        $mail->addCC('yaggarwal426@gmail.com');

        //Content
        $thisdate = date('Y-m-d');
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Profolio : Contact Request';
        $mail->Body    = "
        <html lang='en'>
        <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Contact Form</title>
        <style>
            /* Reset some default styles */
            body, p {
            margin: 0;
            padding: 0;
            }

            body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            }

            .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
            }

            p {
            font-size: 16px;
            margin-bottom: 20px;
            line-height: 1.6;
            }

            .message {
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 5px;
            }

            .info {
            margin-top: 30px;
            font-size: 14px;
            color: #666;
            }

            @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            h1 {
                font-size: 20px;
            }
            p {
                font-size: 14px;
            }
            }
        </style>
        </head>
        <body>
        <div class='container'>
            <h1>Thank You for Contacting Us!</h1>
            <p>Dear " . "$name" . ",</p>
            <p>We've received your message and we appreciate you reaching out to us. Here's a summary of your inquiry:</p>
            <div class='message'>
            <p><strong>Name:</strong>" . " $name" . "</p>
            <p><strong>Email:</strong>" . " $email" . "</p>
            <p><strong>Message:</strong>" . " $message" . "</p>
            <p><strong>Date:</strong>" . " $date" . "</p>
            </div>
            <p>We'll get back to you as soon as possible. If you have any further questions or concerns, feel free to contact us.</p>
            <p class='info'>This is an automated response. Please do not reply to this email.</p>
        </div>
        </body>
        </html>
        ";

        $mail->AltBody = " 
        Dear" . "$name" . ",

        We've received your message and we appreciate you reaching out to us. Here's a summary of your inquiry:

        Name:" . "$name" . "
        Email:" . "$email" . "
        Message:" . "$message" . "
        Date:" . "$date" . "
        We'll get back to you as soon as possible. If you have any further questions or concerns, feel free to contact us.

        This is an automated response. Please do not reply to this email.

        Best regards,
        Profolio.tech
        ";

        $mail->send();
        die(json_encode("success"));
        session_destroy();

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

}else{
    die(json_encode("error"));
}
?>

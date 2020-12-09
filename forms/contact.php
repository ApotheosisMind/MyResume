<?php
if(isset($_POST['name']) &&  isset($_POST['email'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject1 = $_POST['subject'];
  $to = 'hello@mehdev.club';
  $subject = "Contact us response from TPW website";
  $body = '
  
  
  Name : '.$name.'
  Email : '.$email.'
  Subject : '.$subject1.'
  Message : '.$message.'
  ';

  $headers = "From: ".$name."<".$email.">\r\n";
  $headers .="Reply-To: ".$email."\r\n";
  $headers .= "MINE-Version:1.0\r\n";
  $headers .="Content type:text/html; charset=utf-8";

  $send = mail($to, $subject, $body, $headers);
   if($send){
    echo '<script>alert("Thank you for contacting us. We will reach you shortly:)")</script>'; 

   }else{
     echo '<script>alert("Error")</script>';
   }
}
?>

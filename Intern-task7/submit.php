<?php

if (isset($_POST['submit'])){
    
    function test_input($data){
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }

    $name = test_input($_POST['name']);
    $email = test_input($_POST['email']);
    $contact = test_input($_POST['contact']);
    $location = test_input($_POST['Home_location']);
    $address = test_input($_POST['address']);



    
    $to='your-email@gmail.com';
    $subject ='Contact Form';
    $message ="Form details below."."\n\n"."Name: ".$name."\n"."Email: ".$email."\n"."Contact Number: ".$contact."\n"."Home Location: ".$location."\n"."Address: ".$address;
    $headers="From: ".$email;

    if(mail($to,$subject,$message,$headers)){
        echo "<script type='text/javascript'> 
                alert('Form data is Submitted Succesfull'); 
            </script>" ;
        echo "<a href=index.html>CLICK TO FILL DIFFERENT RESPONSE</a>";
    }
    else {
        echo "something went wrong";
    }
}

?>
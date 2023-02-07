<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>3-2-2</title>
    </head>
    <body>   

        <form action="" method="post">
            <?php
            $postalCode = $_POST['postalCode'] ?? "";
            $address = $_POST['address'] ?? "";
            $name = $_POST['name'] ?? "";
            ?>
            郵便番号：<?=$postalCode?><br>
            住所：<?=$address?><br>
            氏名：<?=$name?><br>
            <br>
            <input type="submit">      
        </form>
    </body>
</html>

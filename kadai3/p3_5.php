<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>3-5</title>
    </head>
    <body>   
        <table border="1">
            
            <?php
            $data = ["yamanashi", "tokyo", "akita", "oosaka"];
            foreach ($data as $v) {
                echo $v;
                echo "<br>";
            }
            ?>
        </table>
        
    </body>
</html>


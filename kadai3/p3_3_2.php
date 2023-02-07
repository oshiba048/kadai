<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>3-3-2</title>
    </head>
    <body>   

        <form action="" method="post">
            <?php
            foreach ($_POST['field'] as $item){
                echo $item."<br>";
            }
            echo "が選択されました。"
            ?>  
        </form>
    </body>
</html>

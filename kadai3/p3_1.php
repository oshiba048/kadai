<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>3-1</title>
    </head>
    <body>   
        
        <?php
        if(isset($_POST['answer'])){
            switch($_POST['answer']){
                case "yes" : echo "それは柴犬ですか？"; break;
                case "no"  : echo "犬より猫の方が好きですか？"; break;
            }
        }
        else {
            echo "あなたは犬を飼っていますか?";
        }
        ?>
        
        <form action="" method="post">
            <input type="radio" name="answer" value="yes">はい<br>
            <input type="radio" name="answer" value="no">いいえ<br>
            <input type="submit">
        </form>
        
        
    </body>
</html>

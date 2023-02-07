<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>3-4-2</title>
    </head>
    <body>   
        
        <?php
        $link="";
        switch ($_POST['gakka']){
            case '情報システム科' : $link="http://www.suntech.ac.jp/course/it.html"; break;
            case 'マルチメディア科' : $link="http://www.suntech.ac.jp/course/mm.html"; break;
            case 'コンピュータ・コミュニケーション科' : $link="http://www.suntech.ac.jp/course/cc.html"; break;
        }
        ?>
        
        <a href="<?=$link?>"><?=$_POST['gakka']?></a>

    </body>
</html>

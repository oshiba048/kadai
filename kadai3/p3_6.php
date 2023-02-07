<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>3-6</title>
    </head>
    <body>   
        <table border="1">
            <tr>
                <th>科目名</th>
                <th>単位数</th>
            </tr>
            
            <?php
            $data = [
                "情報数学" => 2,
                "コンピュータグラフィック演習" => 2,
                "Webアプリケーション演習Ⅰ" => 4,
                "ゲームプログラミング演習Ⅱ" => 2
            ];
            foreach ($data as $k => $v) {
                echo "<tr>";
                echo "<td>{$k}</td>";
                echo "<td>{$v}</td>";
                echo "<tr>";
            }
            ?>
        </table>
        
    </body>
</html>


    <!DOCTYPE html>
    <html>

    <head>
        <title>Ch 5 Lesson 4</title>

    </head>

    <body>
        <h1>PHP Arrays</h1>

        <?php

        /*
			
2. Associative array - uses name / value pairs. Named Keys
3. Multidimensional array - arrays with arrays inside of it.
1. Indexed array - numbered array.

*/

        $assocArray = array("Louisa" => "24", "Aaron" => "25", "Mary" => "20");

        echo "Louisa's math grade: " . $assocArray[0] . "<br>";

        echo count($assocArray);


        ?>

    </body>

    </html>
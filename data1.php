<?php
    // open mysql connection
    $host = "localhost";
    $username = "sangi";
    $password = "k_4d29/vX-.Q6k_p";
    $dbname = "test";
    $con = mysqli_connect($host, $username, $password, $dbname) or die('Error in Connecting: ' . mysqli_error($con));

    // use prepare statement for insert query
    $st = mysqli_prepare($con, 'INSERT INTO capsules(id,status,type,serial,reuse_count, water_landings,land_landings,last_update) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');

    // bind variables to insert query params
    mysqli_stmt_bind_param($st, 'ssssiiis', $id, $status,$type,$serial,$reuse_count, $water_landings,$land_landings,$last_update);

    // read json file
    $filename = 'AllCapsules.json';
    $json = file_get_contents($filename);   

    //convert json object to php associative array
    $data = json_decode($json, true);

    // loop through the array
    foreach ($data as $row) {
        // get the employee details
        $id = $row['id'];
        $status = $row['status'];
        $type = $row['type'];
        $serial = $row['serial'];
        $reuse_count = $row['reuse_count'];
        $water_landings = $row['water_landings'];
        $land_landings = $row['land_landings'];
        $last_update = $row['last_update'];
        
        
        // execute insert query
        mysqli_stmt_execute($st);
    }
    
    //close connection
    mysqli_close($con);
?>
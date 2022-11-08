<?php
include_once("core.php");
$servername="localhost";
$username="sangi";
$password="k_4d29/vX-.Q6k_p";
$dbname="test";
$connection=mysqli_connect($servername,$username,$password,$dbname);

$status = $_POST['Status'];
$type = $_POST['Type'];
if($status)
{
$sql=" select * from capsules where status='$status' ";
}
else
{
$sql=" select * from capsules where type='$type' ";
}

$result=mysqli_query($connection,$sql);
$json_array=array();
if(mysqli_num_rows($result)>0){
while($row=mysqli_fetch_assoc($result)) {
$json_array[]=$row;
}
}
echo json_encode($json_array);

mysqli_close($connection);
?>
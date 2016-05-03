<?php
include_once "config.php";

switch ($_REQUEST['exec'])
{
	case "insert_nick" :
		$nickname	= $_REQUEST['nickname'];

		$nick_query 		= "SELECT * FROM ".$_gl['nick_info']." WHERE nickname='".$nickname."'";
		$nick_result 			= mysqli_query($my_db, $nick_query);
		$nick_cnt				= mysqli_num_rows($nick_result);

		if ($nick_cnt > 0)
		{
			$flag = "D";
		}else{
			$query 		= "INSERT INTO ".$_gl['nick_info']."(nickname, ip_addr, regdate) values('".$nickname."','".$_SERVER['REMOTE_ADDR']."','".date("Y-m-d H:i:s")."')";
			$result 	= mysqli_query($my_db, $query);

			if ($result)
				$flag = "Y";
			else
				$flag = "N";
		}
		echo $flag;

	break;
}
?>
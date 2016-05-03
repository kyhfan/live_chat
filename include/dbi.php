<?
    /******************************************************************************
     *
     * dbi.php
     *
     * Configuration file
     *
     * Created : 2014
     *
     ******************************************************************************/

	//$my_db = new mysqli("서버명", "아이디", "비밀번호", "DB명");
	$my_db = new mysqli("localhost", "root", "7alslqjxkdlwld@%*)1590", "live_chat");
	if (mysqli_connect_error()) {
		exit('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error());
	}
?>

<?
	// DB에서 컨텐츠 불러오는 함수
	function load_contents($cate1)
	{
		global $_gl;
		global $my_db;

		$main_query	= "SELECT cate0,cate2, cate3, contents FROM ".$_gl['hanssem_site_info_table']." WHERE cate1='".$cate1."' AND viewYN='Y' ORDER BY cate3 ASC";
		$main_result	= mysqli_query($my_db, $main_query);

		while ($main_data	= mysqli_fetch_array($main_result))
		{
			$main_info[$main_data['cate0']][$main_data['cate2']][]	= $main_data['contents'];
			//$main_info[$main_data['cate0']][$main_data['cate2']][]	= $main_data['cate3'];
		}
		return $main_info;
	}
?>
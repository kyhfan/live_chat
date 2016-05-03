<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://cdn.socket.io/socket.io-1.3.5.js"></script>
<script>
var socket	= io.connect('http://localhost:3306');

$(function(){
	$('button').click(function(){
		proc_message();
	});
});

socket.on('chat', function(data){
	$("#chatwindow").append("<div>"+data+"</div>");
});

function proc_message()
{
	var chat_msg	= $('.chatinput').val();
	if (chat_msg == "")
	{
		alert("메세지를 입력해 주세요.");
		$('.chatinput').focus();
		return false;
	}
	socket.emit('chat', $('#nick_val').val() + ":" + $('.chatinput').val());
	$('.chatinput').val('');
}

function send_message()
{
	if(event.keyCode == 13)
		proc_message();
}

function use_nick()
{
	var nick_name	= $("#nick_val").val();

	if (nick_name == "")
	{
		alert("닉네임을 입력해 주세요.");
		$("#nick_val").focus();
		return false;
	}

	$.ajax({
		type:"POST",
		data:{
			"exec"			: "insert_nick",
			"nickname"	: nick_name
		},
		url: "main_exec.php",
		success: function(response){
			if (response == "D")
			{
				alert("중복된 닉네임이 있습니다. 다시 입력해 주세요.");
				$("#nick_val").val('').focus();
			}else if (response == "Y"){
				$("#nick_div").hide();
				$("#chat_div").show();
			}else{
				alert("사용자가 많아 참여가 지연되고 있습니다. 30초 후 다시 시도해 주세요.");
			}
		}
	});

}
</script>
<style>
	#chatwondow div:nth-child(odd){background:#f8f8f8;}
</style>
<div id="chat_div" style="display:none">
<div id="chatwindow"></div>
<input type="text" class="chatinput" onkeyup="send_message();return false;"><button type="button">SEND</button>
</div>
<div id="nick_div">
<input type="text" id="nick_val"><a href="#" onclick="use_nick();return false;">사용하기</a>
</div>

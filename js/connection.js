var data = new Firebase('https://w5780v8m7pd.firebaseio-demo.com/');
$('#messageInput').keypress(function (e){
	if (e.keyCode == 13) {
		var name = $('#nameInput').val();
		var text = $('#messageInput').val();
		data.push({name: name, text: text});
		$('#messageInput').val('');
	}
});
data.on('child_added', function(snapshot) {
  var message = snapshot.val();
  displayChatMessage(message.name, message.text);
});
function displayChatMessage(name, text) {
	$('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
	$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};
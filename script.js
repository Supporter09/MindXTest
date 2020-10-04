var count = 3;
const randomNum = Math.floor(Math.random() * 10);
$('#submitBtn').click(function() {
    if(count > 1){
        userInput = $("#userInput").val();
        if(userInput != randomNum && count > 1) {
            count--;
            alert("Số bạn vừa nhập không chuẩn xác, hãy thử lại. Bạn còn " + count + " lần nữa")
        }
        else{
            alert("Xin chúc mừng bạn, bạn đã giành được phần thưởng :D")
        }
    }
    else{
        alert("Số may mắn của bạn là " + randomNum);
    }
});
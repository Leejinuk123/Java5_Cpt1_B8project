function passwordPrompt(){

    prompt("패스워드를 입력해주세요","Password");

}

function registerConfirm(){

        if(confirm("등록하시겠습니까?")){
            alert("등록되었습니다.");
        }else{
        }
        
}

function cancelConfirm(){

    if(confirm("수정을 취소하시겠습니까?")){
		alert("취소되었습니다.");
	}else{
	}
	
}

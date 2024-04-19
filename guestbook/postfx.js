function addForm() {
    let zebal = `
    <div class="updatePostIt" id="updatePostIt">
                    <img src="postIt.png">
                    <div class="updateBtn">
                        <button type="button" class="registerBtn"
                            onclick="registerConfirm(); makeCard();">✅</button>
                        <button type="button" class="cancelBtn" onclick="cancelConfirm()">❌</button>
                        <script src="prompt.js"></script>
                    </div>
                    <span class="imtext">
                        <input type="text" class="Name" id="Name" placeholder="이름">
                        <input type="text" class="Password" id="Password" placeholder="패스워드">
                        <input type="text" class="Content" id="Content" placeholder="내용">
                    </span>
                </div>`;
    $('#picjs').prepend(zebal);

}


function makeCard() {
    let Name = $('Name').val();
    let Password = $('Password').val();
    let Content = $('Content').val();

    let temp_html = `
    <div class="registeredPostIt" id="registeredPostIt">
                <img src="postIt.png">
                <div class="registeredBtn">
                    <button type="button" class="deleteBtn"
                        onclick="passwordPrompt()">🗑️</button>
                    <button type="button" class="modifyBtn" onclick="passwordPrompt()"> ✏️ </button>
                </div>
                <span class="imtext">
                    <p class = "registeredContent">${Content}</p>
                    <p class = "registeredName">${Name}</p>
                </span>
            </div>`;
    $('#picjs').prepend(temp_html);
}
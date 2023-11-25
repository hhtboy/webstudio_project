function get_leftovers() {

    $.ajax({ //jquery ajax
        type: "get", //get방식으로 가져오기
        url: "leftovers.php", //값을 가져올 경로
        dataType: "json", //html, xml, text, script, json, jsonp 등 다양하게 쓸 수 있음
        success: function (data) {   //요청 성공시 실행될 메서드
            console.log(data);
        },
        error: function (r, t, error) {		 //요청 실패시 에러 확인을 위함
            console.log("통신에러");
            console.log(error);
        }
    })


}

window.addEventListener('DOMContentLoaded', function () {
    get_leftovers();
});
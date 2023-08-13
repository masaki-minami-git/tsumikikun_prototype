$(function () {
    $(document).on("click", "#startModal", function (e) {
        // $(this)でイベントが発生した要素を取得して削除する
        $(this).remove();
        $("#secondModal").css("display","flex")
    });
    $(document).on("click", "#secondModal", function (e) {
        // $(this)でイベントが発生した要素を取得して削除する
        $(this).remove();
        $("#thirdModal").css("display","flex")
    });
    $(document).on("click", "#thirdModal", function (e) {
        // $(this)でイベントが発生した要素を取得して削除する
        $(this).remove();
    });
});
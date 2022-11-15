$(".navbtn1, .navbtn2").click(function () {
  // 這個被點到的按鈕
  console.log(this);
  // 取得目標
  // 這個按鈕href的值
  target = $(this).attr("href");
  console.log("移動目標", target);
  // 取得目標的座標
  const position = $(target).offset().top;
  console.log("座標", position);
  // (先停止)執行動畫
  $("html,body").stop().animate(
    {
      scrollTop: position,
    },
    1000
  );
});

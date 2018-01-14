import "./style.scss";

$(function() {
  const $readingTime = $(".J-reading-time");

  emitter.on("refresh-reading-time", ({ time }) => {
    $readingTime.html(time);
  });
});

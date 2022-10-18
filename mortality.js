var people = [
  {
    handle: "jsrn",
    birthday: "1990-05-22",
    url: "http://jsrn.net"
  },
  {
    handle: "gregjw",
    birthday: "1995-06-26",
    url: "https://gregjw.github.io"
  },
  {
    handle: "m",
    birthday: "1992-06-03",
    url: "#"
  }
]

$(function() {
  for (var i = 0; i < people.length; i++) {
    var data = people[i];
    var $link = $("<a/>").attr("target", "_blank").attr("href", data.url);
    var $person = $("<div/>")
      .attr("data-birthday", data.birthday)
      .addClass("person").appendTo($link)
      .attr("title", data.handle);
    $link.appendTo("body");
  }
  
  $(".person").each(function() {
    var birthday = $(this).attr("data-birthday");
    var then = moment(birthday);
    var now = moment();
    var daysSoFar = now.diff(then, 'days');
    var daysTotal = 29638;
    var fraction = daysSoFar / daysTotal;
    var hue = fraction * 255;
    hue = hue.toFixed(0);
    $(this).css("background-color", "rgb(" + hue + "," + hue + "," + hue + ")");
  });
});

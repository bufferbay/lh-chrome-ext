    google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed("http://lifehacker.ru/feed/");
      feed.setNumEntries(7);
      var count = 1;
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          var html = "";
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            html = "<h1><a href='" + entry.link + "'>" + entry.title + "</a></h1>";
            var div = document.createElement("div");
            div.innerHTML = html;
            container.appendChild(div);            
          }
          document.write(html);
		  document.getElementById("content").style.display = "block";
        }
      });
    }
    google.setOnLoadCallback(initialize);


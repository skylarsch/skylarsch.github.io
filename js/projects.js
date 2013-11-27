$(document).ready(function() {
  if ($('div#_projects_js_exec').length > 0) {
    setup_project_page();
  }
});

function setup_project_page() {
  $.getJSON('https://api.github.com/users/skylarsch/repos?callback=?', null, function(response){
    grouped = GH.repo_group(response.data);
    var keys = []
    for (var key in grouped) {
      keys.push(key);
    }
    keys.sort();
    GHD.refresh();
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var repos = grouped[key];
      repos.sort(GH.repo_compare);
      GHD.group_draw(key, repos);
    }
    perform_bottom_link_scroll();
  });
}

var GH = {
  repo_compare: function(r1, r2) {
    if (r1.pushed_at_date > r2.pushed_at_date) {
      return -1;
    }
    if (r1.pushed_at_date < r2.pushed_at_date) {
      return 1;
    }
    return 0;
  },
  repo_group: function(repos) {
    var group = {};
    for (var i = 0; i < repos.length; i++) {
      var repo = repos[i];
      if (group[repo.language] == undefined) {
        group[repo.language] = [];
      }
      repo.pushed_at_date = Date.parse(repo.pushed_at);
      group[repo.language].push(repo)
    }
    return group;
  }
}

var GHD = {
  refresh: function() {
    $("div#github_repo_list").html('');
  },
  group_draw: function(name, repos) {
    var div = $("div#github_repo_list");
    var html = "<div class='gh_group'>";
      html += "<h5>" + name + "</h5>";
      html += "<ul class='gh_repo_list'>";
        for (var r = 0; r < repos.length; r++) {
          var repo = repos[r];
          html += "<li>";
          html += this.repo_draw(repo);
          html += "</li>";
        }
      html += "</ul>";
    html += "</div>";
    div.append(html);
  },
  repo_draw: function(repo) {
    var html = "<div class='repo_name'>";
      if (repo.fork) {
        html += '<i class="fa fa-code-fork fork_callout"></i>';
      }
      html += '<a target="_blank" href="' + repo.html_url + '">';
        html += repo.name;
      html += '</a>';

      html += '<span class="last_push">pushed ' + $.timeago(repo.pushed_at) + '</span>';

    html += '</div>';

    if (repo.description != null) {
      html += '<div class="repo_description">';
      html += repo.description;
      html += '</div>';
    }

    return html;
  }
}



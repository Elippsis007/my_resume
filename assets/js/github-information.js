function userInformationHTML(user) {
    return `
            <h2>${user.name}
            <span class="small-name">
                (@<a href=${user.html_url}" target="_blank">${user.login}</a>)
            </span>
        </h2>
        <div class="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url} target="_blank">
                <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}"/>
                </a>
                </div>
                <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>
            </div>`;
        }




function fetchGitHubInformation(event) {
    
    let username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/images/loader_white.gif" alt="loading..." />
        </div>`);    

/*------------------------------------
 jQuery Promises 

    When:
        You you get a job as a Developer
    Then:
         I will give you 10k

$.when (
    when we got a response from the GitHub API )
    .then (
     function to display it in the gh-user-data- div )
    unless we get an error
/*-----------------------------------------------------------*/

$.when(
    $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response) {
            let userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));
        }, 
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<h2>No info found for user ${username}</h2>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`); 
                }
            });
}
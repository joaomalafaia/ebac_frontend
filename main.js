document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.querySelector('#avatar');
    const profileName = document.querySelector('#name');
    const profileUsername = document.querySelector('#username');
    const profileRepositories = document.querySelector('#repository');
    const profileFollowers = document.querySelector('#followers');
    const profileFollowing = document.querySelector('#following');
    const profileLink = document.querySelector('#link');

    fetch('https://api.github.com/users/joaomalafaia')
        .then(resposta => resposta.json())
        .then(json => {
            profileAvatar.src = json.avatar_url;
            profileName.innerText = json.name;
            profileUsername.innerText = json.login;
            profileRepositories.innerText = json.public_repos;
            profileFollowers.innerText = json.followers;
            profileFollowing.innerText = json.following;
            profileLink.href = json.html_url;
        })
})
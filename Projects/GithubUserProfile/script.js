document.getElementById('fetchProfileBtn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    if (username === '') {
        alert('Please enter a GitHub username');
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${username}`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var profileContainer = document.getElementById('profileContainer');

            var profileElement = document.createElement('div');
            profileElement.className = 'profile-container';
            profileElement.innerHTML = `
                <div class="profile">
                    <img src="${data.avatar_url}" alt="Avatar" width="100" height="100">
                    <div class="profile-details">
                        <h2>${data.name}</h2>
                        <p><strong>Username:</strong> ${data.login}</p>
                        <p><strong>Bio:</strong> ${data.bio || 'N/A'}</p>
                        <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
                        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                        <p><strong>Followers:</strong> ${data.followers}</p>
                        <p><strong>Following:</strong> ${data.following}</p>
                        <a href="${data.html_url}" target="_blank">View Profile on GitHub</a>
                    </div>
                </div>
            `;

            profileContainer.innerHTML = '';
            profileContainer.appendChild(profileElement);
        } else if (xhr.readyState === 4) {
            alert('Error fetching profile. Please make sure the username is correct.');
        }
    };
    xhr.send();
});

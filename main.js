const LinksSocialMedia = {
  github: 'felintob',
  youtube: 'UCSUX_2S4_tGcR0JQhO4tGmQ',
  instagram: 'runeraven_',
  linkedin: 'bruno-felinto-24b837216',
  twitter: 'raven_rune'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.texContent = data.login
    })
}

getGitHubProfileInfos()

var infoDoPerfil, avatar, nome, repositoriosPublicos, seguidores, seguindo, linkRepos;

function obterPerfil() {
    event.preventDefault(); //Previne a ação padrão do navegador
    infoDoPerfil = document.getElementById("infoDoPerfil");
    const usuario = document.getElementById("usuario").value;
    var url = `https://api.github.com/users/${usuario}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            avatar = data.avatar_url;
            nome = data.name;
            repositoriosPublicos = data.public_repos;
            seguidores = data.followers;
            seguindo = data.following;
            linkRepos = data.repos_url;

            infoDoPerfil.innerHTML = `
                    <img style="margin: 30px; border-radius: 100px; height: 200px; width: 200px" src="${avatar}" alt="Avatar do usuário">
                    <p style="text-align: center; margin: 10px;">${nome}</p>
                    <p style="text-align: center; margin: 10px;">Repositórios públicos: ${repositoriosPublicos}</p>
                    <p style="text-align: center; margin: 10px;">Seguidores: ${seguidores}</p>
                    <p style="text-align: center; margin: 10px;">Seguindo: ${seguindo}</p>
                    <p style="text-align: center; margin: 10px;"><a href="https://github.com/${usuario}?tab=repositories" target="_blank">Repositórios</a></p>
                    `;
        });
}
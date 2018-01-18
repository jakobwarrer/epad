exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  // Create nodes here, generally by downloading data
  // from a remote API.
  const gitData = await fetch('https://api.github.com/users/epadctf')
    .then(results => results.json())
    .then((user) => {
      fetch(user.repos_url)
        .then(results => results.json())
        .then((userRepos) => {
          userRepos.map((repo) => {
            fetch(`https://api.github.com/repos/epadctf/${repo.name}/readme`)
              .then(results => results.json())
              .then(repoContent => repoContent);
          });
        });
    });

  // Process data into nodes.
  gitData.forEach(datum =>
    createNode({
      content: datum.repoContent,
    }),
  );
};

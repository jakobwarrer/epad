import React, { Component } from 'react';

class GitPages extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
    };
  }
  componentDidMount() {
    const content = this.state.names.slice();
    fetch('https://api.github.com/users/epadctf')
      .then(results => results.json())
      .then((data) => {
        fetch(data.repos_url)
          .then(results => results.json())
          .then((data) => {
            data.map((repo) => {
              fetch(`https://api.github.com/repos/epadctf/${repo.name}/readme`)
                .then(results => results.json())
                .then((data) => {
                  content.push(atob(data.content));
                });
            });
          });
      });
    // this.setState({ names: content });
  }
  render() {
    return (
      <section className="gitpages">
        <div className="container">
          <div className="row">
            <div className="col-12">gitpages</div>
          </div>
        </div>
      </section>
    );
  }
}

export default GitPages;

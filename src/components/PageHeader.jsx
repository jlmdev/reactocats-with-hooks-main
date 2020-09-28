import React from 'react'

export function PageHeader() {
  return (
    <header>
      <nav className="left-nav">
        <ul>
          <li>
            <a href="#">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="43rem"
                height="43rem"
                alt="GithubLogo"
              />
            </a>
          </li>
          <li>
            <a href="#" className="octodex">
              Octodex
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="https://octodex.github.com/faq/">FAQ</a>
          </li>
        </ul>
      </nav>

      <nav className="right-nav">
        <ul>
          <li>
            <a href="https://twitter.com/githubdesign">Follow us on Twitter</a>
          </li>
          <li className="back-to-github">
            <a href="https://github.com/" className="back-to-github">
              Back to GitHub.com
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import React from 'react'
import { PageHeader } from './components/PageHeader'
import { Octocat } from './components/Octocat'
import Octocats from './components/Octocats.json'

function App() {
  const octocatsFromData = Octocats.map((octocat) => (
    <Octocat
      key={octocat.id}
      bigImageLink={octocat.bigImageLink}
      bigImage={octocat.bigImage}
      bigImageAlt={octocat.bigImageAlt}
      octodexNumber={octocat.octodexNumber}
      authorOneLink={octocat.authorOneLink}
      authorOneSrc={octocat.authorOneSrc}
      authorOneAlt={octocat.authorOneAlt}
    />
  ))

  return (
    <div>
      <PageHeader />
      <div className="spacer"></div>
      <body>
        <main>
          <section>{octocatsFromData}</section>
        </main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </div>
  )
}

export default App

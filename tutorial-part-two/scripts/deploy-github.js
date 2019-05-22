const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/Bruspashko/bruspashko.github.io.git',
    dest: "tutorial-part-two-public"
  },
  () => {
    console.log('Deploy Complete!')
  }
)
const superOver = 'Super Over League'
const rcbLogo = 'https://assets.ccbp.in/frontend/react-js/rcb-img.png'
const cskLogo = 'https://assets.ccbp.in/frontend/react-js/csk-img.png'
const element = (
  //   Write your code here.
  <div class='bg-container'>
    <div class='content-container'>
      <h1 class='super-over-heading'>{superOver}</h1>
      <div class='img-container'>
        <img class='ipl-team-image' src={rcbLogo} alt='RCB' />
        <img class='ipl-team-image' src={cskLogo} alt='CSK' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

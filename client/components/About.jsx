import React from 'react'
import { Container } from 'semantic-ui-react'

class About extends React.Component {
  render () {
    return (
      <>
        <div className="aboutHero">
          {/* <div className="aboutLogo">
            <h1>Welcome to</h1>
            <img src='about logo-05.png' alt=""/>
          </div> */}

          <div className="aboutHeroText">
            <div style={{ textAlign: 'right', paddingRight: '4%'}}>
            <p id="welcome">Welcome to <span id='takeme2nd'> take me</span></p>

            </div>
            <h3>
              "One man's trash is another man's treasure"
            </h3>
            <p>
              We want to promote recycling and reusing items that do not need to be thrown out. Instead, we aim to make it easy to find someone else who wants an item you might otherwise throw out, and give it a second life.
            </p>
          </div>
        </div>
        <div className="aboutSections">
          <h2>Why Recycle?</h2>
          <p>
          You have heard of reduce, reuse, recycle, right?<br/>
          This is a concept our team is promoting through creating this website. By choosing our website, and in turn choosing a pathway to sustainable living, you are also choosing to make the following positive impacts:
          </p>
          <ul>
            <li>
            Energy conservation - using our website reduces product demand of manufacturers, thus saving energy.
            </li>
            <li>
            Reduces landfill - by re-purposing and/or recycling materials and products, we reduce the amount of waste that ends up in landfills, which altogether contributes to a healthier planet.
            </li>
            <li>
            Less toxic chemicals - factories that produce the products we see on shelves are often made from raw materials which create toxic chemicals. Re-purposing is a simple solution to lowering the demand, and therefore the production of these toxins.
            </li>
            <li>
            Reduces pollution - a lot of our "rubbish" can actually be recycled. Opting for this method can reduce the amount of waste that would otherwise end up in our oceans.
            </li>
            <li>
            Saves you money - if you are getting something free from our site, you are not buying something new. As a result, you are saving money!
            </li>
          </ul>
        </div>
        <div className="aboutSections">
          <h2>How Can You Help?</h2>
          <p>
          We are asking you to consider not throwing items out that could find another life - by using our site, it will keep these items out of a landfill.
          You can list items for other people to take and put to good use, or pick something up off the site for yourself.<br/>
          If you want to clean out your closet, garage or clutter, why waste it when you can give it away?
          What you do with your rubbish affects the planet and the environment we live in. Because of this, we believe everyone has a personal
          responsibility to look after our planet. This site can help you reduce how much rubbish you produce and make someone else happy by doing so!
          </p>
        </div>
        <div className="aboutSections">
          <h2>Our Goal?</h2>
          <p>
          We want to reduce the amount of rubbish humans produce by encouraging people to give items another use with someone else.
          We want to make it as accessible and easy as possible to do this by ensuring our website is user friendly and easy to navigate.
          </p>
        </div>
        <div className="aboutSections">
          <h2>Made By:</h2>
          <ul>
            <li>Mathias Bast</li>
            <li>Patrick Lim</li>
            <li>Laché Melvin</li>
            <li>Hamish Henare</li>
            <li>Ellora Virtue</li>
            <li>John Sengson</li>
          </ul>
        </div>
      </>
    )
  }
}

export default About

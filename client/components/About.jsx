import React from 'react'
import { List, Image, Header, Segment } from 'semantic-ui-react'
import AOS from 'aos'

AOS.init({
  duration: 800
})

class About extends React.Component {
  render () {
    return (
      <>
        <div className='aboutHero'>
          {/* <div className='aboutLogo'>
            <h1>Welcome to</h1>
            <img src='about logo-05.png' alt=''/>
          </div> */}

          <div className='aboutHeroText'>
            <div style={{ textAlign: 'right', paddingRight: '4%' }}>
              <p id='welcome'>Welcome to <span id='takeme2nd'> take me</span></p>

            </div>
            <h3>
              "One man's trash is another man's treasure"
            </h3>
            <p>
              We want to promote recycling and reusing items that do not need to be thrown out. Instead, we aim to make it easy to find someone else who wants an item you might otherwise throw out, and give it a second life.
            </p>
          </div>
        </div>
        <div className='aboutSections' data-aos='fade-up'>
          <h2>Reduce, reuse &amp; recycle</h2>
          <p>
          This is a concept our team is promoting through creating this website. By choosing our website, and in turn choosing a pathway to sustainable living, you are also choosing to make the following positive impacts:
          </p>
          <List
            id='aboutList'
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-offset='250'
          >
            <List.Item id='aboutListItem'>
              <List.Header id='aboutSecHeaders'>Energy conservation</List.Header>
              Using our website reduces product demand of manufacturers, thus saving energy.
            </List.Item>
            <List.Item id='aboutListItem'>
              <List.Header id='aboutSecHeaders'>Reduces landfill</List.Header>
              By re-purposing and/or recycling materials and products, we reduce the amount of waste that ends up in
              landfills, which altogether contributes to a healthier planet.
            </List.Item>
            <List.Item id='aboutListItem'>
              <List.Header id='aboutSecHeaders'>Less toxic chemicals</List.Header>
              Factories that produce the products we see on shelves are often made from raw materials which create toxic chemicals. Re-purposing is a simple solution to lowering the demand, and therefore the production of these toxins.
            </List.Item>
            <List.Item id='aboutListItem'>
              <List.Header id='aboutSecHeaders'>Reduces pollution</List.Header>
              A lot of our so called rubbish can actually be recycled. Opting for this method can reduce the amount of waste that would otherwise end up in our oceans.
            </List.Item>
            <List.Item id='aboutListItem'>
              <List.Header id='aboutSecHeaders'>Saves you money</List.Header>
              If you are getting something free from our website, you are not buying something new. As a result, you are saving money!
            </List.Item>
          </List>
        </div>
        <div
          className='aboutSections'
          id='photoCard'
          data-aos='zoom-in-up'
          data-aos-offset='200'
          data-aos-duration='1500'>
          <div id='testDivo'>
            <img src='https://images.unsplash.com/photo-1568085823039-e823e87197e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt=''/>
            <div id='aboutCardHeader'>
              <h3>If you want to clean out your closet, garage or clutter, why waste it when you can give it away?</h3>
            </div>
          </div>
        </div>
        <div
          className='aboutSections'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-duration='700'
        >
          <h2>Our Goal?</h2>
          <p>
          We want to reduce the amount of rubbish humans produce by encouraging people to give items another use with someone else.
          We want to make it as accessible and easy as possible to do this by ensuring our website is user friendly and easy to navigate.
          </p>
          <h2>How can you help us?</h2>
          <p>
          We are asking you to consider not throwing items out that could find another life - by using our site, it will help keep these items out of a landfill.
          You can list items for other people to take and put to good use, or pick something up off the site for yourself.</p>
          <p>What you do with your rubbish affects the planet and the environment we live in. Because of this, we believe everyone has a personal
          responsibility to look after our planet. This site can help you reduce how much rubbish you produce and make someone else happy by doing so!
          </p>
        </div>
        <h4 id='thanks'>Thank you!</h4>
        <div
          className='aboutSections'
          id='teamWrapper'
          data-aos='zoom-in'
          data-aos-offset='250'
          data-aos-duration='1000'
        >
          <div className='teamPics'>
            <div className='takemeTeam'>
              <Image src='./team/lache.png' size='medium' circular />
              <Header as='h2' attached='top' id='teamSegment'>
              Lache Melvin
              </Header>
              <Segment attached id='teamSegment'>
                <p>Vibes lead</p>
              </Segment>
            </div>
            <div className='takemeTeam'>
              <Image src='./team/ellora.jpg' size='medium' circular />
              <Header as='h2' attached='top' id='teamSegment'>
              Ellora Virtue
              </Header>
              <Segment attached id='teamSegment'>
                <p>Scrum Master</p>
              </Segment>
            </div>
            <div className='takemeTeam'>
              <Image src='./team/john.jpg' size='medium' circular />
              <Header as='h2' attached='top' id='teamSegment'>
            John Sengson
              </Header>
              <Segment attached id='teamSegment'>
                <p>Product Owner</p>
              </Segment>
            </div>
          </div>
          <div className='teamPics'>
            <div className='takemeTeam'>
              <Image src='./team/pat.jpg' size='medium' circular />
              <Header as='h2' attached='top' id='teamSegment'>
              Pat Lim
              </Header>
              <Segment attached id='teamSegment'>
                <p>Back-end Lead</p>
              </Segment>
            </div>
            <div className='takemeTeam'>
              <Image src='./team/hamish.jpg' size='medium' circular />
              <Header as='h2' attached='top' id='teamSegment'>
             Hamish Henare
              </Header>
              <Segment attached id='teamSegment'>
                <p>Front-end Lead</p>
              </Segment>
            </div>
            <div className='takemeTeam'>
              <Image src='./team/mathias.jpg' size='medium' circular />
              <Header as='h2' attached='top' id='teamSegment'>
              Mathias Bast
              </Header>
              <Segment attached id='teamSegment'>
                <p>Git Lead</p>
              </Segment>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default About

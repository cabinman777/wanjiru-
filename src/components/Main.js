import PropTypes from 'prop-types'
import React from 'react'
import p5 from '../images/p5.jpeg'
import p4 from '../images/p4.jpeg'
import p2 from '../images/p2.jpeg'
import bar from '../images/bar.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={p5} alt="" />
          </span>
          <p>
          	A talented, self-motivated, and high performing individual with innovative administrative
           and operational skills who is currently undertaking a Master’s Degree in Conflict and Conflict Management
            at Egerton University. I have completed a Bachelor’s degree in History and International Relations from the same
             University.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
         <b>CAREER VISION</b> :Put into practice my knowledge while gaining experience on different aspects of International Relations,
           Communications and Advocacy which will enable me work towards sustainable development oriented institution of excellence.
	         Work in an environment that is multi-cultural, one that respects and as well promotes diversity through the efforts of teams of different people.
           Be exposed to the world to understand major issues, policies and programs brought about to find solutions to national and global problems

          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={p4} alt="" />
          </span>
          <p>
          <li><b>January 2019 to date</b>
            </li> 
          <li><b>Organization: Professional Mentors of Africa</b>
            </li> 
           <li><b>Position: Adminstrator</b>
             </li>
           <li><b>Core responsibilities:</b>
             </li>
           <li>
             Managing the director’s diary efficiently</li>
             <li>	Monitoring reports generated monthly and circulated from other departments</li>
             <li> 	Analyze incoming and outgoing memoranda, submissions and reports and prepare and co-ordinate the preparation and submission of summary briefs and reports to the Director</li>
             <li> 	Prepare agendas and make arrangements for committee, board and other meetings</li>
             <li>	Conduct research, compile data, and prepare papers for consideration and presentation by the Director. </li>
             <li>	Meet with individuals, special interest groups and others on behalf of the Director to discuss issues and assess and recommend various courses of action </li>
             <li>	Liaise with departmental and corporate officials and with other organizations and associations on behalf of the Director. </li>
           	
          </p>
          <p>
           <li><b> January 2018 to 2019</b></li>
           <li><b> Organization: Professional Mentors of Africa</b></li>
           <li><b> Position: Mentor and volunteer</b></li>
           <li><b> Responsibilities:</b></li>
           <li>	Mentor individuals to help them understand and overcome personal issues affecting their educational or vocational situations.</li>
           <li>	Provide crisis intervention to students when difficult situations occurred at schools. </li>
           <li>	Prepared students for later educational experiences by encouraging persevere with challenging tasks. </li>
           <li>	Evaluated students' or individuals' abilities and interests from records, interviews, or reports  </li>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={p2} alt="" />
          </span>
          <p>
            <span className="image main">
              <img src={bar} alt="" />
            </span>
            <b>Self-Driven
              </b>	: I am a self-motivated individual who has demonstrated drive by setting personal goals,
             planning and doing what it takes to achieve them even without anyone looking over my back. 
             <p>
             Change is inevitable. Not only do I accept change,
              I embrace it as an opportunity to learn, grow and experience new things.
               I am able to work in a fast paced and changing environment.
             </p>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

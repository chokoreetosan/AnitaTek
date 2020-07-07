import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import PaypalExpressBtn from 'gatsby-paypal-button';
const client = {
  sandbox:    'Your-Sandbox-Client-ID',
  production: 'Acj5w9YWFKzlZlo7u24wJ3FM4L9k5M92S2tvmaOKGjZxiCd9LupegSUZVgLec2x8ps9kh2pEJvaPQEcR',
}

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
          <h2 className="major">Process</h2>
          <span className="image main">
            {/* <img src={pic01} alt="" style={{width:"960px",height:"320px",overflow:"hidden"}}/> */}
          </span>
          {/* <p>
          Hello! You’ve come to the right place if you are seeking integrative guidance on your career path. As a Recruiter and Resume Writer, I work with people from all over the world to reach their goals. I believe professional fulfillment starts with understanding purpose, drive, and motivation. I utilize these principles to offer a customized wellness plan and a powerful resume to launch your career transition.
          </p>
          <p>
          My clientele come from all walks of life and span from entry level to C-suite. The one thing they all have in common is a strong work ethic and a desire to have a meaningful impact with their careers. People derive value from being able to contribute to society through work. Whether you are looking to make a move to a new company or make the change for whole new career path, I can help advance your goals.
          </p> */}
          <p>
          As a career transition specialist, I hear many candidates lament about being unable to obtain an interview even though they are qualified. After reviewing their resume and talking to them about their job history; I can see major discrepancies and gaps. There are many responsibilities which are not listed or minimized. With my resume expertise, I’m able to assess and determine which aspects of a candidate’s job history most closely match the requirements of the desired position.

          </p>
          <p>
            
          Another area of concern is a lack of having balance.  Many people derive their purpose solely from work and they do not have any other outlets which display their values, creativity, and intelligence. As a result of focusing on only one area of livelihood, clients do not have any other strengths developed. The wellness plan focuses on growing areas which give you a sense of meaning and purpose. 
          </p>
          <p>
            <h3>Common issues of job seekers</h3>
            <ul>
              <li>Negative headspace</li>
              <li>Worrying</li>
              <li>Lack of clarity</li>
              <li>Feeling a lack of purpose</li>
            </ul>
          </p>
          <p>
          After applying to countless positions and not getting any responses, many job seekers end up with these issues.
My approach is very different than traditional “resume advisor,” in that I work with clients to ensure they have the tools to target emotional intelligence along with a well formulated resume. 
In order to help clients’reach their goals, I offer a two-pronged approach:
          </p>
          <p>
            <ul>
              <li>Ensuring their resume highlights their strengths and accomplishments in order to be recognized by hiring managers and recruiters. </li>
              <li>By providing emotional support through a custom wellness strategy. </li>
            </ul>
          </p>
          <p>
          Initially we would meet in person (or via video chat platform) to discuss the goals you are looking to achieve. An in-depth assessment is conducted in order to fully understand how your objectives and desired outcome align. Try to prepare for this meeting, and think about some of the questions below which we will discuss:
          </p>
          <p>
            <ul>
              <li>What type of career(s) do you envision?</li>
              <li>How would this career bring you meaning to your life? </li>
              <li>Who are some of the people you admire and what do they have in common?</li>
              <li>What wellness activities do you currently practice?</li>
              <li>How does this effect your mood, health, other areas of your life?</li>
            </ul>
          </p>
          <p>
          After this initial discussion, an action plan is then provided with details tailored to your career and wellness path. We will leverage the SMART method (specific, measurable, action, realistic, timely) to define your objectives and develop an action plan that will suit you. With this in mind, we will graph clearly defined objectives and goals, which will include wellness related actions in addition to career related goals.
Once we review and tailor these goals, we will develop a timeline for implementation and mechanism to track results. Implementation will include weekly check ins to help evaluate the progress and adjust strategy if needed.
In addition to our weekly check ins, we will have another meeting to gather specific details of your previous history; this session would focus on your work experience, accomplishments, areas of expertise, and expand on your professional vision.
At the conclusion of our sessions, you will have a customized written resume along with a wellness plan which you can continue to leverage.
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
          <h2 className="major">About Me</h2>
          <span className="image main">
          <img src={pic03} alt="" style={{width:"35%",height:"auto",marginLeft:"auto",marginRight:"auto"}}/>
          </span>
          <p>
          My background includes working in mental health/social services and staffing. In the beginning of my career, I worked with several non-profits providing counseling to children and young adults. Later, I pursued a career as a recruiting consultant where I successfully staffed employees in various industries such as food, pharmaceutical/biotech, automotive, toy, entertainment, and marketing.  Because of my experience across multiple industries, I am able to help clients reach their maximum potential and land their ideal position while in a positive mindset.
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
          <span className="image main" style={{}}>
            {/* <img src={pic02} alt="" style={{width:"35%",height:"auto",marginLeft:"auto",marginRight:"auto"}}/> */}
          </span>
          <p>
          Below are the various packages and rates
(all amounts in USD):
          </p>
          <p>
          Package Name: Essential Package <br />
          Description: Consultation, professionally written resume, and wellness  guide  <br />
          Price: $250<br/>
          </p>
          <p>
          <PaypalExpressBtn env="production" client={client} currency={'USD'} total={250} shipping={2} style={{size:"responsive",shape:"rect", tagline:"false",color:"black"}}/>
          </p>
          <p>
          Package Name: Premium<br/>
Package Description: Consultation, multi-meetings, expertly crafted LinkedIn profile and resume, Wellness assessment  <br/>
Price: $350<br/>
          </p>
          <PaypalExpressBtn env="production" client={client} currency={'USD'} total={350} shipping={2} style={{size:"responsive",shape:"rect", tagline:"false",color:"black"}}/>
          <p>
          Package Name: Elite Career and Wellness Quest<br />
Package Description: Consultation, multi-meetings, customized LinkedIn profile, top-tier resume, tracking tools, personalized wellness optimization guide, and in-depth integrated guidance  <br/>
Price: $500
<br/>
          </p>
<PaypalExpressBtn env="production" client={client} currency={'USD'} total={500} shipping={2} style={{size:"responsive",shape:"rect", tagline:"false",color:"black"}}/>

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
          <p>
          Cell: 657-200-8614
          </p>
          <p>
          Email: anita@punditproservices.com
          </p>
          {/* <form method="post" action="#">
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
          </form> */}
          <ul className="icons">
            {/* <li>
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
            </li> */}
            {/* <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li> */}
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

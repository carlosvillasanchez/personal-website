import React from 'react'
import SelfPic from '../assets/images/profile-pic.png'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Carlos <span>Villa Sánchez</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there, welcome to my personal web site. I am an application security engineer with great interest in web application vulnerabilities, secure development, and ethical penetration testing. I have recently finished my master's studies in telecommunication engineering with the cybersecurity specialty. Even though I already have a couple of years of experience in scholarships, I am looking forward to working full time in application security-related projects this September.
        </p>
        <DownloadButton href="https://carlosvillasanchez.github.io/CV/CV_Carlos_Villa_June_2020.pdf"  download title="Resume">View Resume PDF</DownloadButton>
      </div>
      <img src={SelfPic} alt="Carlos Villa pic" width="350px" style={{}}/>
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage

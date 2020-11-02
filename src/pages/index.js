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
        Hello there, welcome to my personal web site. I am an application security engineer with great passion for what I do. Having my passion as my profession helps me on staying always updated to the newest technologies and with great motivation to keep learning. Looking forward to keep growing in my cybersecurity carrer.
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

import React from 'react'
import RashSelfIcon from '../assets/images/rashmi.svg'
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
        Hello there, welcome to my portfolio. I am .................................... ......... .................................  
        (INTRO). ........................... .................................... ......... ......... .........
        </p>
        <DownloadButton href="https://carlosvillasanchez.github.io/CV/CV_Carlos_Villa_June_2020.pdf"  download title="Resume">View Resume PDF</DownloadButton>
      </div>
      {/*<img src={RashSelfIcon} alt="rashmi self" />*/}
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

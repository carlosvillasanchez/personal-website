import React, { useState } from 'react'
import rec from '../data/Blog'
import { RecWrapper, RecBox, RecDes } from '../styles/recStyle.js'
import Layout from '../components/layout'
import BlogBox from '../components/Blog/BlogBox'
import { ProjectsWrapper, ProjectsSection } from '../styles/projectsStyle.js'
import blogData from '../data/Blog'


const Blog = (props) => {
  let [textOpened, setTextOpened] = useState("");
  if ((props.location.hash === "#" || props.location.hash === "") && textOpened !== "") {
    setTextOpened("");
  } else {
    let hash = decodeURIComponent(props.location.hash.substring(1));
    for (let i=0; i<blogData.length; i++) {
      if(hash === blogData[i].title && textOpened === "") {
        setTextOpened(blogData[i].description);
        break;
      }
    }
  }
  const openBlog = (text) => {
    console.log("ICI")
    // props.location.hash = "#" + blogData[i].title;
    setTextOpened(text);
  }
  if (textOpened === "") {
    return (
      <Layout>
        <RecWrapper>
          <h1>Blog</h1>
        </RecWrapper>
        <span>{props.location.hash}</span>
        <ProjectsSection>
          {
            blogData.map(item => (<BlogBox key={item.id} info={item} onPress={openBlog}/>))
          }
        </ProjectsSection>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <RecWrapper>
          <h1>Blog</h1>
          <span style={{color: "white"}}>{textOpened}</span>
          <span style={{color: "white"}}>{props.location.hash}</span>
        </RecWrapper>
      </Layout>
    )
  }

}

export default Blog

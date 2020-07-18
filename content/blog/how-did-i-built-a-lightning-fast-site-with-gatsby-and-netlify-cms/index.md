---
title: How did I built a lightning fast site with Gatsby and Netlify CMS From Scratch
date: 2020-07-17T19:36:35.241Z
description: "Gatsby and Netlify CMS work perfectly together to create high
  performance and fast speed static websites. This article is a tutorial on how
  to build a blog with these technologies from scratch. "
draft: true
---
## Introduction

Gatsby and Netlify CMS work perfectly together to create high performance and fast speed static websites. This article is a tutorial on how to build a blog with these technologies from scratch. The result is this website that you are reading now. 

## Switching from templates platforms to Gatsby

In the past I have used platforms such as Wordpress and SquareSpace to host my portfolio website. Both are very handy tools when I was looking for something visual and easy to use. However, as I am seeking more and more flexibility and creativity, I kept injecting Javascript code to the site, thus making it very slow. Beside, all these platforms wraps my website with tons of layers, therefore the performance was diminished. It was acceptable to access the site from US, where I host it. However, it could even a minute to just get the first print, if I try to open it from another country. Therefore, I decided to build a **high performance** using the trending Gatsby framework and used Netlify CMS as the backend content management system. The result is astonishing. With the new site, I successfully boosted my performance from 20 with my old Wordpress site to an incredible 93. 

![website-performance](performance.png "website performance")

## Step 1 - Initiate Gatsby project 
<em>Before you read through the article, I assume that you have basic knowledge of React. Because the Gatsby framework is based on React. </em>

In order to start the a Gatsby project, I had to install it globally. The official website has a very straight forward [tutorial](https://www.gatsbyjs.org/docs/quick-start), so it would be redundant for me to repeat that process. In this article, I will skip the straight forward pieces and provide a link to the official guidance, and explain the areas that was more confusing. 

## Step 2 - Create the basic UI layout with React
Once I have the basic project set up, I created the static pages under the 
``` src/pages ``` directory once you initiated your project with Gatsby. You can write anything like in any other React app. 

Then I added ``` blogTemplate.js ``` to the  ``` src/templates ``` directory to dynamically generate pages for my blog. I put some place holder text there to design the layout. Gatsby is capable of generating static pages by sourcing data from other resources such as the Netlify CMS system and many other APIs. Gatsby websites are blazing fast because it embraces both the advantages of static website and single page applications, it generates static pages on the fly. 

## Step 3 - Integrate the CMS system 
Once I have build up a static layout of my web page, it was time to replace it with dynamic content.

3.1
First you need to install the Netlify CMS plugin  by using 
``` yarn add netlify-cms-app gatsby-plugin-netlify-cms ```

3.2 
And then in the ```gatsby.config.js``` file add the following module to register it. 

``` 
module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`],
} 
```

3.3 
Now you can create a folder in the app to store your content. I created a folder under the root directory ```content/blog/```, but you can also put it under the ```src/pages``` directory. 

3.4 
Then create two new directories ```static/admin``` to store your ```config.yml``` file and a ```static/assets``` directory to store assets uploaded from the CMS system. In the ``` config.yml ```, this is my configuration. 

``` 
backend:
  name: git-gateway
  branch: master
site_url: https://www.xinhudesign.com
media_folder: static/assets
public_folder: /assets
collections:
  - name: blog
    label: Blog
    folder: content/blog
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    media_folder: ""
    public_folder: ""
    path: "{{title}}/index"
    fields:
      - { name: title, label: Title }
      - { name: date, label: Date, widget: datetime }
      - {
          name: featuredImage,
          label: Featured Image,
          widget: image,
          required: false,
        }
      - {
          name: description,
          label: Description,
          widget: "string",
          required: false,
        }
      - { name: body, label: Body, widget: markdown }
```
You can replace the backend repo name from **git-gateway** to **test-repo** if you just want to test out the UI. You can write and upload files in the test mode, but nothing is really going to be saved and published. If you want to run the app. You need to save the content to a service like Github and deploy it.  The most convenient way is to add your project to Github and connect your repo to Netlify, which will easily handle the authentication and auto deployment. [Start with Netlify](https://app.netlify.com/start) to deploy your project to a serve. And for for the authentication part there are very specific documentations on Netlify as well. [Authentication](https://docs.netlify.com/visitor-access/git-gateway/). 

Once it is deployed, by logging into your **deployewebsite.com/admin**, you can start to publish your content. For my setting, it created subfolders based on my title ```content/blog/my-blog-name/```. The information that I filled in was save as index.md and the image that I upload is saved to the same directory. If you upload a media not inside the blog in the CMS's main dashboard it would be saved to the ```static/assets``` directory instead. 

## Step 4 - Transformer markdown to pages 

What the Netlify CMS does it automatically saved the content you created to your github repo in a markdown format. So now you need to transform it to a html page with the previous ```blogTemplate.js``` you created. 

4.1 
In order to do that you need to add ```yarn add gatsby-source-filesystem``` to help the Gatsby know where to find the files to transfer and ```yarn add gatsby-transformer-remark ``` to recognize the markdown file. Since I also attached images to the website through the CMS system, I need the following plugin as well ``` yarn add gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp``` 

Then I registered them in the ```gatsby.config.js```

```
module.exports = {
  plugins: [
    //This plugin is to process images to web format, making them responsive
    `gatsby-plugin-sharp`,
   //This plugin is to allow Gatsby's graphql api to read the image. 
    `gatsby-transformer-sharp`,
 
    // This allow gatsby parse markdown file
    `gatsby-transformer-remark`,
  
      //This will let gatsby know where to find the files to parse.

   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },

  ],
}
```

4.2 
Now you can query the data in your blog template. 
```

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "./blogTemplate.css"


export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, id } = markdownRemark
  return (
    <div className="wrapper">
      <Layout>
        <div className="blog-post-container">
          <div className="blog-post">
            <p className="blog-date" style={{ opacity: 0.5 }}>
              {frontmatter.date}
            </p>
            <h1 className="blog-title">{frontmatter.title}</h1>
            {frontmatter.featuredImage && <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />}
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Layout>
      <div className="cover" style={{ backgroundColor: "var(--bg)" }} />
    </div>
  )
}
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }

```

4.3 
Then utilize the createPages API from Gatsby to auto generate the pages. In the ```gatsby.node.js``` file, add the following

```
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 100, sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const id = node.id
    createPage({
      path: node.frontmatter.title,
      component: blogPostTemplate,
      context: {
        id,
        // additional data can be passed via context
      },
    })
  })
}
```
5. Run the app 
Now if you run the app with ```gatsby develop```



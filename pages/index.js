import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      {/*TODO: ADD/Fix Landing Page
      <section className={utilStyles.headingMd}>
        
        <p>[Your Self Introduction]</p>
      </section>
      */}

    </Layout>
  )
}


/*
//Server Side Rendering (API) - https://nextjs.org/docs/basic-features/data-fetching#sideprops-server-side-rendering
export async function SideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
*/
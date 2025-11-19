import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GradeGenius - AI-Powered Grading Platform</title>
        <meta name="description" content="Transform your grading workflow with AI-powered intelligent rubric generation and automated feedback assistance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph tags for better social media sharing */}
        <meta property="og:title" content="GradeGenius - AI-Powered Grading Platform" />
        <meta property="og:description" content="Transform your grading workflow with AI-powered intelligent rubric generation and automated feedback assistance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gradegenius.com" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card tags for better Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GradeGenius - AI-Powered Grading Platform" />
        <meta name="twitter:description" content="Transform your grading workflow with AI-powered intelligent rubric generation and automated feedback assistance." />
        <meta name="twitter:image" content="/og-image.png" />
        
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://www.gradegenius.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

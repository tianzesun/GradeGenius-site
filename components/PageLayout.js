import Head from 'next/head';
import SkipLink from './SkipLink';

/**
 * Page Layout Component
 * This component provides a consistent layout structure for all pages
 * 
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.mainId - ID for the main content section
 */
export default function PageLayout({
  children,
  title = 'GradeGenius - AI-Powered Grading Platform',
  description = 'Transform your grading workflow with AI-powered intelligent rubric generation and automated feedback assistance.',
  mainId = 'main-content'
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      
      <SkipLink href={`#${mainId}`} />
      
      <div className="min-h-screen flex flex-col">
        <main id={mainId} className="flex-grow">
          {children}
        </main>
      </div>
    </>
  );
}

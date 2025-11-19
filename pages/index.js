import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import {
  Brain,
  Clock,
  LineChart,
  Users,
  CheckCircle,
  Sparkles,
  FileText,
  Target,
  ArrowRight,
  Star,
  Award,
  Shield,
  Zap,
  Quote,
  TrendingUp,
  Lightbulb,
  Server,
  BarChart,
  Lock,
  Cpu,
  Network,
  Infinity
} from 'lucide-react';

export default function Home() {
  return (
    <PageLayout>
      <div className="bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
                  <Sparkles className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-900">AI-Powered Grading Platform</span>
                </div>

                <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Grade Smarter,
                  <span className="block gradient-text">Not Harder</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Transform your grading workflow with intelligent rubric generation, AI plagiarism detection, automated feedback assistance, and powerful analytics. Save hours every week while ensuring academic integrity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" href="http://localhost:3002/login">
                    Get Started Free
                    <ArrowRight className="inline-block ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                  <Button variant="secondary" size="lg" href="#features">
                    Learn More
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8" role="list">
                  <div role="listitem">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">85%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Time Saved</div>
                  </div>
                  <div role="listitem">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">10k+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Educators</div>
                  </div>
                  <div role="listitem">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">4.9/5</div>
                    <div className="text-xs sm:text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual */}
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gray-900 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8" role="img" aria-label="GradeGenius application interface preview">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">Assignment Grading</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full font-medium">AI Assisted</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                        <span className="text-sm text-gray-600">Rubric auto-generated</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                        <span className="text-sm text-gray-600">Plagiarism checked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                        <span className="text-sm text-gray-600">Feedback suggestions ready</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600">Grading Progress</span>
                        <span className="text-xs font-semibold text-gray-900">24/30 complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2" aria-label="Grading progress: 80% complete">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 transform rotate-3" aria-hidden="true">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-3 transform -rotate-3" aria-hidden="true">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-padding bg-white" aria-labelledby="features-heading">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Powerful Features for Modern Educators
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Everything you need to streamline grading, enhance feedback quality, and gain insights into student performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list">
              {/* Feature 1 */}
              <article className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Brain className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">AI-Powered Rubrics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatically generate comprehensive grading rubrics based on assignment requirements. Customize and refine with ease.
                </p>
              </article>

              {/* Feature 2 */}
              <article className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-gray-900 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Save Time</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduce grading time by up to 85%. Intelligent automation handles repetitive tasks while you focus on meaningful feedback.
                </p>
              </article>

              {/* Feature 3 */}
              <article className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Smart Feedback</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get AI-assisted feedback suggestions that are personalized, constructive, and aligned with your teaching style.
                </p>
              </article>

              {/* Feature 4 */}
              <article className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-gray-900 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <LineChart className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track student performance trends, identify learning gaps, and make data-driven decisions with comprehensive analytics.
                </p>
              </article>

              {/* Feature 5 */}
              <article className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Consistency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensure fair and consistent grading across all submissions with AI-powered consistency checks and standardized rubrics.
                </p>
              </article>

              {/* Feature 6 */}
              <article className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-gray-900 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Plagiarism Detection Assistant</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI scans for plagiarism, paraphrasing, and AI-generated content, providing similarity scores and evidence—not accusations. You make the final judgment.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Revolutionary Features Section */}
        <section className="section-padding bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden" aria-labelledby="revolutionary-features-heading">
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mb-6">
                <Infinity className="h-4 w-4 text-white" aria-hidden="true" />
                <span className="text-sm font-medium">Next-Generation Technology</span>
              </div>
              <h2 id="revolutionary-features-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Revolutionary Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful capabilities that set GradeGenius apart from traditional LMS platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list">
              {/* Revolutionary Feature 1 */}
              <article className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <Brain className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">AI</h3>
                <h4 className="text-lg font-medium mb-4 text-blue-400">Intelligent Grading</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI-powered automated assessment with teacher oversight. 94.1% of assignments processed automatically while maintaining high accuracy standards.
                </p>
                <div className="flex items-center space-x-2 bg-gray-700/50 rounded-lg px-4 py-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
                    Active in production
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
                    98.4% accuracy
                  </span>
                </div>
              </article>

              {/* Revolutionary Feature 2 */}
              <article className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <Network className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Monolithic Integration</h3>
                <h4 className="text-lg font-medium mb-4 text-purple-400">Complete ecosystem connectivity</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  LTI, SIS, SSO, Zoom, email, payment gateways, credential verification systems, and extensive API framework.
                </p>
                <div className="flex items-center space-x-2 bg-gray-700/50 rounded-lg px-4 py-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
                    15+ systems integrated
                  </span>
                </div>
              </article>

              {/* Revolutionary Feature 3 */}
              <article className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <BarChart className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Learning Analytics</h3>
                <h4 className="text-lg font-medium mb-4 text-cyan-400">xAPI/LRS compliant tracking</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Learning event tracking with predictive analytics. Real-time insights for student success and institutional excellence.
                </p>
                <div className="flex items-center space-x-2 bg-gray-700/50 rounded-lg px-4 py-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-indigo-200">
                    234 AI interactions per student
                  </span>
                </div>
              </article>

              {/* Revolutionary Feature 4 */}
              <article className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-gradient-to-r from-cyan-600 to-teal-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <Lock className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Enterprise Security</h3>
                <h4 className="text-lg font-medium mb-4 text-teal-400">Military-grade security framework</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cross-tenant isolation, comprehensive audit trails, and GDPR/FERPA compliance across all 130+ tables.
                </p>
                <div className="flex items-center space-x-2 bg-gray-700/50 rounded-lg px-4 py-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-200">
                    Enterprise-grade compliance
                  </span>
                </div>
              </article>

              {/* Revolutionary Feature 5 */}
              <article className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <Cpu className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Future-Ready Platform</h3>
                <h4 className="text-lg font-medium mb-4 text-amber-400">Built for tomorrow's technology</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Quantum computing, blockchain credentials, VR/AR learning, and neural interfaces. Extensible architecture supporting unlimited innovation.
                </p>
                <div className="flex items-center space-x-2 bg-gray-700/50 rounded-lg px-4 py-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-900 text-amber-200">
                    Quantum-ready foundation
                  </span>
                </div>
              </article>

              {/* Revolutionary Feature 6 */}
              <article className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 card-hover" role="listitem">
                <div className="bg-gradient-to-r from-red-600 to-pink-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <Server className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">High-Performance</h3>
                <h4 className="text-lg font-medium mb-4 text-red-400">Enterprise-scaling architecture</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Strategic indexing, materialized views, and geographic data replication with 99.98% system uptime.
                </p>
                <div className="flex items-center space-x-2 bg-gray-700/50 rounded-lg px-4 py-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900 text-red-200">
                    Million-user scalability
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* AI-Powered Benefits */}
        <section className="section-padding bg-gray-900 text-white relative overflow-hidden" aria-labelledby="ai-benefits-heading">
          <div className="container-custom relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span className="text-sm font-medium text-white">Powered by Advanced AI</span>
              </div>
              <h2 id="ai-benefits-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
                Experience the Power of AI-Driven Grading
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our cutting-edge artificial intelligence transforms how you grade, providing intelligent automation that learns and adapts to your teaching style
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Benefit 1 */}
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover border border-gray-700">
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Brain className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Smart Rubric Generation</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI analyzes your assignment and automatically creates comprehensive, customizable rubrics in seconds.
                </p>
                <ul className="space-y-2">
                  <li className="text-green-400 text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Context-aware criteria</span>
                  </li>
                  <li className="text-green-400 text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Fully customizable</span>
                  </li>
                </ul>
              </div>

              {/* Benefit 2 */}
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover border border-gray-700">
                <div className="bg-gray-700 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Plagiarism Detection</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Advanced AI detects plagiarism, paraphrasing, and AI-generated content. Maintain academic integrity effortlessly.
                </p>
                <ul className="space-y-2">
                  <li className="text-green-400 text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>AI content detection</span>
                  </li>
                  <li className="text-green-400 text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-1 flex-shrink-0" aria-hidden="true" />
                    <span>Detailed similarity reports</span>
                  </li>
                </ul>
              </div>

              {/* Benefit 3 */}
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover border border-gray-700">
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Intelligent Feedback</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI-powered feedback suggestions that are constructive, specific, and aligned with your teaching philosophy.
                </p>
                <ul className="space-y-2">
                  <li className="text-green-400 text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Personalized suggestions</span>
                  </li>
                  <li className="text-green-400 text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Style customization</span>
                  </li>
                </ul>
              </div>

              {/* Benefit 4 */}
              <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover border border-gray-700">
                <div className="bg-gray-700 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Learning Analytics</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI identifies patterns in student performance and provides actionable insights to improve teaching strategies.
                </p>
                <ul className="space-y-2">
                  <li className="text-green-400 text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Trend detection</span>
                  </li>
                  <li className="text-green-400 text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Predictive analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white" aria-labelledby="testimonials-heading">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Trusted by Educators Worldwide
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                See what educators are saying about their experience with GradeGenius
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative">
                <Quote className="h-10 w-10 text-gray-300 mb-4" aria-hidden="true" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "GradeGenius has transformed my workflow. What used to take me 10 hours now takes less than 2. The AI-generated rubrics are spot-on, and I can customize them effortlessly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                    Dr
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Dr. Sarah Mitchell</div>
                    <div className="text-sm text-gray-600">Professor of Computer Science, Stanford University</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative">
                <Quote className="h-10 w-10 text-gray-300 mb-4" aria-hidden="true" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "The feedback suggestions are incredibly helpful. They're always constructive and aligned with my teaching style. My students have noticed the improvement in feedback quality."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold mr-3">
                    MJ
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Michael Johnson</div>
                    <div className="text-sm text-gray-600">High School English Teacher, Boston Public Schools</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative">
                <Quote className="h-10 w-10 text-gray-300 mb-4" aria-hidden="true" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "As a TA managing 200+ students, GradeGenius is a lifesaver. The consistency checks ensure fair grading, and the analytics help me identify students who need extra support."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                    EP
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Emily Patel</div>
                    <div className="text-sm text-gray-600">Graduate TA, MIT Mathematics Department</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Responsible AI Section */}
        <section className="section-padding bg-gray-50" aria-labelledby="trust-heading">
          <div className="container-custom relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-6">
                <Shield className="h-4 w-4 text-white" aria-hidden="true" />
                <span className="text-sm font-medium">Built on Responsible AI</span>
              </div>
              <h2 id="trust-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
                Why Educators Trust GradeGenius
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                We've built GradeGenius to address the real concerns educators have about AI grading tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Trust Factor 1 */}
              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Human-in-the-Loop Design</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our AI never auto-grades. It only <strong>suggests</strong> grades and feedback. You always have final control to review, adjust, and approve before students see anything.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  This prevents AI hallucinations where an AI might incorrectly claim a student missed a concept that was actually covered in their work.
                </p>
              </div>

              {/* Trust Factor 2 */}
              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="bg-gray-900 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Responsible Plagiarism Detection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We detect plagiarism, paraphrasing, and AI-generated content—but we're transparent about limitations. No tool is 100% accurate.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our reports show <em>similarity scores</em> and <em>evidence</em>, not accusations. You decide how to handle each case, preventing false positives that could harm innocent students.
                </p>
              </div>

              {/* Trust Factor 3 */}
              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="bg-blue-600 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">FERPA & GDPR Compliant</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Student data is legally protected. We use enterprise AI agreements with <strong>zero data retention</strong> and host on secure, compliant infrastructure.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Your student essays never train public AI models. All data is encrypted in transit and at rest, meeting strict educational privacy standards.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 text-sm max-w-3xl mx-auto px-4">
                GradeGenius is designed by educators, for educators. We understand that AI is a tool to <strong>assist</strong> your expertise, never replace it.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-padding bg-white relative overflow-hidden" aria-labelledby="how-it-works-heading">
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-900">Simple 3-Step Process</span>
              </div>
              <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Get started in minutes with our simple three-step process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" role="list">
              <div className="text-center group" role="listitem">
                <div className="bg-blue-600 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white" aria-hidden="true">
                  1
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Create Assignment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upload your assignment details and let our AI generate a comprehensive rubric tailored to your requirements.
                </p>
              </div>

              <div className="text-center group relative" role="listitem">
                {/* Connection line for desktop */}
                <div className="hidden md:block absolute top-10 -left-12 w-24 h-0.5 bg-gray-300" aria-hidden="true"></div>

                <div className="bg-gray-900 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white" aria-hidden="true">
                  2
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Students Submit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Students upload their work through the secure portal. All submissions are organized and ready for review.
                </p>
              </div>

              <div className="text-center group relative" role="listitem">
                {/* Connection line for desktop */}
                <div className="hidden md:block absolute top-10 -left-12 w-24 h-0.5 bg-gray-300" aria-hidden="true"></div>

                <div className="bg-blue-600 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white" aria-hidden="true">
                  3
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Review & Approve</h3>
                <p className="text-gray-600 leading-relaxed">
                  Review AI suggestions, make adjustments, and approve final grades. You're always in control—AI assists, you decide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-900" aria-labelledby="cta-heading">
          <div className="container-custom text-center text-white">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Grading?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of educators who are saving time and providing better feedback with GradeGenius.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="http://localhost:3002/login"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="border-white text-white hover:bg-gray-800"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import AboutOverview from "@/pages/AboutOverview";
import AboutPhilosophy from "@/pages/AboutPhilosophy";
import AboutBoard from "@/pages/AboutBoard";
import AboutPresence from "@/pages/AboutPresence";
import AboutEbcUrban from "@/pages/AboutEbcUrban";
import Expertise from "@/pages/Expertise";
import Commitment from "@/pages/Commitment";
import Investors from "@/pages/Investors";
import Landmarks from "@/pages/Landmarks";
import Media from "@/pages/Media";
import HumanCapital from "@/pages/HumanCapital";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import ExpertiseDetail from "@/pages/ExpertiseDetail";
import ExpertiseNetworking from "@/pages/ExpertiseNetworking";
import ExpertiseElectricalGrid from "@/pages/ExpertiseElectricalGrid";
import ExpertiseInstallationMaintenance from "@/pages/ExpertiseInstallationMaintenance";
import ExpertiseSolarMicrogrid from "@/pages/ExpertiseSolarMicrogrid";
import ExpertiseRailwaySignalling from "@/pages/ExpertiseRailwaySignalling";
import ExpertiseSolarRooftop from "@/pages/ExpertiseSolarRooftop";
import ValuesMissionVision from "@/pages/ValuesMissionVision";
import ValuesSustainability from "@/pages/ValuesSustainability";
import ValuesQualityAssurance from "@/pages/ValuesQualityAssurance";
import ValuesSafety from "@/pages/ValuesSafety";
import ValuesESG from "@/pages/ValuesESG";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import InvestorsFinancial from "@/pages/InvestorsFinancial";
import InvestorsGovernance from "@/pages/InvestorsGovernance";
import InvestorsFilings from "@/pages/InvestorsFilings";
import InvestorsStakeholders from "@/pages/InvestorsStakeholders";
import InvestorsReports from "@/pages/InvestorsReports";
import InvestorsQuarterly from "@/pages/InvestorsQuarterly";
import PortfolioFeatured from "@/pages/PortfolioFeatured";
import PortfolioCompleted from "@/pages/PortfolioCompleted";
import PortfolioOngoing from "@/pages/PortfolioOngoing";
import PortfolioGallery from "@/pages/PortfolioGallery";
import PortfolioAwards from "@/pages/PortfolioAwards";
import MediaPress from "@/pages/MediaPress";
import MediaNews from "@/pages/MediaNews";
import MediaVideos from "@/pages/MediaVideos";
import MediaPhotos from "@/pages/MediaPhotos";
import MediaCoverage from "@/pages/MediaCoverage";
import HumanCapitalLeadership from "@/pages/HumanCapitalLeadership";
import HumanCapitalCareers from "@/pages/HumanCapitalCareers";
import HumanCapitalTraining from "@/pages/HumanCapitalTraining";
import HumanCapitalBenefits from "@/pages/HumanCapitalBenefits";
import HumanCapitalCulture from "@/pages/HumanCapitalCulture";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title> Ramsethu Construction - India's Leading Infrastructure Conglomerate</title>
          <meta name="description" content="Ramsethu Construction is India's leading infrastructure conglomerate with over 4 decades of excellence in construction and infrastructure development." />
        </Helmet>
        <Toaster />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/overview" element={<AboutOverview />} />
              <Route path="/about/philosophy" element={<AboutPhilosophy />} />
              <Route path="/about/board" element={<AboutBoard />} />
              <Route path="/about/presence" element={<AboutPresence />} />
              <Route path="/about/ebc-urban" element={<AboutEbcUrban />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/expertise/:id" element={<ExpertiseDetail />} />
              <Route path="/expertise/networking" element={<ExpertiseNetworking />} />
              <Route path="/expertise/electrical-grid" element={<ExpertiseElectricalGrid />} />
              <Route path="/expertise/installation-maintenance" element={<ExpertiseInstallationMaintenance />} />
              <Route path="/expertise/solar-microgrid" element={<ExpertiseSolarMicrogrid />} />
              <Route path="/expertise/railway-signalling" element={<ExpertiseRailwaySignalling />} />
              <Route path="/expertise/solar-rooftop" element={<ExpertiseSolarRooftop />} />
              <Route path="/commitment/mission-vision" element={<ValuesMissionVision />} />
              <Route path="/commitment/sustainability" element={<ValuesSustainability />} />
              <Route path="/commitment/quality-assurance" element={<ValuesQualityAssurance />} />
              <Route path="/commitment/safety" element={<ValuesSafety />} />
              <Route path="/commitment/esg" element={<ValuesESG />} />
              <Route path="/commitment" element={<Commitment />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/investors/financial" element={<InvestorsFinancial />} />
              <Route path="/investors/governance" element={<InvestorsGovernance />} />
              <Route path="/investors/filings" element={<InvestorsFilings />} />
              <Route path="/investors/stakeholders" element={<InvestorsStakeholders />} />
              <Route path="/investors/reports" element={<InvestorsReports />} />
              <Route path="/investors/quarterly" element={<InvestorsQuarterly />} />
              <Route path="/landmarks" element={<Landmarks />} />
              <Route path="/landmarks/featured" element={<PortfolioFeatured />} />
              <Route path="/landmarks/completed" element={<PortfolioCompleted />} />
              <Route path="/landmarks/ongoing" element={<PortfolioOngoing />} />
              <Route path="/landmarks/gallery" element={<PortfolioGallery />} />
              <Route path="/landmarks/awards" element={<PortfolioAwards />} />
              <Route path="/media" element={<Media />} />
              <Route path="/media/press" element={<MediaPress />} />
              <Route path="/media/news" element={<MediaNews />} />
              <Route path="/media/videos" element={<MediaVideos />} />
              <Route path="/media/photos" element={<MediaPhotos />} />
              <Route path="/media/coverage" element={<MediaCoverage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/human-capital" element={<HumanCapital />} />
              <Route path="/human-capital/leadership" element={<HumanCapitalLeadership />} />
              <Route path="/human-capital/careers" element={<HumanCapitalCareers />} />
              <Route path="/human-capital/training" element={<HumanCapitalTraining />} />
              <Route path="/human-capital/benefits" element={<HumanCapitalBenefits />} />
              <Route path="/human-capital/culture" element={<HumanCapitalCulture />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

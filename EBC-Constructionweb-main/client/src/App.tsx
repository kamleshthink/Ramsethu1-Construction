import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Expertise from "@/pages/Expertise";
import Commitment from "@/pages/Commitment";
import Investors from "@/pages/Investors";
import Landmarks from "@/pages/Landmarks";
import Media from "@/pages/Media";
import HumanCapital from "@/pages/HumanCapital";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import ExpertiseDetail from "@/pages/ExpertiseDetail";

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
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/expertise/:id" element={<ExpertiseDetail />} />
              <Route path="/commitment" element={<Commitment />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/landmarks" element={<Landmarks />} />
              <Route path="/media" element={<Media />} />
              <Route path="/human-capital" element={<HumanCapital />} />
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

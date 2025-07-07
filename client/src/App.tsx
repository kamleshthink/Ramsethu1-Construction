import { Switch, Route } from "wouter";
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

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/expertise" component={Expertise} />
        <Route path="/commitment" component={Commitment} />
        <Route path="/investors" component={Investors} />
        <Route path="/landmarks" component={Landmarks} />
        <Route path="/media" component={Media} />
        <Route path="/human-capital" component={HumanCapital} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>EBC Limited - India's Leading Infrastructure Conglomerate</title>
          <meta name="description" content="EBC Limited is India's leading infrastructure conglomerate with over 4 decades of excellence in construction and infrastructure development." />
        </Helmet>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

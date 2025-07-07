import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { Download, TrendingUp, FileText, Calendar, PieChart, BarChart3 } from "lucide-react";

export default function Investors() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Investor Relations - NCC Limited</title>
        <meta name="description" content="Access NCC Limited's financial reports, annual reports, shareholding information, and investor resources." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transparent reporting and sustainable growth for our stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Highlights</h2>
              <p className="text-xl text-gray-600">Key financial metrics and performance indicators</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">₹12,500 Cr</div>
                  <div className="text-sm text-gray-600">Annual Revenue</div>
                  <Badge variant="outline" className="mt-2">FY 2023-24</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PieChart className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">₹25,000 Cr</div>
                  <div className="text-sm text-gray-600">Order Book</div>
                  <Badge variant="outline" className="mt-2">As of Mar 2024</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">12.5%</div>
                  <div className="text-sm text-gray-600">EBITDA Margin</div>
                  <Badge variant="outline" className="mt-2">FY 2023-24</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">15.8%</div>
                  <div className="text-sm text-gray-600">ROE</div>
                  <Badge variant="outline" className="mt-2">FY 2023-24</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Reports & Documents</h2>
              <p className="text-xl text-gray-600">Access our latest financial reports and regulatory filings</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Annual Reports */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Annual Reports</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Comprehensive annual reports with detailed financial performance and strategic insights.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Annual Report 2023-24</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Annual Report 2022-23</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quarterly Results */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Quarterly Results</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Latest quarterly financial results and management commentary.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Q4 FY 2023-24</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Q3 FY 2023-24</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Corporate Governance */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <PieChart className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Corporate Governance</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Board composition, governance policies, and compliance reports.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Board Charter</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Code of Conduct</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Shareholding Pattern */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Shareholding Pattern</h2>
              <p className="text-xl text-gray-600">Distribution of shareholding as of March 2024</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Distribution</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Promoters</span>
                    <span className="text-xl font-bold text-primary">35.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Public Shareholders</span>
                    <span className="text-xl font-bold text-primary">42.8%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Institutional Investors</span>
                    <span className="text-xl font-bold text-primary">22.0%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Information</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Total Shares Outstanding</div>
                    <div className="text-xl font-bold text-gray-900">48.2 Crore</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Market Cap</div>
                    <div className="text-xl font-bold text-gray-900">₹8,500 Crore</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Book Value per Share</div>
                    <div className="text-xl font-bold text-gray-900">₹125</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investor Relations Contact</h2>
            <p className="text-xl text-gray-600 mb-8">
              For investor queries and additional information
            </p>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Investor Relations Team</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Email:</strong> investors@nccltd.in</p>
                      <p><strong>Phone:</strong> +91 40 2326 8888</p>
                      <p><strong>Address:</strong> NCC House, Madhapur, Hyderabad - 500081</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Registrar & Transfer Agent</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Company:</strong> KFin Technologies Limited</p>
                      <p><strong>Email:</strong> einward.ris@kfintech.com</p>
                      <p><strong>Phone:</strong> +91 40 6716 2222</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

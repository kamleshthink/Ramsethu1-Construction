import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Company, office, and bank details
const companyInfo = {
  name: "Ramsethu Electrical & Mechanical Solutions Pvt. Ltd.",
  cin: "U74999JH2016PTC009115",
  phones: [
    "+91-8340360437",
    "+91-9601874348",
    "+91-6202464498",
    "+91-6207510117",
    "+91-8758871045"
  ],
  email: "ramsethu.spl@gmail.com"
};

const headOffice = {
  label: "Registered / Head Office",
  address: [
    "C/O Rajendra Prasad Mehta",
    "Sijhua, Bariyath, Ichak",
    "District – Hazaribagh, Jharkhand – 825402",
    "Post Office: Bariyath",
    "Police Station: Ichak"
  ]
};

const branchOffices = [
  {
    label: "Branch Office – Jharkhand (Ranchi)",
    address: [
      "Opposite Ankur Nursery",
      "C/O Sant Prasad",
      "Gutuwa, Kathalmore, Ranchi – 835222, Jharkhand"
    ]
  },
  {
    label: "Branch Office – Uttar Pradesh (Prayagraj)",
    address: [
      "Vikesh Kumar",
      "Flat 2L, Tower 01",
      "Rudra Akriti Apartment",
      "Naini, Allahabad – 211008"
    ]
  }
];

const officialDocs = [
  { type: "PAN", value: "AAHCR9097G" },
  { type: "GST", value: "20AAHCR9097G1Z5" },
  { type: "PF Code", value: "JHRAN1599155000" },
  { type: "ESIC Code", value: "60001598270001019" },
  { type: "Electrical License No.", value: "JH\\EC\\3368 (Valid till 31.12.2024)" }
];

const banks = [
  "ICICI Bank – Matwari Branch, Hazaribagh",
  "State Bank of India – RIMS Branch, Ranchi",
  "HDFC Bank – Matwari Branch, Hazaribagh"
];

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for your message! We will get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us - Ramsethu Construction</title>
        <meta name="description" content="Get in touch with Ramsethu Construction. Contact our offices across India or send us a message for your infrastructure development needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get in touch for your infrastructure development needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <Card>
                  <CardContent className="p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter subject" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project requirements..."
                                  rows={5}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" size="lg" className="w-full">
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info (Updated) */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="font-semibold text-primary mb-1">{companyInfo.name}</div>
                      <div className="text-xs text-gray-600 mb-1">CIN: {companyInfo.cin}</div>
                      <div className="flex flex-wrap gap-2 mb-1">
                        {companyInfo.phones.map((ph, i) => (
                          <span key={i} className="inline-flex items-center gap-1 text-gray-700 text-sm"><Phone className="h-4 w-4" /> {ph}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-gray-700 text-sm">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${companyInfo.email}`} className="underline hover:text-primary">{companyInfo.email}</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="font-semibold text-primary mb-2">🏢 {headOffice.label}</div>
                    {headOffice.address.map((line, i) => (
                      <div key={i} className="text-gray-700 text-sm">{line}</div>
                    ))}
                  </CardContent>
                </Card>
                {branchOffices.map((b, idx) => (
                  <Card key={idx} className="mb-6">
                    <CardContent className="p-6">
                      <div className="font-semibold text-primary mb-2">🏢 {b.label}</div>
                      {b.address.map((line, i) => (
                        <div key={i} className="text-gray-700 text-sm">{line}</div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
                {/* Official Docs Table */}
                {/* <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="font-semibold text-primary mb-2">Official Company Information</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      {officialDocs.map((doc, i) => (
                        <div key={i} className="flex justify-between border-b border-gray-100 py-1">
                          <span className="text-gray-700 font-medium">{doc.type}</span>
                          <span className="text-gray-600">{doc.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card> */}
                {/* Bank Details */}
                <Card>
                  <CardContent className="p-6">
                    <div className="font-semibold text-primary mb-2">🏦 Our Principal Bankers</div>
                    <ul className="list-disc pl-6 text-gray-700 text-sm">
                      {banks.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
              <p className="text-xl text-gray-600">Pan India presence with offices across major cities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* The offices.map block was removed as per the edit hint. */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Headquarters</h2>
            </div>
            
            <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: "400px" }}>
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Ramsetu Construction House, Madhapur, Hyderabad</p>
                  <p className="text-xs mt-2">Google Maps integration would be implemented here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";
import { Play, Calendar, Award, Newspaper, Video } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "EBC Limited Wins Major Infrastructure Contract Worth ₹5,000 Crores",
    excerpt: "The company has secured a significant railway infrastructure project that will enhance connectivity across three states.",
    date: "2024-01-15",
    category: "Business",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Sustainability Initiative: NCC Commits to Carbon Neutral Operations by 2030",
    excerpt: "The company announces comprehensive environmental strategy to reduce carbon footprint across all operations.",
    date: "2024-01-10",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "AIIMS Project Completion Ahead of Schedule",
    excerpt: "NCC successfully completes the state-of-the-art medical facility two months ahead of the original timeline.",
    date: "2024-01-05",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

const videos = [
  {
    id: 1,
    title: "The Story of Dr. A V S Raju - Our Visionary Leader",
    description: "Biography and journey of our Founder Chairman Emeritus",
    duration: "8:16",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "EBC Corporate Film 2024",
    description: "Showcasing our infrastructure excellence across India",
    duration: "5:42",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Behind the Scenes: AIIMS Construction",
    description: "Time-lapse documentation of our healthcare infrastructure project",
    duration: "3:28",
    thumbnail: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const events = [
  {
    id: 1,
    title: "Annual Shareholders Meeting 2024",
    date: "2024-02-15",
    location: "Hyderabad",
    description: "Annual general meeting to discuss company performance and future strategy."
  },
  {
    id: 2,
    title: "Infrastructure Summit Participation",
    date: "2024-03-10",
    location: "Mumbai",
    description: "EBC leadership panel discussion on sustainable infrastructure development."
  },
  {
    id: 3,
    title: "Safety Week Celebration",
    date: "2024-04-01",
    location: "All Sites",
    description: "Company-wide safety awareness and training programs across all project sites."
  }
];

const awards = [
  {
    id: 1,
    title: "Excellence in Infrastructure Award 2023",
    organization: "Construction Industry Development Council",
    year: "2023",
    description: "Recognized for outstanding contribution to India's infrastructure development."
  },
  {
    id: 2,
    title: "Best Employer Award",
    organization: "Indian Chamber of Commerce",
    year: "2023",
    description: "Acknowledged for exceptional employee welfare and development programs."
  },
  {
    id: 3,
    title: "Sustainability Champion",
    organization: "Green Building Council",
    year: "2022",
    description: "Awarded for implementing environmentally sustainable construction practices."
  }
];

export default function Media() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Media Center - EBC Limited</title>
        <meta name="description" content="Latest news, videos, events, and awards from EBC Limited. Stay updated with our infrastructure developments and company achievements." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Center</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Stay updated with our latest news, achievements, and insights
            </p>
          </div>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="news" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="news" className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4" />
                  News
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Videos
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Events
                </TabsTrigger>
                <TabsTrigger value="awards" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Awards
                </TabsTrigger>
              </TabsList>

              {/* News Tab */}
              <TabsContent value="news">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newsItems.map((news) => (
                    <Card key={news.id} className="overflow-hidden card-hover">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{news.category}</Badge>
                          <span className="text-sm text-gray-500">
                            {new Date(news.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
                        <p className="text-gray-600 text-sm">{news.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videos.map((video) => (
                    <Card key={video.id} className="overflow-hidden card-hover">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <Button
                            size="lg"
                            variant="secondary"
                            className="rounded-full w-16 h-16"
                            onClick={() => setSelectedVideo(video.embedUrl)}
                          >
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                        <p className="text-gray-600 text-sm">{video.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events">
                <div className="space-y-6">
                  {events.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-2">{event.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {new Date(event.date).toLocaleDateString()}
                              </span>
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Button variant="outline">Learn More</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Awards Tab */}
              <TabsContent value="awards">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {awards.map((award) => (
                    <Card key={award.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                            <p className="text-gray-600 mb-2">{award.description}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span>{award.organization}</span>
                              <Badge variant="outline">{award.year}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={selectedVideo}
                title="Video Player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 text-right">
              <Button variant="outline" onClick={() => setSelectedVideo(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

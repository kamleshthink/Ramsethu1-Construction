import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";
import { Play, Calendar, Award, Newspaper, Video } from "lucide-react";

// Real company data (now in English)
const newsItems = [
  {
    id: 1,
    title: "400kV Substation Project Successfully Completed with GE T&D India Ltd.",
    excerpt: "Ramsethu completed the high-voltage substation in Durgapur, WB ahead of schedule.",
    date: "2024-03-10",
    category: "Projects",
    image: "/assets/photos/construction photos/Networks_Telecommunications (1).jpg"
  },
  {
    id: 2,
    title: "25kWp Solar Microgrids Commissioned for Azure Power",
    excerpt: "Clean energy delivered to multiple villages in Jharkhand through solar microgrids.",
    date: "2024-02-18",
    category: "Renewable Energy",
    image: "/assets/photos/construction photos/solar microgrid.webp"
  },
  {
    id: 3,
    title: "Advanced Signalling Systems for Indian Railways",
    excerpt: "Signaling and telecom infrastructure upgraded across Eastern & South Eastern Railway zones.",
    date: "2024-01-25",
    category: "Railways",
    image: "/assets/photos/construction photos/Railway-Signaling.jpg"
  }
];

const videos = [
  {
    id: 1,
    title: "Ramsethu Corporate Film 2024",
    description: "A showcase of our company's achievements and landmark projects.",
    duration: "5:42",
    thumbnail: "/assets/photos/construction photos/WhatsApp Image 2025-07-07 at 19.43.55_93338e1f.jpg",
    embedUrl: "https://www.youtube.com/embed/1wZw7Rv6lGg"
  },
  {
    id: 2,
    title: "Solar Microgrid Success Story",
    description: "The story of successful solar microgrid deployment in Jharkhand villages.",
    duration: "3:28",
    thumbnail: "/assets/photos/construction photos/solar microgrid.webp",
    embedUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g"
  },
  {
    id: 3,
    title: "Railway Signalling Project Timelapse",
    description: "Timelapse video of our railway signalling project execution.",
    duration: "4:10",
    thumbnail: "/assets/photos/construction photos/Railway-Signaling.jpg",
    embedUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ"
  }
];

const events = [
  {
    id: 1,
    title: "Annual Shareholders Meeting 2024",
    date: "2024-04-15",
    location: "Ranchi, Jharkhand",
    description: "Annual meeting to discuss company growth and strategy."
  },
  {
    id: 2,
    title: "Safety Week Celebration",
    date: "2024-03-10",
    location: "All Sites",
    description: "Safety awareness and training programs across all project sites."
  },
  {
    id: 3,
    title: "Solar Project Inauguration",
    date: "2024-02-20",
    location: "Gumla, Jharkhand",
    description: "Inauguration of new solar project and its community impact."
  }
];

const awards = [
  {
    id: 1,
    title: "Excellence in Infrastructure Award",
    organization: "Construction Industry Development Council",
    year: "2023",
    description: "Honored for outstanding contribution to India's infrastructure development."
  },
  {
    id: 2,
    title: "Best Solar Project Implementation",
    organization: "Solar Energy Society of India",
    year: "2023",
    description: "Awarded for successful solar microgrid deployment in Jharkhand."
  },
  {
    id: 3,
    title: "Railway Infrastructure Excellence",
    organization: "Indian Railways",
    year: "2023",
    description: "Recognized for excellence in railway signalling systems."
  }
];

export default function Media() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Media Center - Ramsethu Construction </title>
        <meta name="description" content="Latest news, videos, events, and awards from Ramsethu Construction. Stay updated with our infrastructure developments and company achievements." />
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

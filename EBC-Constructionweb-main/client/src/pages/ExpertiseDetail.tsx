import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { expertiseData } from "@/data/expertiseData";

export default function ExpertiseDetail() {
  const { id } = useParams();
  const item = expertiseData.find((x) => x.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">Specialization Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{item.title} - Ramsethu Construction</title>
        <meta name="description" content={item.description} />
      </Helmet>
      <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{item.title}</h1>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl text-primary">
                <span className="text-4xl">{item.icon}</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">{item.description}</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-[21/9] overflow-hidden rounded-t-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Projects Completed in this Domain</h2>
                  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                    {item.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 
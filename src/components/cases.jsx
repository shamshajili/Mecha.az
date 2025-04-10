import React from 'react';
import { ArrowRight, Factory, Bot as Robot, BarChart3, Boxes } from 'lucide-react';

const useCases = [
  {
    title: "Smart Factory Deployments",
    description: "Comprehensive IoT and robotics integration for modern manufacturing facilities.",
    icon: Factory,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Custom Robotics Workflows",
    description: "Tailored automation solutions for specific manufacturing processes and requirements.",
    icon: Robot,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Predictive Maintenance",
    description: "AI-powered systems that predict equipment failures before they occur.",
    icon: BarChart3,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Manufacturing-as-a-Service",
    description: "On-demand production capabilities with distributed manufacturing networks.",
    icon: Boxes,
    image: "/placeholder.svg?height=300&width=400",
  },
];

// Custom Card Component
const Card = ({ children, className }) => (
  <div className={`bg-card/50 backdrop-blur-sm border border-gray-400 rounded-lg overflow-hidden hover:border-cyan-400 transition-colors ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-0">
    {children}
  </div>
);

const Button = ({ children, className, variant }) => (
  <button className={`text-white ${className} ${variant === 'ghost' ? 'bg-transparent hover:bg-transparent' : 'bg-cyan-400 hover:bg-cyan-600'}`}>
    {children}
  </button>
);

export function UseCasesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space">
            Real-World <span className="bg-gradient-to-r from-cyan-500 to-green-500 text-transparent bg-clip-text">Use Cases</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover how our technology is transforming manufacturing operations across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="mb-8">
              <CardContent>
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <useCase.icon className="h-16 w-16 text-cyan-200" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <useCase.icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-medium">{useCase.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <Button variant="ghost" className="gap-2 p-0 hover:bg-transparent hover:text-cyan-400">
                    Learn more <ArrowRight className="h-4 w-4 inline" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

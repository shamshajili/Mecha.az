import { 
    Database, 
    LineChart, 
    Cpu, 
    Shield 
  } from "lucide-react";
  
  const features = [
    {
      icon: Database,
      title: "API-First Design",
      description:
        "Modular architecture with comprehensive APIs for seamless integration with existing systems.",
      iconColor: "text-cyan-400",
    },
    {
      icon: LineChart,
      title: "Real-time Analytics",
      description:
        "Monitor performance metrics and receive alerts with our advanced dashboard system.",
      iconColor: "text-green-400",
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description:
        "Process data at the source with low-latency edge computing capabilities.",
      iconColor: "text-purple-400",
    },
    {
      icon: Shield,
      title: "Secure Operations",
      description:
        "End-to-end encryption and secure local + remote operation capabilities.",
      iconColor: "text-teal-400",
    },
  ];
  
  const FeaturesIcon = () => {
    return (
      <section className="py-5 bg-black text-white px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturesIcon;
  
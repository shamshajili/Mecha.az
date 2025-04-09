import { 
    Bot, 
    Cpu, 
    Factory, 
    Printer, 
    Database, 
    Network 
  } from "lucide-react";
  
  const features = [
    {
      icon: Cpu,
      title: "IoT Integrations",
      description:
        "Connect sensors, MQTT protocols, and edge devices to create a seamless data flow across your manufacturing environment.",
    },
    {
      icon: Bot,
      title: "Robotics OS",
      description:
        "Our specialized operating system for industrial robots enables advanced automation and precise control.",
    },
    {
      icon: Factory,
      title: "Manufacturing Automation",
      description:
        "Streamline production processes with intelligent workflows and real-time monitoring systems.",
    },
    {
      icon: Printer,
      title: "Additive Manufacturing",
      description:
        "Comprehensive software stack for 3D printing and additive manufacturing with material optimization.",
    },
    {
      icon: Database,
      title: "Edge Computing",
      description:
        "Process data at the source with our edge computing solutions, reducing latency and bandwidth usage.",
    },
    {
      icon: Network,
      title: "DAO-based Contribution",
      description:
        "Decentralized autonomous organization structure for community-driven development and governance.",
    },
  ];
  

  const FeaturesSection = () => {
    return (
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-gray-900 rounded-lg p-[1px] h-auto"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-100 z-0" />
              <div className="relative z-10 bg-[#0c0c0c] rounded-lg p-6 border border-gray-800 group-hover:border-transparent transition-colors duration-100">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default FeaturesSection;

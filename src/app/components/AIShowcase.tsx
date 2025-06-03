import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Settings, Users, Database, Search, Brain, Zap, Target, TrendingUp } from 'lucide-react';

const AIShowcase = () => {
  const aiAssistants = [
    {
      name: "Strategy AI",
      description: "AI-powered business strategy consultant that analyzes market position and creates AI adoption roadmaps.",
      icon: Settings,
      features: ["Market Analysis", "ROI Forecasting", "Implementation Planning"],
      color: "blue",
      specialty: "Business Intelligence",
      accuracy: "94%"
    },
    {
      name: "Workflow AI",
      description: "Intelligent process automation that identifies bottlenecks and suggests AI-driven optimizations.",
      icon: Users,
      features: ["Process Mapping", "Automation Suggestions", "Efficiency Metrics"],
      color: "purple",
      specialty: "Process Optimization",
      accuracy: "89%"
    },
    {
      name: "Data AI",
      description: "Advanced analytics assistant transforming data into actionable insights and predictive models.",
      icon: Database,
      features: ["Data Analysis", "Predictive Modeling", "Custom Dashboards"],
      color: "green",
      specialty: "Data Science",
      accuracy: "96%"
    },
    {
      name: "Research AI",
      description: "Comprehensive research assistant gathering market intelligence and competitive analysis.",
      icon: Search,
      features: ["Market Research", "Competitor Analysis", "Trend Forecasting"],
      color: "orange",
      specialty: "Market Intelligence",
      accuracy: "92%"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500/50 hover:border-blue-400 bg-gradient-to-br from-blue-600/10 to-blue-800/10",
      purple: "border-purple-500/50 hover:border-purple-400 bg-gradient-to-br from-purple-600/10 to-purple-800/10",
      green: "border-green-500/50 hover:border-green-400 bg-gradient-to-br from-green-600/10 to-green-800/10",
      orange: "border-orange-500/50 hover:border-orange-400 bg-gradient-to-br from-orange-600/10 to-orange-800/10"
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-400",
      purple: "text-purple-400",
      green: "text-green-400",
      orange: "text-orange-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-6 bg-gray-900 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-600/20 p-3 rounded-lg border border-blue-500/30 mr-4">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Meet Your AI Assistants
              </h2>
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mt-2">
                Specialized AI Franchise
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Our specialized AI franchise offers dedicated assistants for every aspect of your transformation journey, 
            each optimized for specific business domains and challenges.
          </p>
        </div>
        
        {/* AI Assistants Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {aiAssistants.map((ai, index) => (
            <Card key={index} className={`${getColorClasses(ai.color)} border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}>
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`bg-${ai.color}-600/20 p-3 rounded-xl border border-${ai.color}-500/30`}>
                      <ai.icon className={`w-8 h-8 ${getIconColor(ai.color)}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">{ai.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full bg-${ai.color}-600/20 ${getIconColor(ai.color)} border border-${ai.color}-500/30`}>
                          {ai.specialty}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className={`text-xs ${getIconColor(ai.color)} font-semibold`}>
                          {ai.accuracy} Accuracy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`p-2 rounded-lg bg-${ai.color}-600/10`}>
                    <Target className={`w-5 h-5 ${getIconColor(ai.color)}`} />
                  </div>
                </div>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {ai.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    KEY CAPABILITIES
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {ai.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 bg-gray-800/40 p-2 rounded-lg">
                        <div className={`w-2 h-2 bg-${ai.color}-400 rounded-full mr-3`}></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className={`flex-1 flex items-center justify-center bg-${ai.color}-600/20 hover:bg-${ai.color}-600/30 rounded-2xl cursor-pointer ${getIconColor(ai.color)} border border-${ai.color}-500/30`}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Learn More
                  </button>
                  <button className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    Demo
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA section */}
        <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Meet Your AI Team?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Each AI assistant is trained on industry-specific data and continuously learns from your business processes.
          </p>
          <button className="bg-blue-600 rounded-2xl cursor-pointer hover:bg-blue-700 text-white px-8 py-3">
            <Brain className="w-5 h-5 mr-2" />
            Schedule AI Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;

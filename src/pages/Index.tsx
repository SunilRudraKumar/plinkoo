import { Token3D } from "@/components/Token3D";
import { CountdownTimer } from "@/components/CountdownTimer";
import { TokenCalculator } from "@/components/TokenCalculator";
import { Button } from "@/components/ui/button";
import { BuyGuide } from "@/components/BuyGuide";
import { TokenMetrics } from "@/components/TokenMetrics";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-crypto-dark to-black text-white relative">
      <BackgroundAnimation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-crypto-primary to-crypto-secondary">
              ComplianceAI Presale
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Join the future of regulatory compliance powered by artificial intelligence
            </p>
            <Button className="bg-crypto-primary hover:bg-crypto-accent text-lg px-8 py-6">
              Connect Wallet
            </Button>
          </div>
          <div className="animate-float">
            <Token3D />
          </div>
        </div>
      </div>

      {/* Presale Timer */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Presale Ends In</h2>
        <CountdownTimer />
      </div>

      {/* Token Metrics */}
      <TokenMetrics />

      {/* Buy Guide */}
      <BuyGuide />

      {/* Token Calculator Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <TokenCalculator />
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Invest Now?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Early Access",
              description: "Get priority access to the platform before public launch"
            },
            {
              title: "Token Utility",
              description: "Use tokens for governance and platform services"
            },
            {
              title: "Growth Potential",
              description: "Benefit from the expanding compliance AI market"
            }
          ].map((feature) => (
            <div key={feature.title} className="bg-crypto-dark/50 backdrop-blur-lg p-6 rounded-lg border border-crypto-primary/20 hover:border-crypto-primary/40 transition-all group animate-fade-in">
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
import { Token3D } from "@/components/Token3D";
import { CountdownTimer } from "@/components/CountdownTimer";
import { TokenCalculator } from "@/components/TokenCalculator";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-crypto-dark to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
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

      {/* Token Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Token Metrics</h2>
            <div className="grid gap-4">
              <div className="bg-crypto-dark p-4 rounded-lg">
                <div className="text-sm text-gray-400">Total Supply</div>
                <div className="text-xl font-bold">100,000,000 CMAI</div>
              </div>
              <div className="bg-crypto-dark p-4 rounded-lg">
                <div className="text-sm text-gray-400">Presale Price</div>
                <div className="text-xl font-bold">0.1 USDT</div>
              </div>
              <div className="bg-crypto-dark p-4 rounded-lg">
                <div className="text-sm text-gray-400">Minimum Purchase</div>
                <div className="text-xl font-bold">100 USDT</div>
              </div>
            </div>
          </div>
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
            <div key={feature.title} className="bg-crypto-dark p-6 rounded-lg">
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
import { Pie } from "recharts";
import { Card } from "./ui/card";

export const TokenMetrics = () => {
  const data = [
    { name: "Presale", value: 30, color: "#6366F1" },
    { name: "Liquidity", value: 25, color: "#8B5CF6" },
    { name: "Team", value: 15, color: "#4F46E5" },
    { name: "Marketing", value: 20, color: "#3730A3" },
    { name: "Reserve", value: 10, color: "#312E81" }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-crypto-primary to-crypto-secondary bg-clip-text text-transparent">
          Token Metrics
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-crypto-dark/50 backdrop-blur-lg border-crypto-primary/20">
            <h3 className="text-xl font-semibold mb-4">Token Distribution</h3>
            <div className="grid grid-cols-2 gap-4">
              {data.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-gray-400">{item.name}</span>
                  <span className="text-sm font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6 bg-crypto-dark/50 backdrop-blur-lg border-crypto-primary/20">
            <h3 className="text-xl font-semibold mb-4">Token Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Total Supply</p>
                <p className="text-lg font-semibold">100,000,000 CMAI</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Initial Price</p>
                <p className="text-lg font-semibold">$0.1 USDT</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Listing Price</p>
                <p className="text-lg font-semibold">$0.2 USDT</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
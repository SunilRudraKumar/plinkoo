import { Check } from "lucide-react";

export const BuyGuide = () => {
  const steps = [
    {
      title: "Connect Wallet",
      description: "Click the 'Connect Wallet' button and select your preferred wallet (MetaMask, WalletConnect, etc.)"
    },
    {
      title: "Enter Amount",
      description: "Input the amount of USDT you want to invest in the token calculator"
    },
    {
      title: "Approve Transaction",
      description: "Confirm the transaction in your wallet and approve the USDT spending"
    },
    {
      title: "Receive Tokens",
      description: "Once confirmed, your tokens will be automatically sent to your wallet"
    }
  ];

  return (
    <div className="py-16 bg-crypto-dark/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-crypto-primary to-crypto-secondary bg-clip-text text-transparent">
          How to Buy
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 bg-crypto-dark rounded-lg border border-crypto-primary/20 hover:border-crypto-primary/40 transition-all group">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-crypto-primary rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 pt-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
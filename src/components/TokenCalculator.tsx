import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const TokenCalculator = () => {
  const [amount, setAmount] = useState('');
  const tokenPrice = 0.1; // USDT per token

  const calculateTokens = () => {
    return (Number(amount) / tokenPrice).toFixed(2);
  };

  return (
    <div className="bg-crypto-dark p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Token Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-2">Amount in USDT</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-gray-800"
            placeholder="Enter amount"
          />
        </div>
        <div className="text-lg">
          You will receive: <span className="text-crypto-primary font-bold">{calculateTokens()} Tokens</span>
        </div>
        <Button className="w-full bg-crypto-primary hover:bg-crypto-accent">
          Buy Tokens
        </Button>
      </div>
    </div>
  );
};
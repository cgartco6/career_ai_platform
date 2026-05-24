'use client';
const tiers = [
  { name: "Starter", price: 149, desc: "20 resumes/month" },
  { name: "Pro", price: 299, desc: "Unlimited everything" },
  { name: "Enterprise", price: 799, desc: "Team & API access" }
];

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-center mb-12">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div key={i} className="border-2 border-gray-200 rounded-3xl p-10 hover:border-blue-600 transition">
            <h2 className="text-3xl font-bold">{tier.name}</h2>
            <p className="text-6xl font-bold mt-6">R{tier.price}<span className="text-lg">/mo</span></p>
            <p className="mt-4">{tier.desc}</p>
            <button className="w-full mt-10 bg-blue-600 text-white py-4 rounded-2xl text-lg">Upgrade Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

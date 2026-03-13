const features = [
  {
    name: "Lightning Fast",
    description: "Optimized performance ensures your work gets done in record time.",
    icon: "⚡",
  },
  {
    name: "Secure & Reliable",
    description: "Enterprise-grade security keeps your data safe and protected.",
    icon: "🔒",
  },
  {
    name: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and workflows.",
    icon: "🔗",
  },
  {
    name: "24/7 Support",
    description: "Our dedicated team is always here to help you succeed.",
    icon: "💬",
  },
  {
    name: "Scalable",
    description: "Grows with your business from startup to enterprise.",
    icon: "📈",
  },
  {
    name: "Analytics",
    description: "Powerful insights to make data-driven decisions.",
    icon: "📊",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Powerful features designed to help you work smarter, not harder.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <dt className="font-semibold text-gray-900 text-lg">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

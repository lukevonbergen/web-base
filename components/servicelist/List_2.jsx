import { Scissors, Brush, Sparkles } from 'lucide-react';

const categoryIcons = {
  Haircuts: <Scissors className="w-5 h-5 text-gray-500" />,
  'Styling & Colour': <Brush className="w-5 h-5 text-gray-500" />,
  Nails: <Sparkles className="w-5 h-5 text-gray-500" />,
};

export default function ServicePriceListIntermediate() {
  const services = [
    {
      category: 'Haircuts',
      items: [
        { name: 'Men’s Cut', price: '£25', duration: '30 mins', desc: 'Tailored to your style and finished with product.' },
        { name: 'Women’s Cut & Blow Dry', price: '£40', duration: '60 mins', desc: 'Full cut and style with blow-dry finish.' },
        { name: 'Children (under 12)', price: '£15', duration: '20 mins', desc: 'Gentle, quick cuts for kids.' },
      ],
    },
    {
      category: 'Styling & Colour',
      items: [
        { name: 'Full Colour', price: '£60', duration: '90 mins', desc: 'Professional full-head permanent colour.' },
        { name: 'Highlights', price: '£75', duration: '2 hrs', desc: 'Subtle to bold — customised for your tone.' },
        { name: 'Blow Dry', price: '£20', duration: '30 mins', desc: 'Volume and polish for any occasion.' },
      ],
    },
    {
      category: 'Nails',
      items: [
        { name: 'Classic Manicure', price: '£25', duration: '30 mins', desc: 'Trim, file, buff and polish.' },
        { name: 'Gel Polish', price: '£30', duration: '40 mins', desc: 'Long-lasting finish with colour of choice.' },
        { name: 'Nail Art Add-on', price: 'from £5', duration: 'Varies', desc: 'Custom designs to elevate your look.' },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services & Pricing</h2>

        <div className="space-y-16">
          {services.map(({ category, items }) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6 border-b pb-2">
                {categoryIcons[category]}
                <h3 className="text-2xl font-semibold text-gray-800">{category}</h3>
              </div>
              <ul className="space-y-6">
                {items.map(({ name, price, duration, desc }) => (
                  <li key={name} className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="md:w-2/3">
                      <h4 className="font-medium text-gray-800">{name}</h4>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0 md:text-left">
                      <p className="text-gray-800 font-semibold">{price}</p>
                      <p className="text-sm text-gray-500">{duration}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

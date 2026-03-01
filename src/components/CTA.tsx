import { PhoneCall, Send } from 'lucide-react';

interface CTAProps {
  title: string;
  description: string;
}

export default function CTA({ title, description }: CTAProps) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-sm border border-stone-200 p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-serif italic text-stone-800 mb-4">
        {title}
      </h2>
      <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+46730207511"
          className="inline-flex items-center justify-center px-8 py-3 bg-amber-700 text-white font-medium rounded-sm hover:bg-amber-800 transition-colors"
        >
          <PhoneCall size={18} className="mr-2" />
          Ring 073-020 75 11
        </a>
        <a
          href="mailto:info@nikasguldkant.se"
          className="inline-flex items-center justify-center px-8 py-3 bg-white text-stone-800 font-medium rounded-sm border border-stone-300 hover:bg-stone-50 transition-colors"
        >
          <Send size={18} className="mr-2" />
          Skicka förfrågan
        </a>
      </div>
    </div>
  );
}

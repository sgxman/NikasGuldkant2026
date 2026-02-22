import { Calendar, Users } from 'lucide-react';

interface Case {
  id: string;
  title: string;
  type: string;
  guests: number;
  image: string;
  description: string;
}

interface CaseCardProps {
  case_: Case;
  onClick: () => void;
}

export default function CaseCard({ case_, onClick }: CaseCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-sm border border-stone-200 overflow-hidden hover:shadow-lg transition-all group text-left"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={case_.image}
          alt={case_.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-stone-800 mb-2 group-hover:text-amber-800 transition-colors">
          {case_.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-stone-600 mb-3">
          <span className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {case_.type}
          </span>
          <span className="flex items-center">
            <Users size={16} className="mr-1" />
            {case_.guests} gäster
          </span>
        </div>
        <p className="text-sm text-stone-600 line-clamp-2">
          {case_.description}
        </p>
      </div>
    </button>
  );
}

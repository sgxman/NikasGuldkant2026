import { Info, X } from 'lucide-react';
import { useState } from 'react';
import { ProcessedImageProps } from '../utils/images';

interface ImageWithInfoProps extends Omit<ProcessedImageProps, 'imageText'> {
  alt: string;
  className?: string;
  imageText?: string;
}

export default function ImageWithInfo({ 
  src, 
  srcSet, 
  sizes, 
  style, 
  alt, 
  className = '', 
  imageText 
}: ImageWithInfoProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative w-full h-full">
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={className}
          style={style}
        />
        
        {imageText && (
          <button
            onClick={() => setShowModal(true)}
            className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all group"
            aria-label="Visa bildinformation"
          >
            <Info size={20} className="text-stone-700 group-hover:text-amber-800 transition-colors" />
          </button>
        )}
      </div>

      {/* Modal */}
      {showModal && imageText && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-sm border border-stone-200 p-6 max-w-lg w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-serif italic text-stone-800">Om bilden</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-stone-600 hover:text-amber-800 transition-colors"
                aria-label="Stäng"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-stone-600 leading-relaxed">
              {imageText}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { Star, StarHalf } from 'lucide-react';

interface RatingProps {
  rating: number;
  isReadOnly?: boolean;
  onRate?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  isReadOnly = false,
  onRate,
}) => {
  const wholeNumber = Math.floor(rating);
  const hasHalf = rating - wholeNumber >= 0.5;

  return (
    <div className='flex'>
      {[...Array(5)].map((_, index) => {
        if (index < wholeNumber) {
          return (
            <Star
              key={index}
              fill='#ff0'
              className={`cursor-${
                isReadOnly ? 'default' : 'pointer'
              } text-yellow-500`}
              onClick={() => !isReadOnly && onRate && onRate(index + 1)}
            />
          );
        }
        if (index === wholeNumber && hasHalf) {
          return (
            <StarHalf
              key={index}
              fill='#ff0'
              className={`cursor-${
                isReadOnly ? 'default' : 'pointer'
              } text-yellow-500`}
              onClick={() => !isReadOnly && onRate && onRate(index + 1)}
            />
          );
        }
        return (
          <Star
            key={index}
            fill='none'
            className={`cursor-${
              isReadOnly ? 'default' : 'pointer'
            } text-gray-300`}
            onClick={() => !isReadOnly && onRate && onRate(index + 1)}
          />
        );
      })}
    </div>
  );
};

export default Rating;

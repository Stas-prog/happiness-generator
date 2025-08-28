// src/components/SpinnerLogo.tsx
"use client";

export default function SpinnerLogo() {
  return (
    <div
      aria-hidden
      className="relative w-8 h-8 sm:w-10 sm:h-10 text-amber-700"
    >
      {/* обертання по осі X */}
      <div className="absolute inset-0 rounded-full [transform:rotateX(70deg)] [animation:spinDots_1s_linear_infinite]"></div>
      {/* обертання по осі Y з невеликою затримкою */}
      <div className="absolute inset-0 rounded-full text-amber-500 [transform:rotateY(70deg)] [animation:spinDots_1s_linear_infinite_.4s]"></div>
    </div>
  );
}

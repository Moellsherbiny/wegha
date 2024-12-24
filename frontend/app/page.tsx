// pages/index.tsx
import Link from 'next/link';

const Index = () => {
  return (
    <div className="bg-white text-darkBlue font-cairo h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">قريبًا...</h1>
        <p className="text-xl mb-8 text-gray-700">نحن نعمل على المشروع!</p>
        <Link href="/about" className="bg-mint text-darkBlue px-6 py-3 rounded-lg text-xl font-semibold">
            تعرف على الفريق
        
        </Link>
      </div>
    </div>
  );
};

export default Index;

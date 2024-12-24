// app/page.tsx
import Link from 'next/link';

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white text-center font-cairo">
      <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mb-4">وجهة قادمة قريبًا!</h1>
      <p className="text-xl text-gray-600 mb-8">نحن نعمل جاهدين لإطلاق منصة "وجهة". ترقبوا المزيد!</p>

      <Link href="/about">
        <button className="bg-mint text-white p-3 rounded-lg hover:bg-darkBlue transition duration-300">
          انتقل إلى صفحة "عن المشروع"
        </button>
      </Link>
    </div>
  );
};

export default ComingSoon;

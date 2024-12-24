import { FC } from 'react';
import { RiUser6Fill, RiUser6Line } from "react-icons/ri";
// Team members array with updated data
const teamMembers = [
   {
      id: 1,
      name: 'Mohamed Elsherbiny',
      role: 'Leader / Full-Stack',
      seed: 'MohamedElsherbiny', // Unique seed for DiceBear Avatars
      gender: 'male', // Gender identifier for icon choice
   },
   {
      id: 2,
      name: 'Kholod Eid',
      role: 'Frontend',
      seed: 'KholodEid',
      gender: 'female',
   },
   {
      id: 3,
      name: 'Hamed Elkasaby',
      role: 'Backend',
      seed: 'HamedElkasaby',
      gender: 'male',
   },
   {
      id: 4,
      name: 'Doaa Deif',
      role: 'Graphic Designer',
      seed: 'DoaaDeif',
      gender: 'female',
   },
   {
      id: 5,
      name: 'Rahma Emad',
      role: 'Motion Graphic',
      seed: 'RahmaEmad',
      gender: 'female',
   },
   {
      id: 6,
      name: 'Doaa Nasser',
      role: 'Animation',
      seed: 'DoaaNasser',
      gender: 'female',
   },
   {
      id: 7,
      name: 'Haneen Elsabagh',
      role: 'UI/UX',
      seed: 'HaneenElsabagh',
      gender: 'female',
   },
   {
      id: 8,
      name: 'Haneen Ramadan',
      role: 'Moderator',
      seed: 'HaneenRamadan',
      gender: 'female',
   },
   {
      id: 9,
      name: 'Kholod Ashraf',
      role: 'System Analyst',
      seed: 'KholodAshraf',
      gender: 'female',
   },
   {
      id: 10,
      name: 'Rana Abdelrahman',
      role: 'Data Entry',
      seed: 'RanaAbdelrahman',
      gender: 'female',
   },
];

// Function to choose an icon based on gender
const getGenderIcon = (gender: string) => {
   if (gender === 'male') {
      return <RiUser6Fill className="w-32 h-32 text-gray-500 mb-4" />;
   } else {
      return <RiUser6Line className="w-32 h-32 text-gray-500 mb-4" />;
   }
};

const About: FC = () => {
   return (
      <div className="bg-white text-darkBlue font-cairo">
         <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">عن مشروع وجهة</h1>
            <p className="text-lg text-center text-gray-700 mb-8">
               "وجهة" هي منصة مبتكرة تهدف إلى توجيه الطلاب لاختيار مساراتهم المهنية المناسبة، وإعداد خطط دراسية، وتجهيزهم لمستقبلهم الأكاديمي والمهني.
            </p>

            <h2 className="text-3xl font-semibold text-center mb-8">تعرف على الفريق</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
               {teamMembers.map((member) => (
                  <div key={member.id} className="flex flex-col items-center text-center bg-mint p-6 rounded-xl shadow-lg">
                     {/* Gender-based icon */}
                     {getGenderIcon(member.gender)}
                     <h3 className="text-lg font-semibold text-darkBlue">{member.name}</h3>
                     <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default About;

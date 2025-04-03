import React from 'react';
import Image from 'next/image';
import { FaBalanceScale, FaLaptopCode, FaHandshake, FaUserTie } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 text-right direction-rtl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <div className="bg-primary/20 rounded-lg p-2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/law-office.jpg"
                  alt="משרד עורכי דין rrrr"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJhAPYe0YQ1AAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              אודות <span className="text-primary">rrrr</span> - משרד עורכי דין מוביל
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              אנחנו משרד עורכי דין מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו, תוך התמקדות בתחום המשפט הטכנולוגי והבידור.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <FaLaptopCode size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">מומחיות בתחום הטכנולוגיה</h3>
                  <p className="text-gray-600">צוות המשרד מתמחה בליווי חברות טכנולוגיה, סטארט-אפים ויזמים בעולם הדיגיטלי והבידור, עם הבנה מעמיקה של האתגרים המשפטיים הייחודיים בתחום.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <FaBalanceScale size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">גישה מקצועית</h3>
                  <p className="text-gray-600">אנו מאמינים בשילוב של מקצועיות משפטית עם הבנה עסקית מעמיקה, המאפשרת לנו להציע פתרונות יצירתיים ויעילים המותאמים לצרכי הלקוח.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <FaHandshake size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">יחס אישי</h3>
                  <p className="text-gray-600">בניגוד למשרדים גדולים, אנו מקפידים על קשר ישיר ורציף עם לקוחותינו, תוך הבנת הצרכים הייחודיים של כל לקוח והתאמת השירות המשפטי בהתאם.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <FaUserTie size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">צוות מנוסה</h3>
                  <p className="text-gray-600">צוות עורכי הדין שלנו משלב ניסיון רב בתחום המשפט הטכנולוגי והבידור, עם ידע עדכני וחדשני בהתפתחויות האחרונות בתחום.</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-secondary/10 rounded-lg border-r-4 border-secondary">
              <p className="text-gray-800 font-medium">
                אנו מזמינים אתכם ליצור קשר ולהיווכח באיכות השירות והמקצועיות שלנו. משרד rrrr - הבחירה המובילה בתחום המשפט הטכנולוגי והבידור.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
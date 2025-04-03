import React from 'react';
import { FaBalanceScale, FaFileContract, FaShieldAlt, FaLaptopCode, FaGavel, FaRocket } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  benefit: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, benefit, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border-r-4 border-primary">
      <div className="flex items-start">
        <div className="text-secondary text-3xl ml-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="bg-gray-100 p-3 rounded-md">
            <p className="text-sm text-gray-700">
              <span className="font-bold text-secondary">היתרון ללקוח: </span>
              {benefit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "הגנה על קניין רוחני",
      description: "ייעוץ משפטי מקיף בנושאי פטנטים, זכויות יוצרים, סימני מסחר וסודות מסחריים בתחום הטכנולוגיה.",
      benefit: "הבטחת ההגנה על הנכסים הבלתי מוחשיים של העסק שלך ומניעת הפרות שעלולות לפגוע בערך החברה.",
      icon: <FaShieldAlt />
    },
    {
      title: "הסכמי רישוי תוכנה",
      description: "ניסוח, בדיקה וניהול משא ומתן על הסכמי רישוי תוכנה, הסכמי SaaS והסכמי שימוש למשתמשי קצה.",
      benefit: "הבטחת תנאים מסחריים הוגנים תוך הגנה על הקניין הרוחני והגבלת החשיפה לסיכונים משפטיים.",
      icon: <FaFileContract />
    },
    {
      title: "ציות לחוקי הגנת מידע ופרטיות",
      description: "ייעוץ בנושאי GDPR, CCPA, חוק הגנת הפרטיות הישראלי ותקנות אבטחת מידע.",
      benefit: "מניעת קנסות כבדים והגנה על המוניטין של החברה באמצעות ציות לרגולציה המחמירה בתחום הפרטיות.",
      icon: <FaBalanceScale />
    },
    {
      title: "בדיקת חוזים טכנולוגיים",
      description: "סקירה מקיפה של הסכמי פיתוח, תחזוקה, אחסון בענן, ושירותים טכנולוגיים אחרים.",
      benefit: "זיהוי וצמצום סיכונים משפטיים בהתקשרויות עסקיות, תוך הבטחת אינטרסים מסחריים מיטביים.",
      icon: <FaLaptopCode />
    },
    {
      title: "ייעוץ משפטי לסטארטאפים",
      description: "ליווי משפטי כולל לחברות הזנק, כולל הקמת חברה, גיוסי הון, אופציות לעובדים ומבנה תאגידי.",
      benefit: "יצירת בסיס משפטי איתן לצמיחה עתידית והימנעות מטעויות נפוצות שעלולות לעלות ביוקר בהמשך.",
      icon: <FaRocket />
    },
    {
      title: "יישוב סכסוכים טכנולוגיים",
      description: "ייצוג בהליכי ליטיגציה, בוררות וגישור בסכסוכים הקשורים לטכנולוגיה, הפרות חוזה והפרות קניין רוחני.",
      benefit: "הגנה אגרסיבית על האינטרסים של העסק שלך תוך מזעור עלויות וזמן ניהול הסכסוך.",
      icon: <FaGavel />
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">השירותים המשפטיים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            משרד עורכי הדין rrrr מתמחה במתן פתרונות משפטיים מקיפים לחברות טכנולוגיה, סטארטאפים ויזמים בעולם הדיגיטלי המתפתח במהירות.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
            לתיאום פגישת ייעוץ
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
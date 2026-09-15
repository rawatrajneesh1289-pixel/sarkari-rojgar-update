import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Privacy Policy (गोपनीयता नीति) | Sarkari Rozgar Update"
        description="Sarkari Rozgar Update की गोपनीयता नीति। जानिए हम आपके डेटा और कुकीज की सुरक्षा कैसे करते हैं।"
        canonicalUrl="https://sarkarirozgarupdate.com/privacy-policy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs my-4 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Privacy Policy (गोपनीयता नीति)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Effective Date: March 2026 | Domain: sarkarirozgarupdate.com
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 space-y-4 leading-relaxed">
            <p>
              Sarkari Rozgar Update (SRU) पर हम अपने पाठकों और उपयोगकर्ताओं की गोपनीयता का पूर्ण आदर करते हैं। यह दस्तावेज यह स्पष्ट करता है कि जब आप sarkarirozgarupdate.com का उपयोग करते हैं, तो किस प्रकार की जानकारी एकत्रित की जाती है और उसका उपयोग कैसे किया जाता है।
            </p>

            <h2 className="text-base font-bold text-slate-900">1. एकत्रित की जाने वाली जानकारी</h2>
            <p>
              सामान्य ब्राउजिंग के दौरान, हम कोई भी व्यक्तिगत संवेदनशील जानकारी (जैसे बैंक खाता, आधार नंबर, पासवर्ड) नहीं मांगते। सर्वर लॉग फाइलों के माध्यम से मानक एनालिटिक्स डेटा जैसे ब्राउज़र प्रकार, आईपी पता, रेफ़रिंग पृष्ठ एवं विज़िट का समय केवल साइट के प्रदर्शन और सुरक्षा विश्लेषण हेतु एकत्र किया जाता है।
            </p>

            <h2 className="text-base font-bold text-slate-900">2. कुकीज एवं विज्ञापन (Cookies & Advertising Partners)</h2>
            <p>
              हम उपयोगकर्ता के अनुभव को सुगम बनाने के लिए कुकीज़ का उपयोग कर सकते हैं। तीसरे पक्ष के विज्ञापन साझेदार (जैसे Google AdSense) हमारी साइट पर विज्ञापन प्रदर्शित करने के लिए कुकीज़ (DART कुकीज सहित) का उपयोग कर सकते हैं, ताकि उपयोगकर्ताओं की पूर्व प्राथमिकताओं के आधार पर प्रासंगिक विज्ञापन दिखाए जा सकें।
            </p>

            <h2 className="text-base font-bold text-slate-900">3. बाह्य वेबसाइटों के लिंक</h2>
            <p>
              हमारी वेबसाइट में विभिन्न सरकारी विभागों, विश्वविद्यालयों और आयोगों की वेबसाइटों के आधिकारिक लिंक शामिल हैं। एक बार जब आप उन बाह्य लिंक्स पर क्लिक करते हैं, तो उनकी व्यक्तिगत गोपनीयता नीतियां लागू होती हैं, जिस पर हमारा कोई नियंत्रण नहीं होता।
            </p>

            <h2 className="text-base font-bold text-slate-900">4. सहमति (Consent)</h2>
            <p>
              हमारी वेबसाइट का उपयोग करके, आप एतद्द्वारा हमारी गोपनीयता नीति से सहमति व्यक्त करते हैं और इसके नियमों को स्वीकार करते हैं।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Terms and Conditions (नियम व शर्तें) | Sarkari Rozgar Update"
        description="Sarkari Rozgar Update के उपयोग हेतु नियम व शर्तें।"
        canonicalUrl="https://sarkarirozgarupdate.com/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs my-4 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Terms & Conditions (नियम व शर्तें)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Effective Date: March 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 space-y-4 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">1. उपयोग की स्वीकृति</h2>
            <p>
              Sarkari Rozgar Update पर उपलब्ध सूचनाएं केवल शैक्षिक और सामान्य जागरूकता के प्रयोजनार्थ हैं। इस पोर्टल का उपयोग करते समय आप इन नियमों और शर्तों का पूर्ण पालन करने के लिए बाध्य हैं।
            </p>

            <h2 className="text-base font-bold text-slate-900">2. बौद्धिक संपदा अधिकार</h2>
            <p>
              इस वेबसाइट की मूल रचना, लेआउट, हिंदी सारांश, विश्लेषण और डेटा संरचना Sarkari Rozgar Update की संपत्ति हैं। किसी भी व्यक्ति अथवा संस्था द्वारा बिना अनुमति इस सामग्री का थोक पुनरुत्पादन या अनधिकृत स्क्रैपिंग निषिद्ध है।
            </p>

            <h2 className="text-base font-bold text-slate-900">3. उत्तरदायित्व की अस्वीकृति</h2>
            <p>
              यद्यपि हम सभी आंकड़ों और तिथियों की सत्यता सुनिश्चित करते हैं, किंतु सरकारी आयोगों द्वारा किसी भी समय परीक्षा कार्यक्रम, पदों की संख्या अथवा नियमों में किए जाने वाले परिवर्तनों के लिए हम बाध्य नहीं हैं। अभ्यर्थियों को हमेशा अंतिम निर्णय हेतु आधिकारिक विज्ञप्ति देखनी चाहिए।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

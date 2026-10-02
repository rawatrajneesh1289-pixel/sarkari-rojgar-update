import React from 'react';
import { ShieldAlert, AlertTriangle, ExternalLink, CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';

export const DisclaimerPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="सांविधिक अस्वीकरण (Disclaimer) | Sarkari Rozgar Update"
        description="Sarkari Rozgar Update का अस्वीकरण (Disclaimer) - यह एक स्वतंत्र सूचनात्मक वेबसाइट है और किसी भी सरकारी निकाय से सम्बद्ध नहीं है।"
        canonicalUrl="https://sarkari-rozgar-update.netlify.app/disclaimer"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Breadcrumbs items={[{ label: 'Disclaimer (अस्वीकरण)' }]} />

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs my-4 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>सांविधिक सूचना (Legal Notice)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Disclaimer (अस्वीकरण)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              अंतिम अद्यतन (Last Updated): मार्च 2026
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl text-amber-950 text-sm sm:text-base leading-relaxed">
            <h2 className="font-bold text-amber-900 text-base mb-1">
              गैर-सरकारी मंच की स्पष्ट घोषणा:
            </h2>
            <p>
              <strong>Sarkari Rozgar Update (sarkari-rozgar-update.netlify.app)</strong> एक स्वतंत्र, निजी और गैर-सरकारी सूचना पोर्टल है। यह वेबसाइट भारत सरकार, किसी भी राज्य सरकार, संघ राज्य क्षेत्र अथवा इनके किसी भी मंत्रालय, आयोग या विभाग से प्रत्यक्ष या अप्रत्यक्ष रूप से संबद्ध, अधिकृत या संचालित नहीं है।
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <h3 className="text-base font-bold text-slate-900">1. सूचना का स्रोत (Source of Information)</h3>
            <p>
              इस वेबसाइट पर प्रकाशित की जाने वाली सभी सूचनाएं, जैसे कि नवीनतम भर्ती विज्ञापन, प्रवेश पत्र, परीक्षा तिथियां, परिणाम, उत्तर कुंजी, सरकारी योजनाएं एवं छात्रवृत्तियां आदि सार्वजनिक रूप से उपलब्ध आधिकारिक स्रोतों, भारत के राजपत्र (Gazette of India), रोजगार समाचार (Employment News) तथा संबंधित आयोगों (SSC, UPSC, State PSCs, व्यापम, Railway Boards) की आधिकारिक वेबसाइटों से संकलित की जाती हैं।
            </p>

            <h3 className="text-base font-bold text-slate-900">2. अभ्यर्थियों के लिए अनिवार्य चेतावनी</h3>
            <p>
              हम प्रत्येक सूचना को त्रुटिहीन रखने का हरसंभव प्रयास करते हैं, किन्तु मानवीय भूल अथवा तकनीकी कारणों से किसी भी प्रकार की विसंगति हो सकती है। अतः सभी अभ्यर्थियों, पाठकों एवं अभिभावकों को दृढ़तापूर्वक सलाह दी जाती है कि किसी भी पद हेतु ऑनलाइन आवेदन करने, फॉर्म शुल्क का भुगतान करने अथवा परीक्षा केंद्र पर जाने से पूर्व संबंधित संस्था/विभाग की <strong>मूल आधिकारिक अधिसूचना (Official Notification)</strong> एवं आधिकारिक वेबसाइट का अवश्य अध्ययन एवं सत्यापन करें।
            </p>

            <h3 className="text-base font-bold text-slate-900">3. वित्तीय उत्तरदायित्व की सीमा (No Financial Liability)</h3>
            <p>
              Sarkari Rozgar Update कभी भी किसी अभ्यर्थी से नौकरी, आवेदन, एडमिट कार्ड या परिणाम के नाम पर किसी भी प्रकार के व्यक्तिगत बैंक खाते, UPI अथवा नकद भुगतान की मांग नहीं करता है। यदि किसी पाठक को किसी बाहरी लिंक अथवा भ्रामक माध्यम से कोई आर्थिक, विधिक या अन्य क्षति होती है, तो उसके लिए यह पोर्टल अथवा इसके संचालक उत्तरदायी नहीं होंगे।
            </p>

            <h3 className="text-base font-bold text-slate-900">4. बाह्य कड़ियां (External Links)</h3>
            <p>
              हमारी वेबसाइट पर अन्य सरकारी एवं गैर-सरकारी पोर्टलों के हाइपरलिंक्स (External Links) केवल उपयोगकर्ताओं की सुविधा हेतु प्रदान किए जाते हैं। उन बाह्य वेबसाइटों की सामग्री, गोपनीयता नीतियों अथवा सेवा की उपलब्धता पर हमारा कोई नियंत्रण नहीं है।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

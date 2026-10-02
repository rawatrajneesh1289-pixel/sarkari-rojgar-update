import React from 'react';
import { ShieldCheck, Target, Users, BookOpen, Sparkles, Building2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="About Us (हमारे बारे में) | Sarkari Rozgar Update"
        description="Sarkari Rozgar Update का परिचय, हमारा उद्देश्य, दृष्टि एवं अभ्यर्थियों के लिए निष्पक्ष एवं विश्वसनीय सूचना प्रदान करने का संकल्प।"
        canonicalUrl="https://sarkari-rozgar-update.netlify.app/about"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Breadcrumbs items={[{ label: 'About Us (हमारे बारे में)' }]} />

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs my-4 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>सत्यापित रोजगार एवं परीक्षा सूचना</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              About Sarkari Rozgar Update (SRU)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              sarkari-rozgar-update.netlify.app — स्वतंत्र, तीव्र एवं सरल रोजगार मार्गदर्शक
            </p>
          </div>

          <DisclaimerAlert isDemo={false} />

          <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 space-y-4 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>हमारा उद्देश्य (Our Mission)</span>
            </h2>
            <p>
              <strong>Sarkari Rozgar Update (SRU)</strong> की स्थापना भारतीय युवाओं और प्रतियोगी परीक्षा अभ्यर्थियों को समय पर, सही एवं बिना किसी भ्रामक जानकारी के सरकारी नौकरियों और परीक्षाओं की सूचना उपलब्ध कराने के उद्देश्य से की गई है।
            </p>
            <p>
              अक्सर जटिल सरकारी विज्ञापनों में छात्र योग्यता, आयु सीमा, आवेदन शुल्क अथवा चयन प्रक्रिया को लेकर भ्रमित हो जाते हैं। हमारा दल विभिन्न आधिकारिक गजट, आयोगों (जैसे SSC, UPSC, IBPS, State PSCs, व्यापम/ESB आदि) की मूल अधिसूचनाओं का गहन अध्ययन करके उन जानकारियों को सारगर्भित, तालिकाबद्ध और सरल हिंदी भाषा में प्रस्तुत करता है।
            </p>

            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>हम क्या प्रदान करते हैं?</span>
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li><strong>नवीनतम सरकारी भर्तियां:</strong> 10वीं, 12वीं, आईटीआई, डिप्लोमा एवं स्नातक स्तर की केंद्र व राज्य सरकारी नौकरियां।</li>
              <li><strong>प्रवेश पत्र (Admit Cards):</strong> परीक्षा तिथि, शहर सूचना (City Slip) एवं सीधा डाउनलोड लिंक।</li>
              <li><strong>परीक्षा परिणाम (Results) व कट-ऑफ:</strong> लिखित परीक्षा परिणाम, कट-ऑफ विश्लेषण और मेरिट लिस्ट।</li>
              <li><strong>उत्तर कुंजी (Answer Keys):</strong> प्रोविजनल व फाइनल आंसर की तथा ऑनलाइन आपत्ति दर्ज करने की विस्तृत प्रक्रिया।</li>
              <li><strong>सरकारी योजनाएं (Sarkari Yojana):</strong> छात्रवृत्ति, स्वरोजगार एवं जन-कल्याणकारी योजनाओं के पात्रता नियम।</li>
              <li><strong>पाठ्यक्रम व पुराने पेपर्स:</strong> परीक्षा का विस्तृत टॉपिक-वाइज सिलेबस और हल प्रश्न पत्र।</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Building2 className="w-5 h-5 text-amber-600" />
              <span>स्वतंत्रता एवं पारदर्शिता की नीति</span>
            </h2>
            <p>
              हम स्पष्ट रूप से घोषणा करते हैं कि <em>Sarkari Rozgar Update</em> किसी भी सरकारी मंत्रालय, विभाग या आयोग की आधिकारिक वेबसाइट नहीं है और न ही हम सरकारी नौकरी दिलाने का कोई दावा या सेवा प्रदान करते हैं। यह मंच पूर्णतः गैर-सरकारी और सूचनात्मक है। अभ्यर्थियों की सुविधा के लिए हम प्रत्येक लेख में संबंधित विभाग की मूल अधिसूचना और आधिकारिक वेबसाइट का सीधा लिंक संलग्न करते हैं।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

import {useState} from 'react';
import { useLanguage } from '../context/LanguageContext';

const SubscribInput = () => {
    const { currentLanguage } = useLanguage();
    const [Subscribtion, setSubscribtion] = useState("");

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        <input
          className="max-w-[500px] sm:w-[300px] px-4 bg-slate-100 rounded-md shadow-md h-10 border focus:border-primary outline-none"
          placeholder={currentLanguage.SignUpEmailSectionInputPlaceHolder}
          value={Subscribtion}
          onChange={(e) => setSubscribtion(e.target.value)}
        />

        <button
          className="bg-primary py-2 px-7 h-10 rounded-JoinUsBottunradius border-2 border-primary
                     text-white hover:bg-white hover:text-primary transition-all"
        >
         {currentLanguage.SignUpEmailSectionSubmitBotton}
        </button>
      </div>
  )
}

export default SubscribInput
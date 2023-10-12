import { useLanguage } from "../context/LanguageContext"
const JoinButton = ({type,BtnText,BtnStyle,onclick}) => {
  const {currentLanguage} = useLanguage();
  return (
    <button className={`bg-primary py-2 px-7 rounded-JoinUsBottunradius border-2 border-primary transition-all JoinUsBtnShadow ${BtnStyle} hover:bg-[#003c2fce]`}
    type={type}
    onClick={onclick}>
        <a>{currentLanguage[BtnText] || "انظم لنا"}</a>
    </button>
  )
}

export default JoinButton
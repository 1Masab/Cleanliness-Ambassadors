import {
  Home,
  Aboutus,
  Campaigns,
  Map,
  ContactUS,
  trashIcon,
  volunteer,
  building,
  years,
  facebook,
  instagram,
  tiktok,
  donationIcon,
  TestimonialsGirl,
  Murtadh,
  TestimonialsMan,
  TestimonialsGirl2,
  Saif,
  Mohammed,
  Hussain,
  instagramRGB,
  slide2,
  slide3,
  slide4,
  slide1,
} from "../../assets";

const NavLinks = [
  { linkName: "Home", icon: Home, linkPath: "/" },
  { linkName: "About", icon: Aboutus, linkPath: "/About" },
  { linkName: "Campaigns", icon: Campaigns, linkPath: "/Campaigns" },
  { linkName: "Map", icon: Map, linkPath: "/Map" },
  { linkName: "Contact", icon: ContactUS, linkPath: "/Contact" },
  { linkName: "donate", icon: donationIcon, linkPath: "/Donate" },
];
const StatisticsCardContent = [
  {
    StatisName: "NumberOfTrashBags",
    icon: trashIcon,
    NumOf: "totalSumOfTrashBags",
  },
  {
    StatisName: "NumberOfVolunteers",
    icon: volunteer,
    NumOf: "totalSumOfVolunteers",
  },
  {
    StatisName: "Citys",
    icon: building,
    NumOf: "totalProvinceCount",
  },
  {
    StatisName: "years",
    icon: years,
    NumOf: "totalYears",
  },
];
const SocialMediaIconsContent = [
  {
    icon: instagram,
    url: "https://www.instagram.com/clean.iraq/",
    iconName: "instagram logo",
  },
  {
    icon: facebook,
    url: "https://www.facebook.com/clean.iraq/",
    iconName: "facebook logo",
  },
  {
    icon: tiktok,
    url: "https://www.tiktok.com/@the.murt/video/7081254157889326378",
    iconName: "tiktok logo",
  },
  { icon: donationIcon, url: "#", iconName: "donation icon" },
];
const TestimonialData = [
  {
    id: 1,
    image: TestimonialsGirl,
    speech: "FirstTestimonialCardText",
    name: "FirstTestimonialCardName",
  },
  {
    id: 2,
    image: TestimonialsMan,
    speech: "SecondTestimonialCardText",
    name: "SecondTestimonialCardName",
  },
  {
    id: 3,
    image: TestimonialsGirl2,
    speech: "TherredTestimonialCardText",
    name: "TherredTestimonialCardName",
  },
];
const StaffInformation = [
  { name: "MurtadahName", description: "MurtadahDescription" },
  { name: "SaifName", description: "SaifDescription" },
  { name: "HussainName", description: "HussainDescription" },
  { name: "MohammedName", description: "MohammedDescription" },
];
const StaffSocialMediaLinksAndJobs = [
  {
    image: Murtadh,
    memberName: "MurtadahName",
    job: "MurtJob",
    icon: instagramRGB,
    url: "https://www.instagram.com/the.murt/",
    iconName: "instagram logo",
  },
  {
    image: Saif,
    memberName: "SaifName",
    job: "SaifJob",
    icon: instagramRGB,
    url: "https://www.instagram.com/the.murt/",
    iconName: "instagram logo",
  },
  {
    image: Hussain,
    memberName: "HussainName",
    job: "HussainJob",
    icon: instagramRGB,
    url: "https://www.instagram.com/the.murt/",
    iconName: "instagram logo",
  },
  {
    image: Mohammed,
    memberName: "MohammedName",
    job: "MohammedJob",
    icon: instagramRGB,
    url: "https://www.instagram.com/the.murt/",
    iconName: "instagram logo",
  },
];

const SliderImagesAboutus = [
  { image: slide1 },
  { image: slide2 },
  { image: slide3 },
  { image: slide4 },
];
const SliderTextAboutus = [
  {
    HeadText: "FoundingAndHistoryHead",
    Paragraph: "FoundingAndHistoryParagraph",
  },
  {
    HeadText: "OurMissionHead",
    Paragraph: "OurMissionParagraph",
  },
  {
    HeadText: "CoreValuesHead",
    Paragraph: "CoreValuesParagraph",
  },
  {
    HeadText: "OurFutureVisionHead",
    Paragraph: "OurFutureVisionParagraph",
  },
];
const FAQsData = [
  { question: "faq_1_question", answer: "faq_1_answer" },
  { question: "faq_2_question", answer: "faq_2_answer" },
  { question: "faq_3_question", answer: "faq_3_answer" },
  { question: "faq_4_question", answer: "faq_4_answer" },
  { question: "faq_5_question", answer: "faq_5_answer" },
];

export {
  NavLinks,
  StatisticsCardContent,
  SocialMediaIconsContent,
  TestimonialData,
  StaffInformation,
  SliderImagesAboutus,
  SliderTextAboutus,
  FAQsData,
  StaffSocialMediaLinksAndJobs
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        StatisticsCardRadius: "0px 20px 0px 20px",
        JoinUsBottunradius: "2px 20px 2px 20px",
        S4: "1rem 6rem 1rem 6rem"
      },
      colors: {
        primary: "#548B68",
        SectionHeadTextColor: "rgb(55, 65, 81)",
        SectionSubTextColor: "rgb(75, 85, 99)",
      },
      backgroundColor: {
        primary: "#548B68",
      },
      backgroundImage: {
        CampaignHeroBackImg: "url('/src/assets/CampaignHeroBG.svg')",
      },
    },
  },
  plugins: [],
};

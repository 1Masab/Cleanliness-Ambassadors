import { useApiData } from "../../context/ApiContext";
const FetchApi = ({ NumOf }) => {
  const { apiData } = useApiData();

  // to calculate the total count of "Trash Bags" 👇👇👇
  const totalSumOfTrashBags = apiData.reduce((accumulator, item) => {
    return accumulator + Number(item["Number of Trash Bags"]);
  }, 0);
  // to calculate the total count of "Volunteers" 👇👇👇
  const totalSumOfVolunteers = apiData.reduce((accumulator, item) => {
    return accumulator + Number(item["Number of Volunteers"]);
  }, 0);
  // to calculate the total count of "Citys" 👇👇👇
  const totalProvinceCount = apiData.reduce((count, item) => {
    return item.Province ? count + 1 : count;
  }, 0);
  // value of how much year Card
  const totalYears = 1;
  // an object to map variable name to their values
  const variableMap = {
    totalSumOfTrashBags,
    totalSumOfVolunteers,
    totalProvinceCount,
    totalYears,
  };

  // Using bracket notation to access the value based on the NumOf
  const valueToDisplay = variableMap[NumOf] || "NF";
  return (
    <div className="flex items-center justify-center py-1 px-3 mt-1">
      <h1 className="text-2xl text-primary font-[900] tracking-wide">
        {valueToDisplay}+
      </h1>
    </div>
  );
};

export default FetchApi;

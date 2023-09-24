import DashCards from "./DashCards";

const Whitecards = () => {
  return (
    <div className="grid md:flex md:justify-between md:space-x-[3%] sm:grid-flow-col sm:grid-rows-2 md:grid-rows-1 gap-4 md:gap-0 m-5 md:m-0">
      <DashCards
        money="$2,129,430"
        heading="Total Revenue"
        bg1="bg-[#7FCD93]"
        imgs="/revenue.svg"
        percent="+2.5%"
        dropdown="/dropdown.svg"
      />
      <DashCards
        money="1,520"
        heading="Total Transaction"
        bg1="bg-[#DEBF85]"
        imgs="/transaction.svg"
        percent="+1.7%"
      />
      <DashCards
        money="9,721"
        heading="Total Likes"
        imgs="/likes.svg"
        bg1="bg-[#ECA4A4]"
        percent="+1.4%"
      />
      <DashCards
        money="9,721"
        heading="Total Users"
        bg1="bg-[#A9B0E5]"
        imgs="/users.svg"
        percent="+4.2%"
      />
    </div>
  );
};

export default Whitecards;

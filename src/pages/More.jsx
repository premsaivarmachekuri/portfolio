import Counter from "../components/Counter";
import ScrollingList from "./ScrollingList";

const More = () => {
  return (
    <div className="bg-[#090E34] w-full text-center space-x-2 space-y-4" id="moreSection">
        <h1 className="pt-5 text-5xl text-blue-500 ">More About Me</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col  justify-center align-center space-y-7" data-aos="fade-down-left" >
      <Counter number={5900} title="Followers on Linkedin" />
      <Counter number={27} title="Streak on Github" />
      <Counter number={15} title="Openource Contributions" />
      </div>
      <ScrollingList />
      </div>
    </div>
  );
}

export default More;

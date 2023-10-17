import Counter from "../components/Counter";

const More = () => {
  return (
    <div className="bg-[#090E34] w-sm md:max-w-md w-full text-center space-x-2 space-y-4">
        <h1 className="pt-5 text-2xl text-blue-500">More About Me</h1>
        
      
      <Counter number={5000} title="Followers on Linkedin" />
      <Counter number={100} title="Posts" />
      <Counter number={15} title="Openource Contributions" />
    </div>
  );
}

export default More;

import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <ClipLoader
        color="red"
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

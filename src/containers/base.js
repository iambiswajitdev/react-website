import Header from "../components/header";

const Base = ({ children }) => {
  return (
    <div className="maindiv">
      <Header />
      {children}
    </div>
  );
};

export default Base;

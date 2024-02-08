export const Title = ({ children }: { children: string }) => {
  return (
    <div className="flex items-start">
      <div className="flex flex-col">
        <span className="font-oswald text-2xl text-secondary font-bold lg:text-4xl">
          {children}
        </span>
        <div
          style={{
            height: "3px",
            paddingTop: "4px",
            backgroundColor: "#00AE46",
          }}
        />
      </div>
    </div>
  );
};
export default Title;

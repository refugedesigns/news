const newsSectionHeader = (props) => {
    return (
      <div className="flex justify-auto mx-4 md:flex md:justify-center">
        <div className="font-extrabold w-max text-4xl border-b-8 border-red-600">
          {props.children}
        </div>
      </div>
    );
}

export default newsSectionHeader

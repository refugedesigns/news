import MenuIcon from '../ui/menuIcon'

const logo = () => {
    return (
      <div className="flex justify-between items-center p-4 pt-8 border-b border-gray-900 lg:flex-col">
        <MenuIcon />
        <h1 className="font-bold text-4xl text-[#FF6A3D] hover:cursor-pointer">
          Cryptooz
        </h1>
      </div>
    );
}

export default logo

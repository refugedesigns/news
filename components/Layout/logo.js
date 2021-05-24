import MenuIcon from '../ui/menuIcon'

const logo = () => {
    return (
        <div className="flex justify-between items-center p-4 pt-8 border-b border-green-800 lg:flex-col">
            <MenuIcon />
            <h1 className="font-bold text-4xl text-green-600">Cryptooz</h1>
        </div>
    )
}

export default logo

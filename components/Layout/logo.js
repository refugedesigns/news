import MenuIcon from '../ui/menuIcon'

const logo = () => {
    return (
        <div className="flex justify-between items-center p-4 md:flex-col">
            <MenuIcon />
            <h1 className="font-bold text-4xl text-yellow-600">Cryptooz</h1>
        </div>
    )
}

export default logo

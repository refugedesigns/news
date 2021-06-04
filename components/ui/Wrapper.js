
import Card from '../ui/Card'


const Wrapper = (props) => {
    
    return (
      <section className="bg-[#9DAAF2] py-20 flex justify-center mx-auto">
        <Card>
          <h1 className="tracking-widest text-2xl font-bold text-[#1A2238] sm:text-4xl lg:hidden">
            {props.smallTitle}
          </h1>
          <div className="lg:flex lg:justify-center lg:mx-auto">
            <h1 className="hidden lg:block xl:w-min h-1/1 w-1/2 pattern font-black 2xl:text-8xl lg:text-6xl lg:text-center tracking-widest px-4 py-16 text-[#1A2238]">
              {props.largeTitle}
            </h1>
            <div className="xl:w-4/6">{props.children}</div>
          </div>
        </Card>
      </section>
    );
}

export default Wrapper

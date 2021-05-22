import Image from 'next/image'

const imageLargeNewsItem = () => {
    return (
          <div className="m-4 w-48">
            <div className="">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80"
                height={150}
                width={200}
              />
            </div>
            <h1>The (actual) list of weirdest things in San Francisco</h1>
        </div>
    )
}

export default imageLargeNewsItem

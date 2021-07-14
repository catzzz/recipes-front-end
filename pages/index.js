import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    // content wrapper
    <div>
       {/* start nav */}
      <div className="text-gray-600">
       
        <nav>
          <div>
            <h1 className="font-bold uppercase p-4 border-b border-gray-200">
              <Link href="/">
                  <a>Bee&apos;s ecipes</a>
              </Link> 
            </h1>
          </div>
          <ul>
            <li>
              <Link href="#">
                <a><span>Home</span></a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a><span>About</span></a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a><span>Contact</span></a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* end nav */}
      <main className="px-16 py-6">
        <div>
          <Link href="#"><a>Log in</a></Link>
          <Link href="#"><a>Sign up</a></Link>
        </div>


      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text=2xl font-semibold">For Bee Chu</h3>
      </header>

      <div >
        {/* section 1 */}
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
        <div className="mt-8">
          {/* cards go here */}
          <div>
            <img src="/images/avacado-burger.jpeg" alt="avacado burger" />
            <div>
              <span>5 Bean Chilli Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>

         {/* section 2 */}
        <h4 className="font-bold mt-12 border-b border-gray-200">Most Popular</h4>
        <div >
          {/* cards go here */}
        </div>

        <div>
          <div>Load more</div>
        </div>

      </div>
      </main>

   
    </div>
  )
}

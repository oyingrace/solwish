import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SOLWISH - Bring Your Dreams to Life</title>
      </Head>
      
      <main className="bg-green-50 p-6">
        {/* Section 1 - Customizable Wishlist */}
        <section className="text-center md:text-left py-8">
          <h1 className="text-2xl md:text-4xl font-bold text-orange-500">
            01 <span className="text-black">Customizable Wishlist</span>
          </h1>
          <p className="mt-2 text-gray-700">
            Here at <strong>SOLWISH</strong>, you get the chance of bringing your deepest wishes to life...
          </p>
          <div className="mt-4 mx-auto md:mx-0 w-32 h-32 relative">
            <Image
              src="/path-to-image1"
              alt="wishlist"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
        
        {/* Section 2 - Secure Transactions */}
        <section className="text-center md:text-left py-8">
          <h2 className="text-2xl md:text-4xl font-bold text-green-600">
            02 <span className="text-black">Secure Transactions</span>
          </h2>
          <p className="mt-2 text-gray-700">
            Enjoy secure and efficient transactions powered by Solana...
          </p>
          <div className="mt-4 mx-auto md:mx-0 w-32 h-32 relative">
            <Image
              src="/path-to-image2"
              alt="secure transactions"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>

        {/* Section 3 - Community-Driven Support */}
        <section className="text-center md:text-left py-8">
          <h3 className="text-2xl md:text-4xl font-bold text-blue-500">
            03 <span className="text-black">Community-Driven Support</span>
          </h3>
          <p className="mt-2 text-gray-700">
            Connect with a supportive community of like-minded individuals who share your passion...
          </p>
          <div className="mt-4 mx-auto md:mx-0 w-32 h-32 relative">
            <Image
              src="/path-to-image3"
              alt="community-driven"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>

        {/* Section 4 - Secure Wish Sharing */}
        <section className="text-center md:text-left py-8">
          <h4 className="text-2xl md:text-4xl font-bold text-red-500">
            04 <span className="text-black">Secure Wish Sharing</span>
          </h4>
          <p className="mt-2 text-gray-700">
            Easily share your wishlist with friends, family, and social media followers...
          </p>
          <div className="mt-4 mx-auto md:mx-0 w-32 h-32 relative">
            <Image
              src="/path-to-image4"
              alt="wish sharing"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>

        {/* Call to Action */}
        <div className="py-12 text-center">
          <button className="bg-orange-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-orange-600">
            Start Now
          </button>
        </div>

        {/* Workflow Section */}
        <section className="bg-green-100 p-8 text-center md:flex md:justify-around">
          <div>
            <div className="mx-auto mb-4 w-16 h-16 relative">
              <Image
                src="/path-to-icon1"
                alt="create wishlist"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-gray-700">Create Your Wishlist</p>
          </div>
          <div>
            <div className="mx-auto mb-4 w-16 h-16 relative">
            <Image
                src="/path-to-icon2"
                alt="share with friends"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-gray-700">Share with Friends</p>
          </div>
          <div>
            <div className="mx-auto mb-4 w-16 h-16 relative">
              <Image
                src="/path-to-icon3"
                alt="get funded"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-gray-700">Get Funded</p>
          </div>
          <div>
            <div className="mx-auto mb-4 w-16 h-16 relative">
              <Image
                src="/path-to-icon4"
                alt="track progress"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-gray-700">Track Progress</p>
          </div>
        </section>
      </main>
    </div>
  )
}
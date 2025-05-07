import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto px-4 py-12 sm:px-6 md:max-w-2xl lg:max-w-4xl">
        <div className="mb-8">
          <Image
            src="/images/askr-logo.png"
            alt="ASKR - good questions better answers"
            width={500}
            height={100}
            className="w-auto h-auto"
            priority
          />
        </div>

        <div className="mb-12">
          <p className="text-lg">
            ASKR offers AI-driven voice interviews of employees in their offboarding-process.</p>
            <p className="text-lg">Its dynamic questioning system leads to better knowledge retention.</p>
            <p className="text-lg">ASKR simply has more time than HR will ever have.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative w-full">
            <Image
              src="/images/askr.jpg"
              alt="ASKR Application Interface"
              width={1200}
              height={800}
              className="w-full h-auto rounded-md shadow-md"
              priority
            />
          </div>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-2">
            <p>Email: hello@askr.info</p>
            <p>Phone: 004930583859439</p>
            <p>Address: Agentic Media, Oranienstr. 19a, 10999 Berlin, Germany</p>
          </div>
        </div>
      </main>
    </div>
  )
}

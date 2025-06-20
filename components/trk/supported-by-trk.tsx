import Image from "next/image"

export function SupportedBy() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Didukung oleh</h2>
          <p className="text-gray-600">Kemitraan tepercaya dengan para pemimpin industri</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center opacity-80">
            <div className="flex justify-center">
              <Image
                src="/microsoft.png"
                width="120"
                height="60"
                alt="Microsoft"
                className="h-12 w-auto object-contain hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/mikrotik.png"
                width="120"
                height="60"
                alt="Mikrotik"
                className="h-12 w-auto object-contain hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/cisco.png"
                width="120"
                height="60"
                alt="Cisco"
                className="h-12 w-auto object-contain hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/oracle.png"
                width="120"
                height="60"
                alt="Oracle"
                className="h-12 w-auto object-contain hover:opacity-100 transition-opacity"
              />
            </div>
            {/* {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  width="120"
                  height="60"
                  alt={`Partner ${i}`}
                  className="h-12 w-auto object-contain hover:opacity-100 transition-opacity"
                />
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  )
}

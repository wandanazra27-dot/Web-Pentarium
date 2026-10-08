import React from 'react';

export default function Products() {
  const products = [
    {
      title: "Water Level Monitoring (PentaFlood)",
      desc: "Is a tool to monitor and measure high water level, could warned people if flood is coming.",
      specs: [
        "Altitude Sensor: 30 cm – 1000 cm",
        "Temperature Sensor: 10 – 65 *C",
        "Humidity Sensor: 0 – 100 %",
        "Barometric Pressure Sensor: 300 – 1100 hPa",
        "Battery Sensor: Max 36V 3A",
        "Connectivity: GSM/LoRa/Wifi",
        "Battery: 12V 7.2 Ah",
        "Solar Panel: 20 Wp"
      ],
      clients: "Mitratel, Telkom Indonesia, Lippo Village, Antares"
    },
    {
      title: "Smart Water Monitoring Solution (PentaQua)",
      desc: "PentaQua is a tool to monitoring the quality of water. The communication are sent by LoRa or Wifi.",
      specs: [
        "Water level sensor: 20 - 500 cm",
        "Temperature: 0 - 55 *C",
        "Turbidity: 0 - 3000 NTU",
        "PH: 0 - 14 pH",
        "Power: Solar Panel 50 Wp",
        "Battery: Li-Po 12 V",
        "Dimension Pole: 2 meter galvanis",
        "Box Controller: 270 x 170 x 100 mm"
      ],
      clients: "Mitratel, Telkom Indonesia, Tirtawening, Antares"
    },
    {
      title: "Water Pressure Monitoring (PentaMon)",
      desc: "PentaMon water is a tool to monitoring water pressure.",
      specs: [
        "Pressure: 0 - 10 Bar",
        "Battery: 4000 mAh"
      ]
    },
    {
      title: "Automatic Weather Station (AWS)",
      desc: "AWS helps you in monitoring the condition of the environment through your smartphone. AWS is able to measure temperature, humidity, precipitation, wind speed, light intensity and air pressure. So it can predict pest and diseases and optimize the growth and yield of your plants.",
      advantages: [
        "Environmentally friendly",
        "Can predict the weather the next few days",
        "Preventive attacks by pests and diseases",
        "Optimization of harvest and yield estimation"
      ],
      specs: [
        "Temperature: 0-70 deg C (0.1 degC)",
        "Humidity: 20-99%",
        "Solar Radiation: 0-1200 Lux",
        "Precipitation: 0-1 mm/s",
        "Wind Speed: 0-40 km/h",
        "Wind Direction: 0-360 deg",
        "Barometric Pressure: 500-1200 mbar"
      ]
    },
    {
      title: "Queue System",
      desc: "This Queue system are applicable to any service that need to queuing some people. example, at hospital, bank, and other institution. Our queue system could be customized and could be connected to other system, like Mobile JKN for hospital, or other system that need queue data to completed their information.",
      clients: "RSUD Kota Bandung, RSSM, KelingKumang, Kopontren Daarut Tauhiid, dll"
    },
    {
      title: "SmartPole",
      desc: "Smartpole is a pole that have some feature like: CCTV + Speaker, Panic Button, Environment Sensor, Wifi Access Point. It could be powered by Solar Panel, Battery, or from PLN source.",
      clients: "Mitratel, Telkom Indonesia, Antares"
    },
    {
      title: "Smart Building",
      desc: "Smarthome, Smart Office. We provide devices for smart home, office, class, etc. Device: Lighting, IP Camera, Sensor Temperature, AC Control, Sensor People, Sensor LPG, Water Leak, etc.",
      clients: "Edu Media Digital"
    },
    {
      title: "Smart Gate",
      desc: "We provide smart gate for office, school, parking, etc. Device: Swing Gate, Magnetic Door, Turnstile, Ticketing, Parking Gate.",
      clients: "Edu Media Digital, The Jungle Bogor"
    },
    {
      title: "Pakebun (Urban Farming)",
      desc: "Pakebun is a urban farming solution, we provide garden tools, irrigation part, agritech solution (automatic watering, automatic fertilizing, smartgreenhouse, soil sensor, environment sensor).",
      link: "http://pakebun.com"
    }
  ];

  return (
    <section id="produk" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-extrabold tracking-widest text-sm uppercase mb-3">Our Product</p>
          <h2 className="text-3xl lg:text-4xl font-black text-secondary mb-6">Produk Pentarium</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-secondary mb-4 border-b border-slate-100 pb-4">{product.title}</h3>
              <p className="text-slate-600 mb-6">{product.desc}</p>
              
              {product.advantages && (
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-secondary uppercase mb-2">Advantages:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                    {product.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                  </ul>
                </div>
              )}

              {product.specs && (
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-secondary uppercase mb-2">Specification:</h4>
                  <ul className="space-y-1 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {product.specs.map((spec, i) => <li key={i}>{spec}</li>)}
                  </ul>
                </div>
              )}

              <div className="mt-auto pt-6">
                {product.clients && (
                  <p className="text-xs font-semibold text-slate-400">Client & Partner: <span className="text-primary">{product.clients}</span></p>
                )}
                {product.link && (
                  <a href={product.link} target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">{product.link}</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

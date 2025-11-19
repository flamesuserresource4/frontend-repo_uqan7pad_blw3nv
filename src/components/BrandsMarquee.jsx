export default function BrandsMarquee(){
  const brands = [
    'DJI','iFlight','T-Motor','Foxeer','RunCam','CADDX','BetaFPV','HQProp','Gemfan','RushFPV','Ethix','GoPro'
  ]

  return (
    <section aria-label="Brands" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ul className="flex items-center gap-12 animate-[marquee_25s_linear_infinite] py-6 text-white/70 font-medium whitespace-nowrap">
              {brands.concat(brands).map((b, i) => (
                <li key={i} className="text-sm tracking-wide">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}

const GrowthIcon = () => (
  <div className="h-14 w-14 rounded-full bg-gradient-to-b from-[#fbe9b5] to-[#f6cf65] flex items-center justify-center shadow-[0_6px_12px_rgba(244,192,63,0.35)]">
    <div className="relative h-9 w-9 rounded-full bg-gradient-to-b from-[#ffd978] to-[#f7b94a] flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-white/60"></div>
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16l5-5 3 3 7-7" />
        <path d="M16 7h3v3" />
        <path d="M4 20h6" />
      </svg>
    </div>
  </div>
);

const FlexibleIcon = () => (
  <div className="h-14 w-14 rounded-full bg-gradient-to-b from-[#b2f0e8] to-[#65d1c8] flex items-center justify-center shadow-[0_6px_12px_rgba(92,189,177,0.32)]">
    <div className="h-9 w-9 rounded-full border-2 border-white/70 flex items-center justify-center bg-white/10">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9.5a2.5 2.5 0 0 1 2.5-2.5H18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 14.5Z" />
        <path d="M8 7v10" />
        <path d="M16.5 10.5h-1.5" />
        <path d="M16.5 13.5h-1.5" />
        <path d="M5.5 7a2 2 0 0 0 0-4" />
      </svg>
    </div>
  </div>
);

const PinIcon = () => (
  <div className="h-14 w-14 rounded-full bg-gradient-to-b from-[#d6eaff] to-[#7bb3ff] flex items-center justify-center shadow-[0_6px_12px_rgba(64,134,231,0.3)]">
    <div className="relative h-9 w-9 rounded-full bg-gradient-to-b from-white to-[#e9f2ff] flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-[#c8dcff]"></div>
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#3b7cff]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s6.5-6 6.5-11A6.5 6.5 0 1 0 5.5 10c0 5 6.5 11 6.5 11z" />
        <circle cx="12" cy="10" r="2.5" />
        <path d="M12 4.5v-2" />
        <path d="M7 10H5" />
        <path d="M19 10h-2" />
      </svg>
    </div>
  </div>
);

const perks = [
  {
    icon: <GrowthIcon />,
    title: '生意增长',
    subtitle: '支持餐补消费'
  },
  {
    icon: <FlexibleIcon />,
    title: '灵活营销',
    subtitle: '支持员工专项折扣'
  },
  {
    icon: <PinIcon />,
    title: '精准锁客',
    subtitle: '精准圈定附近企业'
  }
];

function App() {
  return (
    <main className="w-full px-4 py-12">
      <div className="mx-auto max-w-md rounded-2xl bg-white shadow-card border border-cardBorder/70 overflow-hidden">
        <div className="bg-[#f3f7ff] px-6 pt-6 pb-4 text-center relative">
          <div className="absolute inset-x-10 bottom-0 h-12 rounded-full bg-white blur-2xl opacity-60"></div>
          <div className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#64b7ff] to-[#2e78ff] px-6 py-2 text-white text-base font-semibold shadow-[0_10px_20px_rgba(46,120,255,0.35)]">
            企业专项优惠
          </div>
        </div>

        <div className="px-6 pb-7 pt-5">
          <div className="grid grid-cols-3 gap-4 text-center">
            {perks.map((perk) => (
              <div key={perk.title} className="flex flex-col items-center gap-3">
                {perk.icon}
                <div className="flex flex-col gap-1">
                  <span className="text-[15px] font-semibold text-[#2c3c5b]">{perk.title}</span>
                  <span className="text-xs text-[#6b7a99]">{perk.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full rounded-full bg-gradient-to-r from-[#59b4ff] to-[#2c70ff] py-3.5 text-white text-lg font-semibold shadow-[0_12px_18px_rgba(44,112,255,0.35)] transition-transform hover:-translate-y-0.5">
            联系销售
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

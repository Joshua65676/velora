import React from "react";

const Vault: React.FC = () => {
  return (
    <main className=" bg-VaultBg">
      <main className="bg-[url(./assets/vaultBg.svg)] bg-center bg-cover bg-origin-padding container mx-auto max-w-250 h-screen rounded-[10px]">
        <section className="flex flex-col items-center-safe justify-center-safe gap-10 h-screen">
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-saonara font-[400px] text-[36px] leading-[100%] tracking-[0px] text-VaultText">Vault</h2>
            <p className="font-saonara font-[400px] text-[64px] leading-[100%] tracking-[0px] text-Black">
              Glow naturally, <span className="text-PBlack">shine with grace</span>
            </p>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Vault;

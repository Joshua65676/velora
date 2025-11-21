import React from "react";
import VaultGrid from "./VaultGrid";

const Vault: React.FC = () => {
  return (
    <main className=" bg-VaultBg h-[832px]">
      <main className="bg-[url(./assets/vaultBg.svg)] bg-center bg-cover bg-origin-padding container mx-auto h-[830px] max-w-[1088px]">
        <section className="flex flex-col items-center-safe justify-center-safe gap-5 py-8">
          <div className="flex flex-col items-center">
            <h2 className="font-saonara font-[400px] text-[36px] leading-[100%] tracking-[0px] text-VaultText">Vault</h2>
            <p className="font-saonara font-[400px] text-[64px] leading-[100%] tracking-[0px] text-Black">
              Glow naturally, <span className="text-PBlack">shine with grace</span>
            </p>
          </div>

          <>
           <VaultGrid />
          </>
        </section>
      </main>
    </main>
  );
};

export default Vault;

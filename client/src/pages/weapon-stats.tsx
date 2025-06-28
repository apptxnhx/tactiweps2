import { useState, useEffect, useMemo } from "react";
import { tacticoolWeapons as weaponsData, weaponCategories } from "@/data/tacticool-weapons";
import { Weapon } from "@shared/schema";

export default function WeaponStats() {
  const [currentCategory, setCurrentCategory] = useState("Assault Rifle");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [language, setLanguage] = useState<"pt" | "en">("en");

  const filteredWeapons = useMemo(() => {
    const categoryWeapons = weaponsData[currentCategory] || [];
    if (!searchTerm.trim()) return categoryWeapons;
    
    return categoryWeapons.filter(weapon =>
      weapon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [currentCategory, searchTerm]);

  const currentWeapon = filteredWeapons[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
  }, [currentCategory, searchTerm]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          navigateWeapon(-1);
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateWeapon(1);
          break;
        case "Escape":
          setSearchTerm("");
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, filteredWeapons.length]);

  const navigateWeapon = (direction: number) => {
    if (filteredWeapons.length === 0) return;
    
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = filteredWeapons.length - 1;
    if (newIndex >= filteredWeapons.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
  };

  const selectCategory = (category: string) => {
    setCurrentCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className="fas fa-star text-yellow-400 text-sm mr-1" />
    ));
  };

  const renderWeaponIndicators = () => {
    return Array.from({ length: Math.min(filteredWeapons.length, 10) }, (_, i) => (
      <div
        key={i}
        className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
          i === currentIndex ? "bg-tacticool-accent" : "bg-white/30"
        }`}
      />
    ));
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "comum":
        return "text-gray-400";
      case "incomum":
        return "text-blue-400";
      case "raro":
        return "text-purple-400";
      case "épico":
        return "text-yellow-400";
      default:
        return "text-white";
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
  };

  const translate = (en: string, pt: string) => {
    return language === "en" ? en : pt;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "linear-gradient(rgba(26, 58, 74, 0.6), rgba(26, 58, 74, 0.7)), url('/BG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-[960px] rounded-2xl bg-tacticool-dark/90 backdrop-blur-md p-4 flex flex-col shadow-2xl border border-tacticool-teal/30" style={{ height: "600px" }}>
        
        {/* Header - Reduzido */}
        <header className="flex justify-between items-center mb-3 px-3">
          <img
            alt="TACTICOOL main logo in white rectangular border"
            className="object-contain"
            height="45"
            src="/Frame_25.svg"
            style={{ width: "240px" }}
            width="240"
          />
          <button 
            onClick={toggleLanguage}
            className="text-white text-xs font-light bg-tacticool-teal/30 px-2 py-1 rounded-full hover:bg-tacticool-teal/50 transition-colors"
          >
            PT/ENG
          </button>
        </header>
        
        {/* Título - Reduzido */}
        <h1 className="text-white text-2xl sm:text-3xl font-light text-center mb-3 px-3 font-roboto">
          {translate("Max Weapon Stats Without Mods or Operators", "Estatísticas Máximas de Armas sem Operadores e sem Mods")}
        </h1>
        
        <main className="flex flex-col lg:flex-row gap-4 px-3 flex-1 overflow-hidden">
          
          {/* Category Sidebar - Otimizado */}
          <section className="rounded-2xl flex flex-col items-center py-4 w-full lg:w-[220px] bg-tacticool-teal/60 backdrop-blur-sm">
            <h2 className="text-white text-sm font-semibold mb-1 tracking-wide">
              <i className="fas fa-list-ul mr-2"></i>{translate("CATEGORIES", "CATEGORIAS")}
            </h2>
            <p className="text-white text-[8px] font-light mb-3 text-center px-3">
              {translate("Please select the weapon category", "Selecione a categoria de arma")}
            </p>
            <nav className="flex flex-col space-y-1.5 w-[150px] custom-scrollbar overflow-y-auto max-h-[420px] px-2">
              {weaponCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => selectCategory(category.id)}
                  className={`category-btn text-white text-xs font-light py-1.5 px-3 rounded-r-md rounded-l-full text-left flex items-center space-x-2 transition-all duration-300 hover:transform hover:translate-x-1 hover:shadow-lg ${
                    currentCategory === category.id
                      ? "bg-tacticool-accent shadow-tacticool-accent/30"
                      : "bg-tacticool-gray hover:bg-tacticool-gray/80"
                  }`}
                  type="button"
                >
                  <i className={`${category.icon} text-xs`}></i>
                  <span>{category.label}</span>
                </button>
              ))}
            </nav>
          </section>
          
          {/* Weapon Details - Altura otimizada */}
          <section className="rounded-2xl flex flex-col flex-1 p-3 relative bg-tacticool-teal shadow-lg" style={{ maxWidth: "700px", height: "480px" }}>
            
            {/* Weapon Header - Compacto */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 gap-2">
              <h2 className="text-white font-light text-xl flex items-center">
                <i className="fas fa-crosshairs mr-2 text-tacticool-accent"></i>
                <span>{currentCategory}</span>
              </h2>
              <form 
                className="flex items-center w-full sm:w-auto" 
                role="search" 
                onSubmit={handleSearch}
              >
                <input
                  aria-label={translate("Search by name", "Buscar por nome")}
                  className="text-xs font-light px-2 py-1 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-tacticool-accent bg-white/90 w-full sm:w-auto"
                  placeholder={translate("Search by Name", "Buscar por Nome")}
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="bg-tacticool-accent text-white text-xs font-light px-3 py-1 rounded-r-md hover:bg-tacticool-accent/80 transition flex items-center"
                  type="submit"
                >
                  <i className="fas fa-search mr-1"></i>
                  {translate("Search", "Buscar")}
                </button>
              </form>
            </div>
            
            {/* Weapon Display - ÁREA PRINCIPAL SEM SCROLL - MOVIDO MAIS PARA CIMA */}
            <div className="bg-tacticool-dark/50 rounded-xl p-4 flex-1 overflow-hidden" style={{ height: "380px" }}>
              {filteredWeapons.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-white text-lg mb-2">{translate("No weapon found", "Nenhuma arma encontrada")}</p>
                  <p className="text-white/60">{translate("Try another search term", "Tente outro termo de pesquisa")}</p>
                </div>
              ) : (
                <div className="flex items-start justify-center h-full relative pt-2">
                  
                  {/* Setas de Navegação - MENORES E POSIÇÃO FIXA SEM SOBREPOR TEXTOS */}
                  <button
                    aria-label={translate("Previous weapon", "Arma anterior")}
                    className="nav-btn text-tacticool-accent text-xl font-light hover:text-white transition-all duration-200 hover:scale-110 absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                    type="button"
                    onClick={() => navigateWeapon(-1)}
                    disabled={filteredWeapons.length <= 1}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <button
                    aria-label={translate("Next weapon", "Próxima arma")}
                    className="nav-btn text-tacticool-accent text-xl font-light hover:text-white transition-all duration-200 hover:scale-110 absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                    type="button"
                    onClick={() => navigateWeapon(1)}
                    disabled={filteredWeapons.length <= 1}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  {/* Container Principal - POSICIONADO MAIS ALTO COM MARGEM PARA AS SETAS */}
                  <div className="flex items-start justify-center gap-6 w-full max-w-[580px] mx-8">
                    
                    {/* Container da Imagem - TAMANHO FIXO */}
                    <div className="weapon-image-container bg-tacticool-gray/30 rounded-lg p-3 relative flex items-center justify-center flex-shrink-0" style={{ width: "220px", height: "160px" }}>
                      {isImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="loading-spinner border-2 border-white/30 border-t-tacticool-accent rounded-full w-5 h-5 animate-spin"></div>
                        </div>
                      )}
                      {currentWeapon && (
                        <img
                          alt={`${currentWeapon.name} weapon image`}
                          className={`rounded-md object-contain transition-opacity duration-300 ${
                            isImageLoading ? "opacity-0" : "opacity-100"
                          }`}
                          style={{ width: "194px", height: "134px" }}
                          src={currentWeapon.image}
                          onLoad={() => setIsImageLoading(false)}
                          onLoadStart={() => setIsImageLoading(true)}
                          onError={(e) => {
                            setIsImageLoading(false);
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300";
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Container dos Stats - LARGURA FIXA E TODOS OS STATS VISÍVEIS - ALTURA AUMENTADA */}
                    {currentWeapon && (
                      <div className="w-[320px] text-white font-light leading-tight flex-shrink-0" style={{ height: "320px" }}>
                        <p className="text-[9px] font-bold uppercase tracking-widest mb-1 text-tacticool-accent">
                          {language === "en" ? currentWeapon.primary.replace("ARMA PRIMÁRIA:", "PRIMARY WEAPON:").replace("ARMA SECUNDÁRIA:", "SECONDARY WEAPON:").replace("ARMA CORPO A CORPO:", "MELEE WEAPON:").replace("ARMA EXPERIMENTAL:", "EXPERIMENTAL WEAPON:") : currentWeapon.primary}
                        </p>
                        <p className={`text-2xl font-black mb-1 ${getRarityColor(currentWeapon.rarity)}`}>
                          {currentWeapon.name}
                        </p>
                        <p className="text-white text-xs font-semibold mb-1">
                          {translate("Rarity", "Raridade")}: {language === "en" 
                            ? currentWeapon.rarity === "Comum" ? "Common" 
                              : currentWeapon.rarity === "Incomum" ? "Uncommon"
                              : currentWeapon.rarity === "Raro" ? "Rare"
                              : currentWeapon.rarity === "Épico" ? "Epic"
                              : currentWeapon.rarity
                            : currentWeapon.rarity}
                        </p>
                        <div className="flex mb-2">
                          {renderStars(5)}
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] uppercase tracking-widest font-light text-tacticool-accent">
                            STATS
                          </span>
                          <span className="text-[9px] uppercase tracking-widest font-light text-tacticool-accent">
                            {translate("MAX", "MÁXIMA")}
                          </span>
                        </div>
                        
                        {/* TODOS OS STATS COM ESPAÇAMENTO E ALINHAMENTO PADRONIZADOS - SEM SCROLL */}
                        <div className="space-y-1" style={{ height: "220px" }}>
                          {currentWeapon.stats.map((stat, index) => (
                            <div 
                              key={index}
                              className="stat-item flex items-center justify-between bg-tacticool-gray/30 rounded-md px-2 py-1 opacity-0 transform translate-y-2 animate-fadeInUp"
                              style={{ 
                                animationDelay: `${(index + 1) * 0.1}s`, 
                                animationFillMode: 'forwards',
                                minHeight: '20px'
                              }}
                            >
                              <div className="flex items-center space-x-2 min-w-0 flex-1">
                                <i className={`${stat.icon} text-tacticool-accent w-3 text-[9px] flex-shrink-0`}></i>
                                <span className="text-[9px] truncate">
                                  {language === "en" 
                                    ? stat.label === "Dano" ? "Damage"
                                      : stat.label === "Dano Melee" ? "Melee Dmg"
                                      : stat.label === "Munição" ? "Ammo"
                                      : stat.label === "Cadência de Tiro" ? "Fire Rate"
                                      : stat.label === "Precisão" ? "Accuracy"
                                      : stat.label === "Alcance" ? "Range"
                                      : stat.label === "Velocidade" ? "Speed"
                                      : stat.label === "Recarga" ? "Reload"
                                      : stat.label === "Velocidade de Ataque" ? "Atk Speed"
                                      : stat.label === "Burn" ? "Queimadura"
                                      : stat.label === "Fuel" ? "Combustivel"
                                      : stat.label === "Bleed" ? "Sangramento"
                                      : stat.label === "Força de Tração" ? "Pull Force"
                                      : stat.label === "Velocidade do Ativo" ? "Active Movement Speed"
                                      : stat.label === "Distancia da Tração" ? "Pull Distance"
                                      : stat.label === "Raio de Dano" ? "Damage Radius"
                                      : stat.label
                                    : stat.label}
                                </span>
                              </div>
                              <span className="font-bold text-yellow-400 text-[9px] ml-2 flex-shrink-0">{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Weapon Counter - Compacto */}
            {filteredWeapons.length > 0 && (
              <div className="flex justify-center items-center space-x-3 mt-2">
                <span className="text-white text-xs">
                  {translate("Weapon", "Arma")} {currentIndex + 1} {translate("of", "de")} {filteredWeapons.length}
                </span>
                <div className="flex space-x-1">
                  {renderWeaponIndicators()}
                </div>
              </div>
            )}
          </section>
        </main>
        
        {/* Footer - Compacto */}
        <footer className="flex flex-col sm:flex-row justify-between items-center mt-4 px-3 text-white text-[9px] font-light gap-2">
          <p className="max-w-[700px] text-center sm:text-left">
            {translate(
              "Hey, if you enjoy the tools I create, please consider supporting me so I can continue developing new features and improvements. Special thanks to JB Chicken for the data. Thank you!",
              "Ei, se você gosta das ferramentas que eu crio, por favor considere me apoiar para que eu possa continuar desenvolvendo novos recursos e melhorias. Obrigado especial para o JB Chicken pelos dados. Obrigado!"
            )}
          </p>
          <div className="flex items-center space-x-2">
            <a
              aria-label="TikTok link"
              className="text-yellow-400 text-lg hover:text-yellow-300 transition transform hover:scale-110"
              href="https://www.tiktok.com/@rivotril.tacticool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            
           
            <a
              href="https://market.my.games/pt-BR/games/90"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TACTICOOL on My.Games"
            >
              <img
                alt="Black and yellow stylized icon of a person with a headset"
                className="object-contain hover:opacity-80 transition-opacity"
                height="35"
                src="/code.png"
                style={{ width: "140px" }}
                width="140"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
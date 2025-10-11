import React from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-green-100/80 backdrop-blur-sm px-4 py-2 rounded-full text-green-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Accompagnement bienveillant et confidentiel</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6 leading-tight">
              Reprendre le fil de
              <span className="block text-green-600">votre histoire</span>
            </h1>
            <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chaque personne porte en elle les ressources pour avancer. 
              Mon rôle est de vous accompagner à les découvrir et les cultiver, 
              dans un espace d'écoute et de respect.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Parlons de vous</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
            </Link>
            <Link 
              to="/services" 
              className="group border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Découvrir mon approche</span>
                <span className="group-hover:rotate-90 transition-transform duration-200">+</span>
              </span>
            </Link>
          </div>

          {/* Indicateur de confiance */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-green-600">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-medium">Confidentialité absolue</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🤝</span>
              <span className="text-sm font-medium">Accompagnement sur mesure</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💚</span>
              <span className="text-sm font-medium">Approche bienveillante</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Mes Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl text-white">🧠</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
                Thérapie individuelle
              </h3>
              <p className="text-green-700 text-center leading-relaxed">
                Accompagnement personnalisé pour vous aider à surmonter vos défis 
                et développer votre potentiel.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl text-white">👥</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
                Thérapie de couple
              </h3>
              <p className="text-green-700 text-center leading-relaxed">
                Renforcez votre relation et résolvez les conflits dans un cadre 
                bienveillant et professionnel.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
                Développement personnel
              </h3>
              <p className="text-green-700 text-center leading-relaxed">
                Explorez vos ressources intérieures et développez votre confiance 
                en vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-4">
            Des mots qui résonnent
          </h2>
          <p className="text-lg text-green-600 text-center mb-12 max-w-2xl mx-auto">
            Quelques témoignages de personnes qui ont choisi de reprendre leur histoire en main
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">🌸</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">Marie, 34 ans</h4>
                  <p className="text-sm text-green-600">Thérapie individuelle</p>
                </div>
              </div>
              <p className="text-green-700 italic leading-relaxed">
                "Sophie m'a aidée à comprendre mes patterns et à retrouver confiance en moi. 
                Un accompagnement bienveillant qui a changé ma vie."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">🌿</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">Pierre & Claire</h4>
                  <p className="text-sm text-green-600">Thérapie de couple</p>
                </div>
              </div>
              <p className="text-green-700 italic leading-relaxed">
                "Grâce à Sophie, nous avons appris à mieux communiquer et à renforcer notre lien. 
                Une approche respectueuse de notre histoire commune."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">🦋</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">Lucas, 28 ans</h4>
                  <p className="text-sm text-green-600">Développement personnel</p>
                </div>
              </div>
              <p className="text-green-700 italic leading-relaxed">
                "Un espace sécurisant pour explorer mes émotions et construire l'avenir que je souhaite. 
                Merci pour cette transformation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="apropos" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Mon approche
              </h2>
              <p className="text-lg text-green-700 mb-6 leading-relaxed">
                [VOTRE PRÉSENTATION - votre formation et votre expérience]
              </p>
              <p className="text-lg text-green-700 mb-8 leading-relaxed">
                [VOTRE APPROCHE - expliquez votre méthode de travail]
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span className="text-green-700">[VOTRE QUALIFICATION 1]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span className="text-green-700">[VOTRE QUALIFICATION 2]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span className="text-green-700">[VOTRE QUALIFICATION 3]</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-4xl">🌸</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">[VOTRE NOM]</h3>
              <p className="text-green-700 mb-6">
                "[VOTRE CITATION - quelques mots sur votre engagement professionnel]"
              </p>
              <Link 
                to="/a-propos" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Mon parcours complet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span>Premier entretien offert</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Votre histoire mérite d'être écoutée
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Prendre la décision de consulter est déjà un premier pas vers le changement. 
              Je vous accompagne avec bienveillance dans cette démarche courageuse.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="group bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Réserver un entretien</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Questions ?</span>
                <span className="group-hover:rotate-12 transition-transform duration-200">💬</span>
              </span>
            </Link>
          </div>

          {/* Informations pratiques */}
          <div className="grid md:grid-cols-3 gap-6 text-white/90">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-3xl mb-2">⏰</span>
              <p className="font-semibold">Disponible</p>
              <p className="text-sm text-center">Lun-Ven 9h-19h<br />Sam 9h-13h</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-3xl mb-2">🏠</span>
              <p className="font-semibold">En cabinet</p>
              <p className="text-sm text-center">Paris 15ème<br />Accès métro facile</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-3xl mb-2">💻</span>
              <p className="font-semibold">En visio</p>
              <p className="text-sm text-center">Séances à distance<br />Même qualité d'écoute</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil; 
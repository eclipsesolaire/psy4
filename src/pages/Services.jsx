import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Mon Accompagnement
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Des approches thérapeutiques adaptées à vos besoins, 
            dans un cadre bienveillant et professionnel.
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Thérapie individuelle */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">Thérapie Individuelle</h3>
                  <p className="text-green-600">Accompagnement personnalisé</p>
                </div>
              </div>
              <p className="text-green-700 mb-6 leading-relaxed">
                Un espace confidentiel pour explorer vos émotions, comprendre vos patterns 
                et développer vos ressources personnelles.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700">Gestion du stress et de l'anxiété</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700">Dépression et troubles de l'humeur</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700">Trauma et événements difficiles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700">Estime de soi et confiance</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-sm text-green-600 font-semibold mb-2">Durée et fréquence</p>
                <p className="text-green-700">Séances de 50 minutes, hebdomadaires ou bi-mensuelles selon vos besoins</p>
              </div>
            </div>

            {/* Thérapie de couple */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">Thérapie de Couple</h3>
                  <p className="text-green-600">Renforcer votre lien</p>
                </div>
              </div>
              <p className="text-green-700 mb-6 leading-relaxed">
                Un accompagnement bienveillant pour améliorer votre communication, 
                résoudre les conflits et renforcer votre relation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700">Amélioration de la communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700">Résolution de conflits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700">Intimité et complicité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-700">Projets de vie communs</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-sm text-green-600 font-semibold mb-2">Durée et fréquence</p>
                <p className="text-green-700">Séances de 75 minutes, toutes les 2-3 semaines</p>
              </div>
            </div>

            {/* Développement personnel */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-lg lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">Développement Personnel</h3>
                  <p className="text-green-600">Réveiller votre potentiel</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
  <div>
                  <p className="text-green-700 mb-6 leading-relaxed">
                    Un accompagnement pour explorer vos ressources intérieures, 
                    développer votre confiance et construire l'avenir que vous souhaitez.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-green-700">Découverte de soi</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-green-700">Gestion des émotions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-green-700">Objectifs et projets de vie</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-green-700">Relations sociales</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Approches thérapeutiques</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600 font-semibold">TCC</span>
                      <span className="text-green-700 text-sm">Thérapie Cognitive-Comportementale</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600 font-semibold">EMDR</span>
                      <span className="text-green-700 text-sm">Désensibilisation et retraitement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600 font-semibold">Pleine conscience</span>
                      <span className="text-green-700 text-sm">Techniques de méditation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-600 font-semibold">Approche humaniste</span>
                      <span className="text-green-700 text-sm">Écoute active et bienveillance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus thérapeutique */}
      <section className="py-20 px-6 bg-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Comment se déroule une thérapie ?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Premier contact</h3>
              <p className="text-green-700 text-sm">Échange téléphonique gratuit pour comprendre vos besoins</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Entretien d'accueil</h3>
              <p className="text-green-700 text-sm">Première séance pour définir ensemble vos objectifs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Accompagnement</h3>
              <p className="text-green-700 text-sm">Séances régulières adaptées à votre rythme</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Autonomie</h3>
              <p className="text-green-700 text-sm">Vous reprenez confiance en vos ressources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Tarifs et modalités
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-green-800 mb-4">Premier entretien</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">Gratuit</div>
              <p className="text-green-700 text-sm mb-4">30 minutes pour faire connaissance et définir vos besoins</p>
              <div className="w-full h-0.5 bg-green-200 mb-4"></div>
              <p className="text-green-600 text-xs">Sans engagement</p>
            </div>
            <div className="bg-green-100 p-6 rounded-2xl text-center border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-800 mb-4">Séance individuelle</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">65€</div>
              <p className="text-green-700 text-sm mb-4">50 minutes d'accompagnement personnalisé</p>
              <div className="w-full h-0.5 bg-green-300 mb-4"></div>
              <p className="text-green-600 text-xs">Possibilité de règlement en plusieurs fois</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-green-800 mb-4">Séance de couple</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">80€</div>
              <p className="text-green-700 text-sm mb-4">75 minutes pour renforcer votre relation</p>
              <div className="w-full h-0.5 bg-green-200 mb-4"></div>
              <p className="text-green-600 text-xs">Approche bienveillante et équilibrée</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-green-700 mb-6">
              💡 <strong>Bon à savoir :</strong> Certaines mutuelles remboursent partiellement les séances de psychologie. 
              Je vous accompagne dans vos démarches.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg"
            >
              Réserver un premier entretien
            </Link>
          </div>
        </div>
      </section>
  </div>
);
};

export default Services; 
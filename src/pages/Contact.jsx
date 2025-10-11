import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Prenons Contact
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Votre premier pas vers le bien-être commence par un échange. 
            Je suis là pour vous écouter et répondre à vos questions.
          </p>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-8">Envoyez-moi un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-green-700 font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-green-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-green-700 font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-green-700 font-medium mb-2">
                    Sujet de votre message *
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="premier-rdv">Premier rendez-vous</option>
                    <option value="question">Question sur les services</option>
                    <option value="urgence">Situation urgente</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-green-700 font-medium mb-2">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Parlez-moi de ce qui vous amène à consulter..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Envoyer le message
                </button>

                <p className="text-sm text-green-600 text-center">
                  * Champs obligatoires. Vos informations sont traitées en toute confidentialité.
                </p>
              </form>
            </div>

            {/* Informations pratiques */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-8">Informations pratiques</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Adresse du cabinet</h3>
                        <p className="text-green-700">
                          [VOTRE_ADRESSE]<br />
                          [VOTRE_CODE_POSTAL] [VOTRE_VILLE]<br />
                          <span className="text-sm text-green-600">[INFORMATIONS TRANSPORT]</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-2xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Horaires</h3>
                        <div className="text-green-700 space-y-1">
                          <p>[VOS_HORAIRES_SEMAINE]</p>
                          <p>[VOS_HORAIRES_SAMEDI]</p>
                          <p className="text-sm text-green-600">[VOS_HORAIRES_DIMANCHE]</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-2xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Contact direct</h3>
                        <p className="text-green-700 mb-2">
                          <a href="tel:[VOTRE_TELEPHONE]" className="hover:text-green-600 transition-colors duration-200">
                            [VOTRE_TELEPHONE]
                          </a>
                        </p>
                        <p className="text-green-700">
                          <a href="mailto:[VOTRE_EMAIL]" className="hover:text-green-600 transition-colors duration-200">
                            [VOTRE_EMAIL]
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-2xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">💻</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Séances en visio</h3>
                        <p className="text-green-700">
                          Possibilité de consultations à distance via Zoom ou Teams. 
                          Même qualité d'écoute et de confidentialité garanties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">Premier entretien gratuit</h3>
                <p className="text-green-700 mb-4">
                  Un échange de 30 minutes pour faire connaissance, comprendre vos besoins 
                  et voir si nous sommes faits pour cheminer ensemble.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">Sans engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgences */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-red-600 text-2xl">🚨</span>
            </div>
            <h2 className="text-2xl font-bold text-red-800 mb-4">En cas d'urgence</h2>
            <p className="text-red-700 mb-6">
              Si vous traversez une crise ou une situation d'urgence, n'hésitez pas à contacter :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Samu</h3>
                <a href="tel:15" className="text-red-600 font-bold text-xl hover:text-red-700">15</a>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Urgences</h3>
                <a href="tel:112" className="text-red-600 font-bold text-xl hover:text-red-700">112</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 
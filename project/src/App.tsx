import React, { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin, Mail, Heart, Brain, Baby, Bone, ChevronRight, Facebook, Linkedin, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-700 fixed w-full z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#accueil" className="text-white text-2xl font-bold">
            Santé<span className="text-teal-400">+</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#accueil" className="text-white hover:text-teal-300 transition-colors">Accueil</a>
            <a href="#apropos" className="text-white hover:text-teal-300 transition-colors">À propos</a>
            <a href="#services" className="text-white hover:text-teal-300 transition-colors">Services</a>
            <a href="#specialites" className="text-white hover:text-teal-300 transition-colors">Spécialités</a>
            <a href="#medecins" className="text-white hover:text-teal-300 transition-colors">Médecins</a>
            <a href="#urgence" className="text-white hover:text-teal-300 transition-colors">Urgences</a>
            <a href="#contact" className="text-white hover:text-teal-300 transition-colors">Contact</a>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full transition-all transform hover:-translate-y-1">
              Prendre RDV
            </button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 py-4 px-4 absolute w-full shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <a href="#accueil" className="text-white py-2 px-4 hover:bg-blue-700 rounded" onClick={toggleMenu}>Accueil</a>
              <a href="#apropos" className="text-white py-2 px-4 hover:bg-blue-700 rounded" onClick={toggleMenu}>À propos</a>
              <a href="#services" className="text-white py-2 px-4 hover:bg-blue-700 rounded" onClick={toggleMenu}>Services</a>
              <a href="#specialites" className="text-white py-2 px-4 hover:bg-blue-700 rounded" onClick={toggleMenu}>Spécialités</a>
              <a href="#medecins" className="text-white py-2 px-4 hover:bg-blue-700 rounded" onClick={toggleMenu}>Médecins</a>
              <a href="#urgence" className="text-white py-2 px-4 hover:bg-blue-700 rounded" onClick={toggleMenu}>Urgences</a>
              <a href="#contact" className="text-white py-2 px-4 hover:bg-blue-700 rounded" onClick={toggleMenu}>Contact</a>
              <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full mt-2">
                Prendre RDV
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-24 md:pt-0 min-h-screen flex items-center bg-gradient-to-r from-gray-100 to-blue-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
                Santé Optimale, <br />Vie Épanouie
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Des soins médicaux d'excellence dans un environnement bienveillant
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg transition-all transform hover:-translate-y-1 shadow-lg">
                Découvrir nos services
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Équipe médicale" 
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-teal-400 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Bâtiment de la clinique" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-teal-400 rounded-lg -z-10"></div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Notre Clinique</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Fondée en 2005, la Clinique SantéPlus s'est imposée comme un leader dans les soins médicaux innovants. Notre mission est de fournir des soins de santé exceptionnels dans un environnement accueillant et rassurant.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="bg-teal-500 p-1 rounded-full text-white mr-3">
                    <ChevronRight size={16} />
                  </span>
                  <span>50+ spécialités médicales</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-teal-500 p-1 rounded-full text-white mr-3">
                    <ChevronRight size={16} />
                  </span>
                  <span>Plateaux techniques ultramodernes</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-teal-500 p-1 rounded-full text-white mr-3">
                    <ChevronRight size={16} />
                  </span>
                  <span>Accréditations internationales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous offrons une gamme complète de services médicaux pour répondre à tous vos besoins de santé
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="text-teal-500 mb-4">
                <Heart size={48} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Cardiologie</h3>
              <p className="text-gray-600">Des soins cardiaques de pointe avec les dernières technologies et des spécialistes reconnus.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="text-teal-500 mb-4">
                <Bone size={48} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Orthopédie</h3>
              <p className="text-gray-600">Nos spécialistes en traumatologie et chirurgie orthopédique vous accompagnent vers une meilleure mobilité.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="text-teal-500 mb-4">
                <Baby size={48} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Pédiatrie</h3>
              <p className="text-gray-600">Des soins adaptés aux enfants dans un environnement rassurant et avec une équipe bienveillante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialites" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Nos Spécialités</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez l'étendue de nos spécialités médicales pour une prise en charge complète
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-800 text-white p-4">
                <h3 className="text-xl font-bold flex items-center">
                  <Heart className="mr-2" size={20} /> Cardiologie
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Échocardiographie</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Rythmologie</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Chirurgie cardiaque</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-800 text-white p-4">
                <h3 className="text-xl font-bold flex items-center">
                  <Brain className="mr-2" size={20} /> Neurologie
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Épileptologie</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Neurochirurgie</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Électroencéphalogramme</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-800 text-white p-4">
                <h3 className="text-xl font-bold flex items-center">
                  <Baby className="mr-2" size={20} /> Pédiatrie
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Néonatologie</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Pédiatrie générale</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Chirurgie pédiatrique</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="medecins" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Notre Équipe Médicale</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des professionnels de santé expérimentés et dévoués à votre bien-être
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
                alt="Dr. Jean Dupont" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-blue-800">Dr. Jean Dupont</h3>
              <p className="text-teal-600 font-medium">Chirurgien Cardiaque</p>
              <p className="text-gray-600 mt-2">20 ans d'expérience</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
                alt="Dr. Marie Laurent" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-blue-800">Dr. Marie Laurent</h3>
              <p className="text-teal-600 font-medium">Neurologue</p>
              <p className="text-gray-600 mt-2">15 ans d'expérience</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-all hover:-translate-y-2 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" 
                alt="Dr. Thomas Moreau" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-blue-800">Dr. Thomas Moreau</h3>
              <p className="text-teal-600 font-medium">Pédiatre</p>
              <p className="text-gray-600 mt-2">18 ans d'expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section id="urgence" className="py-16 bg-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Urgences Médicales 24/7</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre service d'urgence est disponible 24h/24 et 7j/7 avec une équipe médicale qualifiée prête à intervenir
          </p>
          
          <div className="bg-white/10 p-6 rounded-lg max-w-md mx-auto mb-8">
            <Phone size={48} className="mx-auto mb-4" />
            <p className="text-2xl font-bold">01 23 45 67 89</p>
            <p className="text-lg">Numéro d'urgence</p>
          </div>
          
          <a 
            href="tel:+33123456789" 
            className="inline-flex items-center bg-white text-red-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone className="mr-2" size={20} /> Appel d'urgence immédiat
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Contactez-nous</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Envoyez-nous un message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Votre email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Téléphone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Votre numéro"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-blue-800 text-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 flex-shrink-0 text-teal-300" size={24} />
                    <div>
                      <h4 className="font-bold text-teal-300">Adresse</h4>
                      <p>123 Rue de la Santé<br />75015 Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-4 flex-shrink-0 text-teal-300" size={24} />
                    <div>
                      <h4 className="font-bold text-teal-300">Téléphone</h4>
                      <p>01 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 flex-shrink-0 text-teal-300" size={24} />
                    <div>
                      <h4 className="font-bold text-teal-300">Email</h4>
                      <p>contact@santeplus.fr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-4 flex-shrink-0 text-teal-300" size={24} />
                    <div>
                      <h4 className="font-bold text-teal-300">Horaires</h4>
                      <p>Lun-Ven: 8h-20h<br />Sam: 8h-18h<br />Dim: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1623335676051!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Santé<span className="text-teal-400">+</span></h3>
              <p className="mb-4">
                Des soins médicaux d'excellence dans un environnement bienveillant depuis 2005.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-teal-300 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-teal-300 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-teal-300 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-teal-400 mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li><a href="#accueil" className="hover:text-teal-300 transition-colors">Accueil</a></li>
                <li><a href="#apropos" className="hover:text-teal-300 transition-colors">À propos</a></li>
                <li><a href="#services" className="hover:text-teal-300 transition-colors">Services</a></li>
                <li><a href="#specialites" className="hover:text-teal-300 transition-colors">Spécialités</a></li>
                <li><a href="#medecins" className="hover:text-teal-300 transition-colors">Médecins</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-teal-400 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-300 transition-colors">Urgences</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Consultations</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Chirurgie</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Laboratoire</a></li>
                <li><a href="#" className="hover:text-teal-300 transition-colors">Imagerie</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-teal-400 mb-4">Contact</h4>
              <address className="not-italic">
                <p className="flex items-start mb-2">
                  <MapPin size={18} className="mr-2 flex-shrink-0 mt-1" />
                  123 Rue de la Santé<br />75015 Paris, France
                </p>
                <p className="flex items-center mb-2">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  01 23 45 67 89
                </p>
                <p className="flex items-center">
                  <Mail size={18} className="mr-2 flex-shrink-0" />
                  contact@santeplus.fr
                </p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Clinique SantéPlus. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { Phone, MapPin, Clock, Smartphone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Contacto | Centro Auditivo Málaga | Escucha+"
                description="Reserva tu cita hoy mismo por WhatsApp o teléfono. Estamos en el centro de Málaga para cuidar tu salud auditiva sin esperas."
            />
            
            <div className="pt-32 pb-16 px-4 max-w-[1200px] mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 italic">Estamos aquí para <span className="text-[#0093d0]">escucharte</span>.</h1>
                <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mx-auto">
                    Tu primera consulta incluye una audiometría completa y asesoramiento personalizado sin coste alguno. Ven a vernos en Málaga o escríbenos por WhatsApp.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 pb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                    {/* Left Side: Contact Methods */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold mb-8 text-gray-900 italic">Contacto Directo</h2>
                        
                        <a 
                            href={CONTACT_INFO.whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block bg-green-50 p-8 rounded-[2.5rem] border border-green-100 hover:shadow-xl transition-all group"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                    <MessageCircle size={32} />
                                </div>
                                <div>
                                    <h4 className="text-green-700 text-xs font-bold uppercase tracking-widest mb-1">Respuesta Inmediata</h4>
                                    <p className="text-gray-900 font-bold text-2xl group-hover:text-green-600 transition-colors">WhatsApp: {CONTACT_INFO.phoneDisplay}</p>
                                </div>
                            </div>
                        </a>

                        <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 bg-[#0093d0] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                    <MapPin size={32} />
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Nuestro Centro</h4>
                                    <p className="text-gray-900 font-bold text-xl leading-snug">{CONTACT_INFO.address}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#0093d0] shadow-sm">
                                    <Clock size={32} />
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Horario</h4>
                                    <p className="text-gray-900 font-semibold italic">Lunes y Miércoles: 9:30–14:00, 17:00–19:00</p>
                                    <p className="text-gray-900 font-semibold italic">Martes, Jueves y Viernes: 9:30–14:00</p>
                                    <p className="text-gray-500 italic text-sm">Sábados y Domingos: Cerrado</p>
                                </div>
                            </div>
                        </div>

                        <a 
                            href={`tel:${CONTACT_INFO.phoneSecondary.replace(/\s/g, '')}`}
                            className="block bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 hover:shadow-xl transition-all group"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#0093d0] shadow-sm">
                                    <Phone size={32} />
                                </div>
                                <div>
                                    <h4 className="text-[#0093d0] text-xs font-bold uppercase tracking-widest mb-1">Llámanos</h4>
                                    <p className="text-gray-900 font-bold text-2xl group-hover:text-[#0093d0] transition-colors">{CONTACT_INFO.phoneSecondary}</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Right Side: Map */}
                    <div className="h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                        <iframe
                            src="https://maps.google.com/maps?q=Calle+Martínez+Maldonado,+52,+Málaga&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.1)' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Final Trust CTA */}
            <div className="bg-[#0093d0] py-16 text-white text-center">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h3 className="text-3xl font-bold mb-4 italic">¿Hablamos ahora?</h3>
                    <p className="text-blue-50 mb-8 opacity-90">Pulsa el botón y cuéntanos qué necesitas. Te responderemos al instante.</p>
                    <a 
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-[#0093d0] px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform"
                    >
                        <MessageCircle size={24} /> Abrir WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;

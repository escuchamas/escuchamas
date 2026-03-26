import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white">
            <SEO
                title="Contacto | Centro Auditivo Málaga | Escucha+"
                description="Reserva tu cita hoy mismo. Estamos en el centro de Málaga para cuidar tu salud auditiva. Atención por WhatsApp o teléfono inmediata."
            />
            
            <div className="pt-32 pb-16 px-4 max-w-[1200px] mx-auto text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 italic">Estamos aquí para <span className="text-[#0093d0]">escucharte</span>.</h1>
                <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mx-auto md:mx-0">
                    Tu primera consulta incluye una audiometría completa y asesoramiento personalizado sin coste alguno. Ven a vernos en Málaga.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 pb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <div className="bg-gray-50 p-10 md:p-12 rounded-[2.5rem] shadow-sm">
                        {submitted ? (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-[#0093d0]" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2 italic">¡Gracias por confiar!</h3>
                                <p className="text-gray-500 text-lg">Nos pondremos en contacto contigo en las próximas 24 horas.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-8 text-[#0093d0] font-bold hover:underline">
                                    ← Volver al formulario
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold mb-8 text-gray-900 italic">Reserva tu cita</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nombre</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#0093d0]/20 focus:border-[#0093d0] outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Teléfono</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#0093d0]/20 focus:border-[#0093d0] outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Mensaje</label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#0093d0]/20 focus:border-[#0093d0] outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-[#0093d0] text-white py-5 rounded-2xl text-lg font-bold shadow-xl hover:bg-[#0077a3] flex items-center justify-center gap-2 transform transition-all hover:scale-[1.01]">
                                        Enviar Solicitud <Send size={20} />
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                    <div className="space-y-8">
                        <ContactCard 
                            icon={<Smartphone />}
                            title="WhatsApp Directo"
                            info={CONTACT_INFO.phoneDisplay}
                            link={CONTACT_INFO.whatsappUrl}
                        />
                        <ContactCard 
                            icon={<MapPin />}
                            title="Nuestro Centro"
                            info={CONTACT_INFO.address}
                        />
                        <div className="h-80 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                            <iframe
                                src="https://maps.google.com/maps?q=Calle+Martínez+Maldonado,+52,+Málaga&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.2)' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactCard = ({ icon, title, info, link }) => (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0093d0]">
            {icon}
        </div>
        <div>
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{title}</h4>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-bold text-xl hover:text-[#0093d0] transition-colors">
                    {info}
                </a>
            ) : (
                <p className="text-gray-900 font-bold text-xl leading-snug">{info}</p>
            )}
        </div>
    </div>
);

export default Contact;

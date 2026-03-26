import React from 'react';
import { Check, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT_INFO } from '../constants';

// Reusing the generated images from assets
import imgInvisible from '../assets/invisible.png';
import imgConectado from '../assets/conectado.png';
import imgRecargable from '../assets/recargable.png';
import imgPotente from '../assets/potente.png';

const Products = () => {
    const products = [
        {
            id: 1,
            name: "Audífonos Invisibles",
            tag: "Discreción Absoluta",
            description: "La solución perfecta para quienes buscan pasar desapercibidos. Se adaptan a la anatomía de tu oído con precisión milimétrica.",
            features: ["100% Invisible", "Hechos a medida", "Sonido digital nítido"],
            image: imgInvisible
        },
        {
            id: 2,
            name: "Conectividad Total",
            tag: "Smart Hearing",
            description: "Controla tu mundo auditivo desde tu smartphone. Streaming directo de llamadas, música y televisión con la mejor fidelidad.",
            features: ["Bluetooth 5.0", "App de control personalizada", "Streaming estereo"],
            image: imgConectado
        },
        {
            id: 3,
            name: "Tecnología Recargable",
            tag: "Eco & Confort",
            description: "Olvídate de las pilas para siempre. Con una carga rápida tendrás autonomía para todo el día, incluso con streaming activo.",
            features: ["24h de uso ininterrumpido", "Carga ultra-rápida", "Estuche portátil"],
            image: imgRecargable
        },
        {
            id: 4,
            name: "Máxima Potencia",
            tag: "Rendimiento Superior",
            description: "Diseñados para pérdidas severas o profundas. Robustos, fiables y con la mayor ganancia del mercado sin distorsión.",
            features: ["Cancelación de ruido extrema", "Robustez garantizada", "Micrófonos direccionales"],
            image: imgPotente
        }
    ];

    return (
        <div className="bg-white">
            <SEO 
                title="Audífonos de Última Generación en Málaga | Escucha+" 
                description="Descubre nuestra gama exclusiva de audífonos invisibles, recargables y conectados. Tecnología de vanguardia con atención personalizada en Málaga."
            />
            
            {/* Header section */}
            <div className="relative pt-32 pb-24 bg-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-20"></div>
                <div className="max-w-[1200px] mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-[#0093d0]/10 text-[#0093d0] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                            Protecnología Auditiva
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                            La vanguardia de la audición a tu <span className="text-[#0093d0]">alcance</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10">
                            En Escucha+ no solo seleccionamos audífonos; elegimos la tecnología que mejor se sincroniza con tu vida, asegurando una adaptación cómoda y resultados inmediatos.
                        </p>
                    </div>
                </div>
            </div>

            {/* Product Listing */}
            <div className="py-24 max-w-[1200px] mx-auto px-4">
                <div className="grid gap-20">
                    {products.map((product, index) => (
                        <div key={product.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                            <div className="w-full md:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gray-100 rounded-[3rem] transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <span className="text-[#0093d0] font-bold text-sm tracking-widest uppercase">{product.tag}</span>
                                <h2 className="text-4xl font-bold text-gray-900">{product.name}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                                <ul className="space-y-3 pt-4">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                            <div className="bg-[#0093d0] rounded-full p-1">
                                                <Check size={14} className="text-white" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-8">
                                    <a 
                                        href={CONTACT_INFO.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#0093d0] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0077a3] transition-all transform hover:translate-x-2"
                                    >
                                        Consultar Disponibilidad <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trust Section */}
            <div className="bg-gray-900 py-24 text-white rounded-[3rem] mx-4 mb-12">
                <div className="max-w-[1200px] mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 italic">"Nuestra tecnología solo es comparable a nuestro compromiso contigo."</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-[#0093d0]" />
                            </div>
                            <h4 className="text-xl font-bold italic">Garantía Total de 5 Años</h4>
                            <p className="text-gray-400">Tranquilidad absoluta ante cualquier imprevisto técnico.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-8 h-8 text-[#0093d0]" />
                            </div>
                            <h4 className="text-xl font-bold italic">Prueba sin Compromiso</h4>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 pb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Form - Refined */}
                    <div className="bg-gray-50 p-10 md:p-12 rounded-[2.5rem] shadow-sm">
                        {submitted ? (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-[#0093d0]" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2 italic">¡Gracias por confiar!</h3>
                                <p className="text-gray-500 text-lg">Nos pondremos en contacto contigo en las próximas 24 horas laborables.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-8 text-[#0093d0] font-bold hover:underline">
                                    ← Volver al formulario
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold mb-8 text-gray-900 italic">Escríbenos tu duda</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nombre Completo</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Tu nombre..."
                                                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#0093d0]/20 focus:border-[#0093d0] transition-all outline-none"
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
                                                placeholder="600 000 000"
                                                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#0093d0]/20 focus:border-[#0093d0] transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="ejemplo@correo.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#0093d0]/20 focus:border-[#0093d0] transition-all outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">¿En qué podemos ayudarte?</label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Cuéntanos un poco sobre tu caso..."
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:ring-2 focus:ring-[#0093d0]/20 focus:border-[#0093d0] transition-all outline-none resize-none"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-[#0093d0] text-white py-5 rounded-2xl text-lg font-bold shadow-xl hover:bg-[#0077a3] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                                        Solicitar Cita <Send size={20} />
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                    {/* Info Side - Premium Cards */}
                    <div className="space-y-8">
                        <div className="grid gap-6">
                            <ContactCard 
                                icon={<Smartphone className="w-6 h-6" />}
                                title="WhatsApp Inmediato"
                                info={CONTACT_INFO.phoneDisplay}
                                link={CONTACT_INFO.whatsappUrl}
                                cta="Chatea ahora"
                            />
                            <ContactCard 
                                icon={<MapPin className="w-6 h-6" />}
                                title="Dirección"
                                info={CONTACT_INFO.address}
                                link="https://maps.google.com/?q=Calle+Martínez+Maldonado,+52,+Málaga"
                                cta="Ver en mapa"
                            />
                            <ContactCard 
                                icon={<Clock className="w-6 h-6" />}
                                title="Horario de Atención"
                                info="Lunes a Viernes: 9:30 - 20:00"
                                subInfo="Sábados bajo cita previa"
                            />
                        </div>

                        {/* Map Embed - Styled */}
                        <div className="h-80 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50 relative">
                            <iframe
                                src="https://maps.google.com/maps?q=Calle+Martínez+Maldonado,+52,+Málaga&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Localización Escucha+"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactCard = ({ icon, title, info, subInfo, link, cta }) => (
    <div className="bg-white border border-gray-100 p-8 rounded-3xl transition-all hover:shadow-lg flex items-center justify-between group">
        <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0093d0]">
                {icon}
            </div>
            <div>
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{title}</h4>
                <p className="text-gray-900 font-bold text-lg">{info}</p>
                {subInfo && <p className="text-gray-400 text-sm mt-1">{subInfo}</p>}
            </div>
        </div>
        {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#0093d0] font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {cta}
            </a>
        )}
    </div>
);

export default Contact;

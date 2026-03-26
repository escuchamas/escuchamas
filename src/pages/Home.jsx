import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import SEO from '../components/SEO';
import imgInvisible from '../assets/invisible.png';
import imgConectado from '../assets/conectado.png';
import imgRecargable from '../assets/recargable.png';
import imgPotente from '../assets/potente.png';
import { CONTACT_INFO } from '../constants';

const Home = () => {
    const structuredData = {
// ... existing code ...
// Skipping lines for brevity in thought, but tool call will have full content
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Escucha+",
        "image": "https://escuchamas.com/logo.png",
        "@id": "https://escuchamas.com/",
        "url": "https://escuchamas.com/",
        "telephone": CONTACT_INFO.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "C. Martínez Maldonado, 52, Bailén-Miraflores",
            "addressLocality": "Málaga",
            "postalCode": "29007",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.7213,
            "longitude": -4.4343
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Wednesday"],
                "opens": "09:30",
                "closes": "14:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Wednesday"],
                "opens": "17:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Thursday", "Friday"],
                "opens": "09:30",
                "closes": "14:00"
            }
        ]
    };

    return (
        <div className="bg-gray-50">
            <SEO 
                title="Centro Auditivo Málaga | Revisión Gratis" 
                description="Especialistas en audífonos en Málaga. Financiación 0%, prueba gratuita de 15 días y atención personalizada. ¡Recupera tu audición hoy!"
            />
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            {/* Hero Section - Full width image with blue overlay */}
            <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                {/* Blue Overlay / Veil */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0093d0]/90 to-[#0077a3]/80" />

                {/* Content */}
                <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 py-16 text-white text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Excelencia Auditiva en Málaga
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-3xl">
                        Vuelve a conectar con los <span className="text-[#0093d0] drop-shadow-sm bg-white px-2 rounded-lg">sonidos</span> que amas
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl leading-relaxed">
                        En Escucha+ combinamos tecnología de vanguardia y atención humana para ofrecerte la solución auditiva perfecta. Especialistas en el centro de Málaga.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href={CONTACT_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#0093d0] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#0077a3] transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Pedir Cita Ahora
                        </a>
                        <Link
                            to="/productos"
                            className="inline-block bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0093d0] transition-all transform hover:scale-105 active:scale-95 text-center"
                        >
                            Explorar Audífonos
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Badges - GAES style */}
            <section className="bg-white py-6 border-b">
                <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-6 text-gray-600 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <span className="text-[#0093d0] text-xl">✓</span> 0% Intereses
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#0093d0] text-xl">✓</span> Prueba Gratuita 15 días
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#0093d0] text-xl">✓</span> Garantía de Satisfacción
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#0093d0] text-xl">✓</span> Atención Personalizada
                    </div>
                </div>
            </section>

            {/* Product Grid - GAES "ampli" style */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Nuestras Soluciones Auditivas</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Tecnología avanzada para cada estilo de vida. Encuentra el audífono perfecto para ti.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        <ProductCard
                            name="Audífonos Invisibles"
                            description="Diseño discreto que nadie notará"
                            image={imgInvisible}
                        />
                        <ProductCard
                            name="Audífonos Conectados"
                            description="Streaming directo desde tu móvil"
                            image={imgConectado}
                        />
                        <ProductCard
                            name="Audífonos Recargables"
                            description="24h de autonomía sin pilas"
                            image={imgRecargable}
                        />
                        <ProductCard
                            name="Audífonos Potentes"
                            description="Máxima potencia y comodidad en formato compacto"
                            image={imgPotente}
                        />
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/productos"
                            className="inline-block text-[#0093d0] font-bold hover:underline"
                        >
                            Ver todos los modelos →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - GAES style */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">¿Por qué Escucha+?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon="🏥"
                            title="Expertos Audiólogos"
                            description="Profesionales certificados con años de experiencia en salud auditiva."
                        />
                        <FeatureCard
                            icon="🎯"
                            title="Test Auditivo Gratuito"
                            description="Conoce el estado de tu audición sin coste ni compromiso."
                        />
                        <FeatureCard
                            icon="💳"
                            title="Financiación 0%"
                            description="Elige plazo y cuota sin costes añadidos. Facilidades de pago."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Banner - GAES "Reserva cita" style */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Reserva una cita gratuita</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Visita tu centro Escucha+ y revisa tu audición gratis y sin compromiso.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block bg-[#0093d0] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#0077a3] transition-colors shadow-lg"
                    >
                        Pedir Cita Ahora
                    </Link>
                    <p className="text-gray-400 mt-6 text-sm">
                        📞 También puedes llamarnos: {CONTACT_INFO.phone}
                    </p>
                </div>
            </section>
        </div>
    );
};

const ProductCard = ({ name, description, image }) => (
    <Link
        to="/productos"
        className="block bg-white rounded-2xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group overflow-hidden"
    >
        <div className="h-48 overflow-hidden bg-gray-100 relative">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
            <p className="text-gray-500 text-sm mb-4">{description}</p>
            <span className="inline-block text-[#0093d0] font-semibold text-sm group-hover:underline">
                Más información →
            </span>
        </div>
    </Link>
);

const FeatureCard = ({ icon, title, description }) => (
    <div className="text-center p-6">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default Home;

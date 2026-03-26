import { Users, Award, Heart, ShieldCheck, Clock, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT_INFO } from '../constants';

const About = () => {
    return (
        <div className="bg-white">
            <SEO 
                title="Sobre Nosotros | Escucha+" 
                description="Conoce al equipo de Escucha+, especialistas audiólogos en Málaga dedicados a mejorar tu salud auditiva desde 2010. Tu bienestar es nuestra prioridad."
            />
            
            {/* Hero Section */}
            <div className="relative bg-gray-900 py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0093d0] to-transparent mix-blend-multiply"></div>
                </div>
                <div className="relative max-w-[1200px] mx-auto px-4 text-center text-white">
                    <span className="text-[#0093d0] font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra Misión</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Expertos en Salud Auditiva en Málaga</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Desde 2010, nuestro compromiso ha sido reconectar a las personas con el sonido de la vida a través de la excelencia clínica y la calidez humana.
                    </p>
                </div>
            </div>

            {/* Historia - Premium split */}
            <div className="container mx-auto px-4 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Más de una década cuidando tu audición</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                El Centro Auditivo Escucha+ nació con una visión clara: la audición no es solo una función biológica, es la base de la conexión humana.
                            </p>
                            <p>
                                Ubicados en el corazón de Málaga, hemos evolucionado integrando la tecnología más avanzada del mercado, pero manteniendo siempre el trato cercano y personalizado que nos define.
                            </p>
                            <p className="font-medium text-[#0093d0]">
                                "No solo vendemos audífonos, diseñamos experiencias auditivas que transforman vidas."
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                             <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
                                <ShieldCheck className="w-32 h-32 text-[#0093d0] opacity-20" />
                             </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                            <div className="text-4xl font-bold text-[#0093d0]">15+</div>
                            <div className="text-gray-500 font-medium">Años de Exp.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values - Grid design */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores Fundamentales</h2>
                        <p className="text-gray-500">Lo que nos hace diferentes y nos guía cada día.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<Heart className="w-8 h-8 text-[#0093d0]" />}
                            title="Empatía Real"
                            description="Entendemos el impacto emocional de la pérdida auditiva y te acompañamos en cada paso."
                        />
                        <ValueCard
                            icon={<Award className="w-8 h-8 text-[#0093d0]" />}
                            title="Excelencia Técnica"
                            description="Nuestros audiólogos se forman continuamente en las últimas innovaciones del sector."
                        />
                        <ValueCard
                            icon={<Clock className="w-8 h-8 text-[#0093d0]" />}
                            title="Seguimiento de por Vida"
                            description="Tu tratamiento no termina al comprar un audífono; estamos siempre contigo para ajustes."
                        />
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">El Equipo de Escucha+</h2>
                    <p className="text-gray-500">Profesionales certificados dedicados a tu bienestar.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    <TeamMember name="Ana Torregrosa" role="Directora Técnica - Audióloga" />
                    <TeamMember name="Carlos Ruiz" role="Especialista en Audífonos" />
                    <TeamMember name="María López" role="Atención al Paciente" />
                </div>
            </div>
        </div>
    );
};

const ValueCard = ({ icon, title, description }) => (
    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const TeamMember = ({ name, role }) => (
    <div className="text-center group">
        <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg transition-transform group-hover:scale-105">
            <Users className="w-20 h-20 text-gray-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-[#0093d0] font-medium">{role}</p>
    </div>
);

export default About;

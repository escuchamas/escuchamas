import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
    useEffect(() => {
        // Update title
        if (title) {
            document.title = `${title} | Escucha+`;
        }

        // Update description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Centro Auditivo Escucha+ en Málaga. Revisión gratuita y audífonos de última tecnología.');
        }

        // Update keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords || 'escucha mas, escucha +, centro auditivo malaga, audifonos malaga');
        }
    }, [title, description, keywords]);

    return null;
};

export default SEO;

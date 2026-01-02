import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useEffect } from "react";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export function Layout({ children, title = "BigMarkt", description = "Build real market skills, get real capital, launch your finance career. Join our global investment learning platform." }: LayoutProps) {
    useEffect(() => {
        // Set document title
        document.title = title;

        // Set meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Set Open Graph title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', title);

        // Set Open Graph description
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', description);
    }, [title, description]);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

import Navigation from "./_comps/Navigation";
import Footer from "./_comps/Footer";

export default function RootLayout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}

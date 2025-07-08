import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import Footer from '@/components/Footer';
import { categories } from '@/data/categories';
import CategoryCarousel from './../components/CategorySidebar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="mt-6">
        <CategoryCarousel categories={categories} />
      </section>
      <HeroBanner />
      <Footer />
    </div>
  );
}

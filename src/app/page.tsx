"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Αρχική", id: "hero" },
        { name: "Η Ιστορία μας", id: "about" },
        { name: "Μενού", id: "products" },
        { name: "Επικοινωνία", id: "contact" },
      ]}
      brandName="Εσπεριδες"
      button={{ text: "Κράτηση", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "radial-gradient" }}
      title="Γεύσεις Παράδοσης στις Εσπερίδες"
      description="Αυθεντική κουζίνα στην καρδιά της Καλαμαριάς. Σας περιμένουμε για μια μοναδική γαστρονομική εμπειρία."
      buttons={[{ text: "Δείτε το Μενού", href: "#products" }]}
      imageSrc="http://img.b2bpic.net/free-photo/romantic-table-setting-wedding-reception-with-sea-view-through-windows_637285-997.jpg"
      imageAlt="mediterranean restaurant interior warm"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/friends-eating-pizza-medium-shot_23-2149872407.jpg", alt: "Friends eating pizza medium shot" },
        { src: "http://img.b2bpic.net/free-photo/close-up-young-friends-restaurant_23-2148395397.jpg", alt: "Close-up young friends at restaurant" },
        { src: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg", alt: "Happy woman enjoying at dining table while communicating with her husband" },
        { src: "http://img.b2bpic.net/free-photo/having-lunch-spacious-restaurant_52683-117480.jpg", alt: "Having lunch in spacious restaurant" },
        { src: "http://img.b2bpic.net/free-photo/woman-listening-mens-stories_329181-17786.jpg", alt: "Woman listening to mens stories" },
      ]}
      avatarText="Χιλιάδες ικανοποιημένοι πελάτες"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Η Ιστορία μας"
      title="Από το 1990 στην Καλαμαριά"
      description="Το μαγαζί Εσπερίδες δημιουργήθηκε με αγάπη για την καλή ελληνική κουζίνα και την παράδοση."
      subdescription="Με έδρα τη Θεμιστοκλή Σοφούλη 103, συνεχίζουμε να υπηρετούμε τις αξίες της φιλοξενίας και της ποιότητας."
      icon={Award}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-modern-family-retro-style_23-2150595556.jpg"
      mediaAnimation="opacity"
      imageAlt="restaurant family history dining"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { tag: "Ποιότητα", title: "Φρέσκα Υλικά", subtitle: "Από την περιοχή", description: "Χρησιμοποιούμε μόνο τα καλύτερα προϊόντα από τοπικούς παραγωγούς.", imageSrc: "http://img.b2bpic.net/free-photo/view-raw-vegetables-composition_23-2148643062.jpg" },
        { tag: "Παράδοση", title: "Συνταγές", subtitle: "Οικογενειακές", description: "Αυθεντικές γεύσεις που θυμίζουν το σπίτι και τη μαμά.", imageSrc: "http://img.b2bpic.net/free-photo/shah-pilaf-with-dried-fruits-human-hand-round-plate_176474-2986.jpg" },
        { tag: "Χώρος", title: "Ατμόσφαιρα", subtitle: "Οικογενειακή", description: "Ένας χώρος ιδανικός για κάθε περίσταση και κάθε ηλικία.", imageSrc: "http://img.b2bpic.net/free-photo/look-through-shiny-branches-white-table-with-candles_1304-4758.jpg" },
      ]}
      title="Γιατί να μας επισκεφθείτε"
      description="Η αφοσίωση στην ποιότητα και η αγάπη μας για το καλό φαγητό μας κάνουν να ξεχωρίζουμε."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Χωριάτικη Σαλάτα", price: "8€", imageSrc: "http://img.b2bpic.net/free-photo/salad-with-feta-cheese-olives-fresh-vegetables_181624-23691.jpg" },
        { id: "p2", name: "Ψητό Ψάρι ημέρας", price: "18€", imageSrc: "http://img.b2bpic.net/free-photo/grilled-salmon-with-lemon-sauce-greens_141793-1197.jpg" },
        { id: "p3", name: "Μουσακάς Παραδοσιακός", price: "12€", imageSrc: "http://img.b2bpic.net/free-photo/pottery-pan-with-sauteed-dish-covered-with-melted-cheese_140725-8664.jpg" },
        { id: "p4", name: "Ποικιλία Ορεκτικών", price: "14€", imageSrc: "http://img.b2bpic.net/free-photo/sandwiches-with-mixed-vegetables-black-olives_114579-5980.jpg" },
        { id: "p5", name: "Σουβλάκι Χειροποίητο", price: "13€", imageSrc: "http://img.b2bpic.net/free-photo/cooked-meat-veggies-kebab-tomatoes_23-2148651058.jpg" },
        { id: "p6", name: "Μπακλαβάς", price: "6€", imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-sweet-pastries-with-tea-white-table-sweet-pies-pastry-cake_140725-125337.jpg" },
      ]}
      title="Το Μενού μας"
      description="Επιλέξτε ανάμεσα σε παραδοσιακές ελληνικές συνταγές φτιαγμένες με μεράκι."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Μαρία Γ.", role: "Τακτικός Πελάτης", company: "Καλαμαριά", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-friends-having-laugh-together_23-2148395336.jpg" },
        { id: "t2", name: "Γιώργος Π.", role: "Foodie", company: "Θεσσαλονίκη", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/satisfied-fairskinned-adult-woman-smiles-strongly-with-her-teeth-narrowing-eyes-sunny-day-brunette-wears-casual-clothes_197531-31242.jpg" },
        { id: "t3", name: "Ελένη Σ.", role: "Διατροφολόγος", company: "Καλαμαριά", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-with-long-blonde-hair-holding-delicious-chocolate-muffin-hand_23-2147974685.jpg" },
        { id: "t4", name: "Κώστας Β.", role: "Επαγγελματίας", company: "Καλαμαριά", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-smiling-businessman-showing-thumbs-up-with-funny-faces-drawings-focus-hands-white-modern-office-interior_176420-6491.jpg" },
        { id: "t5", name: "Άννα Τ.", role: "Επισκέπτρια", company: "Αθήνα", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-woman-eating-out-asian-restaurant-looking-asid_197531-22363.jpg" },
      ]}
      title=""
      description="Η γνώμη σας είναι η καλύτερη επιβράβευση για εμάς."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "TripAdvisor", "Google Maps", "Kalamaria Eats", "Local Food Guide", "Taste of Greece", "Restaurant Excellence", "Greek Cuisine Guide"
      ]}
      title="Διακρίσεις & Συνεργασίες"
      description="Είμαστε υπερήφανοι για την αναγνώριση που λαμβάνουμε από τους πελάτες μας."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Χρειάζεται κράτηση;", content: "Σας προτείνουμε πάντα να κάνετε κράτηση, ειδικά τα Σαββατοκύριακα." },
        { id: "f2", title: "Υπάρχει parking;", content: "Υπάρχει άνετος χώρος στάθμευσης στη γύρω περιοχή." },
        { id: "f3", title: "Δέχεστε κατοικίδια;", content: "Ο εξωτερικός μας χώρος είναι φιλικός προς τα κατοικίδια." },
      ]}
      title="Συχνές Ερωτήσεις"
      faqsAnimation="slide-up"
      description="Απαντήσεις στα ερωτήματα που μας κάνετε συχνότερα."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Επικοινωνία"
      title="Κλείστε το τραπέζι σας"
      description="Θεμιστοκλή Σοφούλη 103, Καλαμαριά 551 31. Καλέστε μας στο 2310 400 000."
      buttons={[{ text: "Καλέστε μας", href: "tel:+302310400000" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Εσπεριδες"
      copyrightText="© 2025 Εσπεριδες - Όλα τα δικαιώματα κατοχυρώθηκαν"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

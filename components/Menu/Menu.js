import Link from "next/link";
import Image from "next/image";

const Menu = () => (
     <div id="menu-container">
          <nav className="navbar">
               <div className="logo">
                    <Link href="/">
                         <Image src='/assets/kyo-logo.png' width={120} height={120} alt="Kyotech Logo" />
                    </Link>
               </div>
               <div className="max-width">
                    <ul className="menu">
                         <li><a href="/" className="menu-btn">Home</a></li>
                         <li><a href="/about" className="menu-btn">A Empresa</a></li>
                         <li><a href="/services" className="menu-btn">Serviços</a></li>
                         <li><a href="/products" className="menu-btn">Produtos</a></li>
                         <li><a href="/partners" className="menu-btn">Parceiros</a></li>
                         <li><a href="/news" className="menu-btn">Notícias</a></li>
                         <li><a href="/contact" className="menu-btn">Fale Conosco</a></li>
                    </ul>
                    <div className="menu-btn">
                         <i className="fas fa-bars">Menu</i>
                    </div>
               </div>
        </nav>
     </div>
);

export default Menu;

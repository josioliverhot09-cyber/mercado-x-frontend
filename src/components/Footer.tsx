export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-primary mb-4">Mercado X</h4>
            <p className="text-sm text-muted-foreground">
              A melhor plataforma de e-commerce para smartphones premium.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Samsung</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Xiaomi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Motorola</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Realme</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Mercado X. Todos os direitos reservados. | Pagamento seguro com Pix
          </p>
        </div>
      </div>
    </footer>
  );
}

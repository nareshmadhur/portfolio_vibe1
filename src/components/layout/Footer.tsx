export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Tri-Folio. All rights reserved.</p>
        <p className="text-sm mt-1">Designed with passion.</p>
      </div>
    </footer>
  );
}

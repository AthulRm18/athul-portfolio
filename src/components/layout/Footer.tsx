export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8">
      <p className="text-xs text-dim">© {year} Athul R Mohan</p>
    </footer>
  );
}

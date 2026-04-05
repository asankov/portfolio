interface SideNavProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

const sections = ["Home", "About", "Projects", "Cast AI", "VMware Carbon Black", "Docker / Mirantis", "Paysafe", "Kiwi TCMS", "Public Speaking", "Personal Projects", "Skills", "Contact"];

const SideNav = ({ activeSection, onNavigate }: SideNavProps) => {
  return (
    <nav className="fixed right-6 top-1/2 z-50 -translate-y-1/2 hidden md:flex flex-col items-end gap-4">
      {sections.map((label, i) => (
        <button
          key={label}
          onClick={() => onNavigate(i)}
          className="group flex items-center gap-3"
        >
          <span className={`font-mono text-xs transition-opacity ${activeSection === i ? 'opacity-100 text-primary' : 'opacity-0 group-hover:opacity-100 text-muted-foreground'}`}>
            {label}
          </span>
          <span className={`h-2 w-2 rounded-full transition-all ${activeSection === i ? 'bg-primary scale-125' : 'bg-muted-foreground/30 group-hover:bg-muted-foreground'}`} />
        </button>
      ))}
    </nav>
  );
};

export default SideNav;

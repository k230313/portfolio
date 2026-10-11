import { useLocation, useNavigate } from 'react-router';

export default function GetInTouchButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', '/#contact');
      return;
    }
    navigate('/#contact');
  };

  return (
    <a href="/#contact" onClick={handleClick} className="text-sm text-primary hover:underline">
      Contact me
    </a>
  );
}

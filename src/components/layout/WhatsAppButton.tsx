import { useEffect, useState } from 'react';

export function WhatsAppButton() {
  const [showMessage, setShowMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Show message after 5 seconds
    const showTimer = setTimeout(() => setShowMessage(true), 5000);
    
    // Hide message after 15 seconds
    const hideTimer = setTimeout(() => setShowMessage(false), 15000);
    
    // Show again after 25 seconds
    const showAgainTimer = setTimeout(() => setShowMessage(true), 25000);
    
    // Show alert after 15 seconds
    const alertTimer = setTimeout(() => setShowAlert(true), 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(showAgainTimer);
      clearTimeout(alertTimer);
    };
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5516988037193&text=Vim%20do%20seu%20site!%20Quero%20faturar%20mais%20com%20seus%20serviços%20no%20meu%20negócio"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-10 z-[100] w-[60px] h-[60px] transition-transform hover:scale-110"
        aria-label="Fale conosco no WhatsApp"
      >
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMjYxOSA1MDYgMTIwIDEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI3ZDA0NTsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTUgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlOiAjZmZmOwogICAgICAgIHN0cm9rZS13aWR0aDogNXB4OwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgc3Ryb2tlOiBub25lOwogICAgICB9CiAgICA8L3N0eWxlPjwvZGVmcz48ZyBkYXRhLW5hbWU9Ikdyb3VwIDM2IiBpZD0iR3JvdXBfMzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMDAgNzMpIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjYwIiBjeT0iNjAiIGRhdGEtbmFtZT0iRWxsaXBzZSAxOCIgaWQ9IkVsbGlwc2VfMTgiIHI9IjYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTkgNDMzKSIvPjxnIGRhdGEtbmFtZT0iR3JvdXAgMzUiIGlkPSJHcm91cF8zNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjU0IDM4NikiPjxnIGRhdGEtbmFtZT0iR3JvdXAgMzQiIGlkPSJHcm91cF8zNCI+PGcgY2xhc3M9ImNscy0yIiBkYXRhLW5hbWU9IkVsbGlwc2UgMTkiIGlkPSJFbGxpcHNlXzE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NCA3NSkiPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iMzEuNSIgY3k9IjMxLjUiIHI9IjMxLjUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNSIgY3g9IjMxLjUiIGN5PSIzMS41IiByPSIyOSIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNDI0LDE5MWwtNC42LDE2LjMsMTYuOS00LjcuOS01LjItMTEsMy41LDIuOS0xMC41WiIgZGF0YS1uYW1lPSJQYXRoIDEyNiIgaWQ9IlBhdGhfMTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMyNSAtNjgpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTI2Niw5MGMwLS4xLDMuNS0xMS43LDMuNS0xMS43bDguNCw3LjlaIiBkYXRhLW5hbWU9IlBhdGggMTI3IiBpZD0iUGF0aF8xMjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY1IDQzKSIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNDM5LjMsMTYwLjZhOS40LDkuNCwwLDAsMC0zLjksNi4xYy0uNSwzLjksMS45LDcuOSwxLjksNy45YTUwLjg3Niw1MC44NzYsMCwwLDAsOC42LDkuOCwzMC4xODEsMzAuMTgxLDAsMCwwLDkuNiw1LjEsMTEuMzc4LDExLjM3OCwwLDAsMCw2LjQuNiw5LjE2Nyw5LjE2NywwLDAsMCw0LjgtMy4yLDkuODUxLDkuODUxLDAsMCwwLC42LTIuMiw1Ljg2OCw1Ljg2OCwwLDAsMCwwLTJjLS4xLS43LTcuMy00LTgtMy44cy0xLjMsMS41LTIuMSwyLjYtMS4xLDEuNi0xLjksMS42LTQuMy0xLjQtNy42LTQuNGExNS44NzUsMTUuODc1LDAsMCwxLTQuMy02cy42LS43LDEuNC0xLjhhNS42NjQsNS42NjQsMCwwLDAsMS4zLTIuNGMwLS41LTIuOC03LjYtMy41LTcuOUExMS44NTIsMTEuODUyLDAsMCwwLDE0MzkuMywxNjAuNloiIGRhdGEtbmFtZT0iUGF0aCAxMjgiIGlkPSJQYXRoXzEyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMjYuMzMyIC02OC40NjcpIi8+PC9nPjwvZz48L3N2Zz4="
          alt="WhatsApp"
          width={60}
          height={60}
        />
      </a>

      {/* Alert Badge */}
      {showAlert && (
        <span className="fixed right-7 bottom-[90px] z-[101] w-[17px] h-[17px] bg-destructive text-primary-foreground text-[11px] text-center rounded-full font-bold leading-[17px]">
          1
        </span>
      )}

      {/* Message Bubble */}
      {showMessage && (
        <div 
          onClick={() => setShowMessage(false)}
          className="fixed right-[90px] bottom-[52px] z-[100] bg-foreground text-background px-4 py-2 rounded-full text-sm cursor-pointer border border-border shadow-lg"
        >
          Fale conosco no WhatsApp
        </div>
      )}
    </>
  );
}

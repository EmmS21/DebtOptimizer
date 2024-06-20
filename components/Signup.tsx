"use client"
import { useEffect } from 'react';

const SignupButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        data-fillout-id="4NZDmy9aZUus"
        data-fillout-embed-type="popup"
        data-fillout-button-text="Signup for early access"
        data-fillout-dynamic-resize
        data-fillout-inherit-parameters
        data-fillout-popup-size="medium"
      />
    </div>
  );
};

export default SignupButton;

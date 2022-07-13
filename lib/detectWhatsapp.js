const detectWhatsapp = (phone, text) => {
  const uri = `whatsapp://send/?phone=${encodeURIComponent(
    phone
  )}&text=${encodeURIComponent(text)}`;

  const onIE = () => {
    return new Promise((resolve) => {
      window.navigator.msLaunchUri(
        uri,
        () => resolve(true),
        () => resolve(false)
      );
    });
  };

  const notOnIE = () => {
    return new Promise((resolve) => {
      const a =
        document.getElementById("wapp-launcher") || document.createElement("a");
      a.id = "wapp-launcher";
      a.href = uri;
      a.style.display = "none";
      document.body.appendChild(a);

      const start = Date.now();
      const timeoutToken = setTimeout(() => {
        if (Date.now() - start > 1250) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);

      const handleBlur = () => {
        clearTimeout(timeoutToken);
        resolve(true);
      };
      window.addEventListener("blur", handleBlur);

      a.click();
    });
  };

  return window.navigator.msLaunchUri ? onIE() : notOnIE();
};
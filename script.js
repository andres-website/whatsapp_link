var whatsapp_number = telefon;
var isDesktop = false;
var isInstalledWhatsapp = false;


// Определяет, что это Десктоп или Мобила
function myWhatsappFunction() {
	
	var md = new MobileDetect(window.navigator.userAgent);
	
	if ( md.mobile() ) {
	  
		document.getElementById("whatsapp-btn").href = "whatsapp://send?phone=" + whatsapp_number;
		isDesktop = false;
	
	} else {
	  
		document.getElementById("whatsapp-btn").href = "https://web.whatsapp.com/send/?phone=" + whatsapp_number;        
		isDesktop = true;
	}
	
};

myWhatsappFunction();


// Если десктоп - проверяем наличие установленного воца
if (isDesktop) {
	
	detectWhatsapp(telefon, '').then(hasWhatsapp =>
	  console.log (
	     'You ' + 
	        (hasWhatsapp ? 'have WhatsApp' + handleInstalledWhatsapp ()  : "don't have WhatsApp" + handleNotInstalledWhatsapp() )
	  )
	  
	)

// Если мобила - открываем приложение по схеме: whatsapp://send?phone=
} else {
	
	location.href = `whatsapp://send?phone=${telefon}`;
	document.querySelector('body').classList.add('state__device-mobile')
}



// Воц установлен - покажем кнопку - открыть в программе
function handleInstalledWhatsapp () {
	
	console.log ('Воц установлен - покажем кнопку - открыть в программе');
	document.querySelector ('.js_btn_name_wa-app').style.display = 'inline-block'
	isInstalledWhatsapp = true;
}

// Воц не установлен - автоматом кинем в веб версию
function handleNotInstalledWhatsapp () {
	
	console.log ('Воц не установлен - автоматом кинем в веб версию');
	location.href = `https://web.whatsapp.com/send/?phone=${telefon}`;
	isInstalledWhatsapp = false;
}
function create_link_for_btn_app (phone, text = '') {
	
	var result = `whatsapp://send?phone=${phone}`
	
	if (text) {
		
		result += `&text=${text}`
	}
	
	return result
} 

function create_link_for_btn_web (phone, text = '') {
	
	var result = `https://web.whatsapp.com/send/?phone=${phone}`
	
	if (text) {
		
		result += `&text=${text}`
	}
	
	return result
}


// Определяет, что это Десктоп или Мобила
function myWhatsappFunction() {
	
	var md = new MobileDetect(window.navigator.userAgent);
	
	if ( md.mobile() ) {
	  
		isDesktop = false;
	
	} else {
	        
		isDesktop = true;
	}
	
};


// Воц установлен - покажем кнопку - открыть в программе
function handleInstalledWhatsapp () {
	
	console.log ('Воц установлен - покажем кнопку - открыть в программе');
	document.querySelector ('.js_btn_name_wa-app').style.display = 'inline-block'
	isInstalledWhatsapp = true;
}

// Воц не установлен - автоматом кинем в веб версию
function handleNotInstalledWhatsapp () {
	
	console.log ('Воц не установлен - автоматом кинем в веб версию');
	location.href = `https://web.whatsapp.com/send/?phone=${phone}`;
	isInstalledWhatsapp = false;
}


// main.js

// Получение GET
var search = window.location.search.substr(1),
	get_props = {};
      
search.split('&').forEach(function(item) {
	item = item.split('=');
	get_props[item[0]] = item[1];
});
      
// console.log(get_props);


var phone = get_props.phone
var text = ''
var nick_name = ''
var avatar = ''

if ('text' in get_props && get_props.text) {
	
	text = get_props.text
}

if ('name' in get_props && get_props.name) {
	
	nick_name = get_props.name
}

if ('avatar' in get_props && get_props.avatar) {
	
	avatar = get_props.avatar
}

var link_for_btn_web = create_link_for_btn_web(phone, text)
var link_for_btn_app = create_link_for_btn_app(phone, text)

document.querySelector('.js_btn_name_wa-web').href = link_for_btn_web
document.querySelector('.js_btn_name_wa-app').href = link_for_btn_app


if (nick_name) {
	
	document.querySelector('.js_i_h1_name_name').style.display = 'block'
	document.querySelector('.js_i_h1_name_name').textContent = decodeURI(nick_name)
}


if (avatar) {
	
	document.querySelector('.js_avatar__img').src = avatar
}


var isDesktop = false;
var isInstalledWhatsapp = false;


myWhatsappFunction();


// Если десктоп - проверяем наличие установленного воца
if (isDesktop) {
	
	detectWhatsapp(phone, '').then(hasWhatsapp =>
	  console.log (
	     'You ' + 
	        (hasWhatsapp ? 'have WhatsApp' + handleInstalledWhatsapp ()  : "don't have WhatsApp" + handleNotInstalledWhatsapp() )
	  )
	  
	)

// Если мобила - открываем приложение по схеме: whatsapp://send?phone=
} else {
	
	location.href = `whatsapp://send?phone=${phone}`;
	document.querySelector('body').classList.add('state__device-mobile')
}
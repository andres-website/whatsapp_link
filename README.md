## WhatsApp link
Страница для открытия WhatApp по номеру, в зависимости от устройства и наличия установленной Desktop программы.

### Demo
https://andres-website.github.io/whatsapp_link?phone=79139150817

## Стратегия (поведение)

**На десктопе**:
  
* Если десктопной программы WhatApp нет: просто перекидывает на WhatsApp Web.

* Если десктопная программа установленна: сначала предлагает открыть в ней (нативный popup браузера).<br>
  Если нажимает Открыть - открывается программа, <br>
  если Отмена - остаётся 2 кнопки: Открыть в WhatsApp Web и Открыть в приложении.

**На мобильном**: просто открывает приложение WhatApp. (здесь есть доп. [Рекомендации](#Рекомендации) как убрать лишний экран на мобильных? - см. ниже)


## Зачем?
После блокировки Facebook - страница WhatApp для перехода в WhatApp Web или открытия десктопной программы - не работает (пример: https://api.whatsapp.com/send?phone=79139150817).

Данный проект заменяет её (в большей степени копирует).

Вы можете развернуть её на своём сервере, это JS онли реализация: закидывайте файлики к себе на сервер, например в /public_html/wathapp_link/ и всё заработает.

Рекомендую сразу запретить адрес по которому будет доступна данная страница - для индекскации поисковыми ботами в robots.txt.

** Update 02.08.2022: [вышеупомянутая](https://api.whatsapp.com/send?phone=79139150817) ссылка заработала! И кажется данное решение не нужно. По мойму, всё таки нужно.

Стратегия которую предлагает Воцап предпологает:

* Если у вас установленна программа Воцап - не даст ссылку для перехода в Web версию - если есть десктоп воцап, нечего через вацап веб сидеть. (а что если у вас жена на вашем ПК пользуется дестктоп версией воца, а вы Веб версией? Как вам тогда от своего имени написать?)

У данного решения, на мой взгляд, более логичная стратегия.

P.S: И ещё данное решение, не призывает "Скачать".

## Параметры

Принимает один обязательный GET-параметр:

* phone - номер телефона в том же формате, в котором указывается для обычного WhatsApp. Пример: ?phone=79139150817

Необязательные GET-параметры:

* text - текст, который будет подставлен в инпут ввода сообщения (нативная фича)

* name - имя, которое будет отображаться на странице. Пример: КиТ системы. (при отсутствии параметра: просто не показывает имя)

* avatar - адрес до аватара относительно корневой дирректории. Пример: ./assets/my-avatar.png. Рекомендуемый размер: 165x165 или готовый для x3 ретины: 495x495. (при отсутствии параметра: показывает стандартный аватар, лежащий в папке ./assets/default-avatar.png)

* btn_back - добавляет кнопку Вернуться на сайт


## Demo с не обязательными параметрами

text: https://andres-website.github.io/whatsapp_link?phone=79139150817&text=hello%20Boy

name: https://andres-website.github.io/whatsapp_link?phone=79139150817&name=КиТ%20системы

avatar: https://andres-website.github.io/whatsapp_link?phone=79139150817&avatar=./assets/custom-avatar.png

btn_back: https://andres-website.github.io/whatsapp_link?phone=79139150817&btn_back=1

**Можно комбинировать:**

https://andres-website.github.io/whatsapp_link?phone=79139150817&text=hello%20Boy&name=КиТ%20системы&avatar=./assets/custom-avatar.png&btn_back=1

# Рекомендации

**Или как убрать лишний экран на мобильных?**

Данное решение созданно для Десктопных пользователей.

https://api.whatsapp.com/send?phone=79139150817 - нормльно работает в мобильных - просто и привычно, открывая приложение.

Поэтому по умолчанию ставьте обычную ссылку на воц: https://api.whatsapp.com/send?phone=79139150817. 

Но если вы уверенны, что пользователь сидит с ПК. Самый простой путь определить это: по ширине экрана - всё, что больше 767px -> десктопы 

(document.documentElement.clientWidth > 767) 

тогда заменяейте JavaScript'ом href="https://api.whatsapp.com/send?phone=79139150817" на свою ссылку: https://andres-website.github.io/whatsapp_link?phone=79139150817 (например) и добавьте ей атрибут target="_blank". И будет счастье.

PS: данный скрипт нормально отправит и мобильных пользователей в приложение воца, однако, сначала он перейдёт на вашу страницу "whatsapp_link", "закрывая" ту страницу с которой он перешёл. То есть, будет уже не так просто с приложения Воца вернуться на ваш сайт (будет, этот самый, лишний экран), как это было бы просто, если бы мобильное приложение открылось сразу - без прослоек.  

## Спасибо

[Решение](https://github.com/justrussian/whatsapp-link/), которое я взял за основу — напсал и (!) выложил на GitHub — [Daniil Tarassenko](https://github.com/justrussian).

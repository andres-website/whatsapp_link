# WhatsApp link
Страница для открытия WhatApp по номеру, в зависимости от устройства и установленной программы.

# Demo
https://andres-website.github.io/whatsapp_link

# Стратегия (поведение)
**На мобильном**: просто открывает приложение WhatApp.

**На десктопе**:

* Если десктопная программа WhatApp установленна: сначала предлагает открыть в ней (нативный popup браузера), если нажимает Открыть - открывается, если Отмена - остаётся 2 кнопки:
  1. Открыть через WhatsApp Web.
  2. Открыть в приложении.
* Если десктопной программы нет: просто перекидывает на WhatsApp Web.

# Зачем?
После блокировки Facebook - страница WhatApp для перехода в WhatApp Web или открытия десктопной программы - не работает (пример: https://api.whatsapp.com/send?phone=79139150817).
Данный проект заменяет её (в большей степене копирует).
Вы можете развернуть её на своём сервере, на данный момент используется PHP для подстановки телефона, имя и аватарки из GET-параметров (в планах сделать JS онли реализацию, что бы было проще разворачивать: закинул .html и работает).

# Параметры
Принимает один обязательный GET-параметр:
* telefon - номер телефона в том же формате, в котором указывается для обычного WhatsApp. Пример: ?telefon=79139150817

Необязательные GET-параметры:
* name - имя, которое будет отображаться на странице. Пример: КиТ системы. (при отсутствии параметра: просто не показывает никакое имя)
* avatar - адрес до аватара относительно корневой дирректории. Пример: /assets/my-avatar.png. Рекомендуемый размер: 165x165 или готовый для x3 ретины: 495x495. (при отсутствии параметра: показывает стандартный аватар, лежащий в папке /assets/default-avatar.png)

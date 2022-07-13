<?

$telefon = $_GET['telefon']; // Require
$name = $_GET['name'];
$avatar = $_GET['avatar'];

$dir = './';


if (!$name) {
	
	$name = '';
}

if (!$avatar) {
	
	$avatar = '/assets/default-avatar.png';
}

?>

<html lang="ru"><head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="Description" content="Ссылка на WhatsApp">
    
    <link rel="shortcut icon" href="<?= $dir ?>/assets/favicon.png" type="image/x-icon">
    

    <meta property="og:title" content="[ WhatsApp ссылка создана через wapp.click ]">
    <meta property="og:description" content="Ссылка на WhatsApp">
    <meta property="og:type" content="WhatsApp link">
<!--    <meta property="og:url" content="https://wapp.click" />-->
    <meta property="og:image" content="https://wapp.click/img/cover-green.jpg">

    <link rel="image_src" href="<?= $dir ?>/assets/cover-green.jpg">


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    
    <title>Переадресация WhatsApp</title>


	<link rel="stylesheet" href="<?= $dir ?>/css/root_style.css">
	<link rel="stylesheet" href="<?= $dir ?>/css/style.css?">
	<link rel="stylesheet" href="<?= $dir ?>/css/style_767.css?">

	<script src="//yandex.st/jquery/1.9.1/jquery.min.js"></script>
	<!--<script src="//yandex.st/jquery/cookie/1.0/jquery.cookie.min.js"></script>-->
	
	
	<script src="<?= $dir ?>/lib/mobile-detect.min.js"></script>
	<script src="<?= $dir ?>/lib/detectWhatsapp.js"></script>
	
	<div style="display:none;">
		
		<a id="whatsapp-btn" class="" target="_blank">Открыть в Whatsapp&nbsp;Web</a>
	</div>


	<script>
		
		var telefon = "<?= $telefon ?>";
		
	</script>

</head>

<body class="text-center d-flex flex-column">


    <div class="container d-flex justify-content-center align-items-center flex-grow-1 flex-column">
        <div id="open-link" class="flex-column d-flex col justify-content-center align-items-center">

<!--            <div class="row">
                <div class="col">
                    <h1 class="title">Переадресация WhatsApp</h1><br>
                    <div id="timer" class="descript"></div><br>
                </div>
            </div>-->

            <div class="row justify-content-center w-100">
                <div class="col-md-5">

                	
                	<div class="i_h1">WhatsApp</div>
                	
                	<div class="avatar__box">
                		
	                	<img
	                		class="avatar__img"
	                		src="<?= $dir ?><?= $avatar ?>" alt="">
                	</div>
                	
                	<? if ($name): ?>
                		<div class="i_h1"><?= $name ?></div>
	                <? endif ?>
	                
	                <a href="https://web.whatsapp.com/send/?phone=<?= $telefon ?>" id="link" class="btn_name_wa-web btn btn-lg btn-primary btn-block">Открыть через WhatsApp&nbsp;Web</a>
	                <a href="whatsapp://send?phone=<?= $telefon ?>" style0="display:none;" id="linkweb" class="js_btn_name_wa-app btn_name_wa-app btn btn-lg btn-primary btn-block">Открыть в приложении</a>
                </div>
            </div>
        </div>
    </div>


	<script src="<?= $dir ?>/script.js?"></script>


</body></html>
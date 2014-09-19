<div class="sosyal">
[Tweet](https://twitter.com/share)
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fmtutuncu.com%2Flab%2Ffw%2F&send=false&layout=button_count&width=500&show_faces=true&font&colorscheme=light&action=like&height=21" frameborder="0"></iframe>
</div>
<div id="wrapper">
		<div id="header">
			<center>![](logo.png)</center>
			[fwRead.js - Tam ekran yazı oku](index.html) / [İndir](indir.html) / [Örnek](ex.html)
		</div>
		<div id="subject">

# Nedir ? 

Sitelere eklenecek buton ile yazıları tam ekran,dikkat dağılmadan,açık seçik okumak için geliştirilmiş ufak bir jQuery eklentisidir.

# Blogumdaki konu

			[fwRead.js](http://mtutuncu.com/fwread-js-jquery-eklentisi/)

# Nasıl kullanılır ?  

fwRead.js dosyasını sayfanıza dahil ettikten(jQuery kütüphanesinide dahil etmeniz gerekiyor) sonra eklentiyi kullanabilmeniz için bir kaç parametre girmeniz gerekiyor.

			<textarea id="ornekler">$("body").fwRead();</textarea>

# Zorunlu Parametreler

			**Parametre** : fwReadButton , tıklandığında yazının tam ekran olmasını istediğiniz 'a' nesnesinin id veya class'ı (nesne 'a' olmak zorundadır.);
			<textarea id="ornekler">$("body").fwRead('fwReadButton','.oku');</textarea>
			**Parametre** : contentObj , butona tıklandığında tam ekran olacak nesnenin id veya class'ı;
			<textarea id="ornekler">$("body").fwRead('contentObj','#icerik');</textarea>
			**Parametre** : contentP , contentObj içindeki yazıyı kapsayan nesne bkz(p,li,span) ;
			<textarea id="ornekler">$("body").fwRead('contentP','p');</textarea>

Zorunlu parametrelerin girilmiş hali

			<textarea id="ornekler">$("body").fwRead({'fwReadButton':'.oku','contentObj':'#icerik','contentP':'p'});</textarea>

# Diğer parametreler

			**Parametre **: fontSize , yazının tam ekran olduğu durumdaki font boyutu.Bu parametreyi kullanmazsanız yazının default boyutu kullanılır. 
			<textarea id="ornekler">$("body").fwRead('fontSize','19');</textarea>
			**Parametre **: lineHeight , yazının tam ekran olduğu durumdaki satır yüksekliği.Bu parametreyi kullanmazsanız yazının default satır yüksekliği kullanılır. 
			<textarea id="ornekler">$("body").fwRead('lineHeight','23');</textarea>
			**Parametre **: textColor , yazının tam ekran olduğu durumdaki rengi.Bu parametreyi kullanmazsanız default olarak beyaz kullanılır. 
			<textarea id="ornekler">$("body").fwRead('textColor','#fff');</textarea>
			**Parametre **: backColor , yazının tam ekran olduğu durumdaki arkaplan rengi.Bu parametreyi kullanmazsanız default olarak siyah kullanılır. 
			<textarea id="ornekler">$("body").fwRead('backColor','#000');</textarea>
			**Parametre **: pWidth , yazının tam ekran olduğu durumdaki yazı nesnesinin genişliği.Bu parametreyi kullanmazsanız default 900px kullanılır. 
			<textarea id="ornekler">$("body").fwRead('pWidth','920');</textarea>
			**Parametre **: effect , butona tıkladığınızda tam ekran olarak gelecek sayfanın geliş efekti.Alabileceği değerler : fadeIn,show.Boş bırakılırsa efektsiz olarak açılır.
			<textarea id="ornekler">$("body").fwRead('effect','fadeIn');</textarea>
			**Parametre **: effectSpeed , butona tıkladığınızda tam ekran olarak gelecek sayfanın geliş efektinin hızı.MS olarak girilen her rakam kabul edilir.Aşağıdaki örnekte 500MS yani yarım saniyede açılmasını söyledik.
			<textarea id="ornekler">$("body").fwRead('effectSpeed','500');</textarea>
		</div>
		<div id="footer">
		[Mücahit Tütüncü](http://twitter.com/mucahittutuncu)
		</div>
	</div>

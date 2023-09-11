/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'su_font\'">' + entity + '</span>' + html;
	}
	var icons = {
		'su_icon-shop-house3': '&#xe900;',
		'su_icon-search2': '&#xe901;',
		'su_icon-folder-open': '&#xe902;',
		'su_icon-catalog3': '&#xe903;',
		'su_icon-shopping-list': '&#xe904;',
		'su_icon-1': '&#xe905;',
		'su_icon-12': '&#xe906;',
		'su_icon-13': '&#xe907;',
		'su_icon-16': '&#xe908;',
		'su_icon-19': '&#xe909;',
		'su_icon-22': '&#xe90a;',
		'su_icon-25': '&#xe90b;',
		'su_icon-30': '&#xe90c;',
		'su_icon-32': '&#xe90d;',
		'su_icon-33': '&#xe90e;',
		'su_icon-35': '&#xe90f;',
		'su_icon-43': '&#xe910;',
		'su_icon-49': '&#xe911;',
		'su_icon-4808': '&#xe912;',
		'su_icon-4809': '&#xe913;',
		'su_icon-4811': '&#xe914;',
		'su_icon-4812': '&#xe915;',
		'su_icon-4813': '&#xe916;',
		'su_icon-4814': '&#xe917;',
		'su_icon-4815': '&#xe918;',
		'su_icon-A': '&#xe919;',
		'su_icon-A1': '&#xe91a;',
		'su_icon-A2': '&#xe91b;',
		'su_icon-add-new': '&#xe91c;',
		'su_icon-admin': '&#xe91d;',
		'su_icon-admin2': '&#xe91e;',
		'su_icon-admin3': '&#xe91f;',
		'su_icon-arrow-text': '&#xe920;',
		'su_icon-B': '&#xe921;',
		'su_icon-B1': '&#xe922;',
		'su_icon-B2': '&#xe923;',
		'su_icon-bolshe-ravno2': '&#xe924;',
		'su_icon-burger_menu': '&#xe925;',
		'su_icon-burger_menu1': '&#xe926;',
		'su_icon-burger_menu2': '&#xe927;',
		'su_icon-C': '&#xe928;',
		'su_icon-C1': '&#xe929;',
		'su_icon-C2': '&#xe92a;',
		'su_icon-cart_main': '&#xe92b;',
		'su_icon-cart_main2': '&#xe92c;',
		'su_icon-catalog': '&#xe92d;',
		'su_icon-catalog2': '&#xe92e;',
		'su_icon-close': '&#xe92f;',
		'su_icon-close2': '&#xe930;',
		'su_icon-close-burger_menu': '&#xe931;',
		'su_icon-color_1': '&#xe932;',
		'su_icon-comments': '&#xe935;',
		'su_icon-copy': '&#xe936;',
		'su_icon-D': '&#xe937;',
		'su_icon-D1': '&#xe938;',
		'su_icon-D2': '&#xe939;',
		'su_icon-delete': '&#xe93a;',
		'su_icon-delivery': '&#xe93b;',
		'su_icon-delivery-4-hours': '&#xe93c;',
		'su_icon-delivery-all-day': '&#xe93d;',
		'su_icon-delivery-express': '&#xe93e;',
		'su_icon-delivery-in-time': '&#xe93f;',
		'su_icon-exit': '&#xe940;',
		'su_icon-H': '&#xe941;',
		'su_icon-H1': '&#xe942;',
		'su_icon-H2': '&#xe943;',
		'su_icon-home3': '&#xe944;',
		'su_icon-home': '&#xe945;',
		'su_icon-home2': '&#xe946;',
		'su_icon-home-fundament': '&#xe947;',
		'su_icon-home-roof': '&#xe948;',
		'su_icon-info': '&#xe949;',
		'su_icon-in-stock': '&#xe94a;',
		'su_icon-L': '&#xe94b;',
		'su_icon-L1': '&#xe94c;',
		'su_icon-L2': '&#xe94d;',
		'su_icon-L3': '&#xe94e;',
		'su_icon-likvidacia-icon': '&#xe94f;',
		'su_icon-location': '&#xe950;',
		'su_icon-logo_2017': '&#xe951;',
		'su_icon-logo_2017_smal': '&#xe952;',
		'su_icon-logo2023': '&#xe953;',
		'su_icon-menshe-ravno2': '&#xe954;',
		'su_icon-partners': '&#xe955;',
		'su_icon-pay-driver': '&#xe956;',
		'su_icon-pay-driver-card': '&#xe95c;',
		'su_icon-pay-driver-card2': '&#xe95d;',
		'su_icon-pay-driver-card3': '&#xe965;',
		'su_icon-pay-driver-card4': '&#xe966;',
		'su_icon-pay-driver-card5': '&#xe989;',
		'su_icon-pay-driver-cash': '&#xe996;',
		'su_icon-pay-driver-cash2': '&#xe997;',
		'su_icon-pay-in-site': '&#xe9a4;',
		'su_icon-pay-magazine': '&#xe9a5;',
		'su_icon-pay-magazine2': '&#xe9a6;',
		'su_icon-pay-SBP': '&#xe9a7;',
		'su_icon-pay-SBP2': '&#xe9a8;',
		'su_icon-plity-derevo': '&#xe9a9;',
		'su_icon-questions': '&#xe9aa;',
		'su_icon-rub': '&#xe9ac;',
		'su_icon-S': '&#xe9ad;',
		'su_icon-S_m2': '&#xe9ae;',
		'su_icon-S1': '&#xe9af;',
		'su_icon-S2': '&#xe9b0;',
		'su_icon-sale': '&#xe9b1;',
		'su_icon-search': '&#xe9b2;',
		'su_icon-settings': '&#xe9b3;',
		'su_icon-shop-house': '&#xe9b4;',
		'su_icon-shop-house2': '&#xe9b5;',
		'su_icon-shop-house2-01': '&#xe9b6;',
		'su_icon-sravnenie': '&#xe9b7;',
		'su_icon-sravnenie21': '&#xe9b8;',
		'su_icon-sravnenie2': '&#xe9b9;',
		'su_icon-sravnenie3-01': '&#xe9ba;',
		'su_icon-sravnenie3-01-01': '&#xe9bb;',
		'su_icon-sravnenie3-01-02-01': '&#xe9bc;',
		'su_icon-ucenca-icon': '&#xe9bd;',
		'su_icon-vacansii': '&#xe9be;',
		'su_icon-wall': '&#xe9bf;',
		'su_icon-wall-icon-01': '&#xe9c0;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/su_icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

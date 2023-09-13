// Keyboard https://codepen.io/Jku/pen/bwdZzJ

var kb;
var content = false;
var content_height = 0;
jQuery(document).ready(function() {
  kb = jQuery('.search').keyboard({
    language: 'en',
    startAs: 'hidden',
    debug: 'false'
  });

});

// Keyboard JS

;
(function($) {
  var defaults = {

    //LAYOUT
    startAs: 'visible', // 'hidden', 'visible'
    useImage: true, // true, false
    skin: 'default', // 'default', 'blue', 'green', 'red', 'yellow', 'black'
    language: 'ru', //'en','ru','cz','fr','de','gr','hu','is','it','pl','pt','es','tr','gb','cn','jp'

    //DEV
    debug: false, // true, false

  };

  $.fn.keyboard = function(options) {

    if (this.length == 0) return this;

    /**
     * ===================================================================================
     *  VARIABLES
     * ===================================================================================
     */

    // create a namespace to be used throughout the plugin
    var _keyboard = {};

    // set a reference to our keyboard element
    var kb = this;

    var ctrlk = false;
    var shiftk = false;
    var capslockk = false;
    var specialchar = false;
    var capital = false;
    var symbolkeydown = false;
    var mathkeydown = false;
    var currentskin = 'default';
    var skins = ['blue', 'green', 'red', 'yellow', 'black', 'default'];
    var languages = {
      'ru': ['RU', 'Russian'],
      'en': ['EN', 'English'],
      /*'fr': ['FR', 'French'],
      'de': ['DE', 'German'],
      'it': ['IT', 'Italian'],
      'es': ['ES', 'Spanish'],
      'gr': ['GR', 'Greek'],
      'tr': ['TR', 'Turkish'],
      'hu': ['HU', 'Hungarian'],
      'is': ['IS', 'Icelandic'],
      'cz': ['CZ', 'Czech'],
      'pl': ['PL', 'Polish'],
      'pt': ['PT', 'Portuguese'],
      'kr': ['KR', 'Korean'],
      'jp': ['JP', 'Japanese']*/
    };
    var currentlng = 'en';
    var langbutton = false;

    var keys = ['~<>`<>126', '!<>1<>49', '@<>2<>52', '#<>3<>51', '$<>4<>52', '%<>5<>53', '^<>6<>54', '&<>7<>55', '*<>8<>56', '(<>9<>57', ')<>0<>48', '_<>-<>45', '+<>=<>43', 'func<>Backspace<>08', 'br',
      'Q<>q<>81', 'W<>w<>87', 'E<>e<>69', 'R<>r<>82', 'T<>t<>84', 'Y<>y<>89', 'U<>u<>85', 'I<>i<>73', 'O<>o<>79', 'P<>p<>80', '{<>[<>91', '}<>]<>93', '|<>\\<>92', 'func<>Enter<>01', 'br',
      'func<>CapsLock<>00', 'A<>a<>65', 'S<>s<>83', 'D<>d<>68', 'F<>f<>70', 'G<>g<>71', 'H<>h<>72', 'J<>j<>74', 'K<>k<>75', 'L<>l<>76', ':<>;<>59', '"<>\'<>92', 'br',
      'func<>Shift<>14', 'Z<>z<>90', 'X<>x<>88', 'C<>c<>67', 'V<>v<>86', 'B<>b<>66', 'N<>n<>78', 'M<>m<>77', '<<>,<>44', '><>.<>46', '?<>/<>47', 'br',
      'func<> <>32'
    ];
/*
    var keys_symbols = ['`<>&#161;', '!<>&#162;', '@<>&#8240;', '#<>&#164;', '$<>&#247;', '%<>&#166;', '^<>&#167;', '&<>&#168;', '*<>&#169;', '(<>&#176;', ')<>&#171;', '_<>&#187;', '+<>&#172;',
      '{<>&#175;', '}<>&#177;', '[<>&#170;', ']<>&#186;', '\<>&#185;', '|<>&#178;', 'Ξ<>&#179;', ';<>&#180;', ':<>&#181;', '\'<>&#182;', '"<>&#184;', '<<>&#183;', '><>&#188;',
      ',<>&#189;', '.<>&#190;', '/<>&#191;', '?<>&#215;', '<>&#216;', '<>&#8212;', '<>&#8216;', '<>&#8217;', '<>&#8218;', '<>&#8220;',
      '<>&#8221;', '<>&#8222;', '<>&#8224;', '<>&#8225;', '<>&#8226;', '<>&#174;', '<>&#8230;', '<>&#163;', '<>&#8364;', '<>&#165;', '<>&#8482;'
    ];

    var keys_math = ['<>,', '<>0', '<>7', '<>8', '<>9', '<>/', '<>*', '<>-', '<>+', '<>.', '~<>β ', '<>Β°', '<>β°',
      '<>4', '<>5', '<>6', '<>Ξ', 'Ξ<>Ξ', 'Ξ<>Ξ¦', 'Ξ¨<>Ξ©', '<>β', '<>β', '<>β', '<>β«', '<>β�', '<>β',
      '<>1', '<>2', '<>3', '<>Β¬', '<>β', 'Β·<>β', '<>β', '<>β', '<>β', '<>β', '<>β',
      'β<>β', 'β©<>βͺ', 'β<>β ', 'β‘<>β', 'β<>Β±', 'Γ·<>Γ', 'Β²<>Β³', 'β§<>β¨', 'βͺ<>β«', 'β€<>β₯',
    ];
*/
    var lng_keys = {
      'ru': ['Π<>Ρ<><>', '!<>1<><>', '"<>2<><>', 'β<>3<><>', ';<>4<><>', '%<>5<><>', ':<>6<><>', '?<>7<><>', '*<>8<><>', '(<>9<><>', ')<>0<><>', '_<>-<><>', '+<>=<><>', 'Π<>ΠΉ<><>', 'Π¦<>Ρ<><>', 'Π£<>Ρ<><>', 'Π<>ΠΊ<><>', 'Π<>Π΅<><>', 'Π<>Π½<><>', 'Π<>Π³<><>', 'Π¨<>Ρ<><>', 'Π©<>Ρ<><>', 'Π<>Π·<><>', 'Π₯<>Ρ<><>', 'Πͺ<>Ρ<><>', '/<>\<><>', 'Π€<>Ρ<><>', 'Π«<>Ρ<><>', 'Π<>Π²<><>', 'Π<>Π°<><>', 'Π<>ΠΏ<><>', 'Π <>Ρ<><>', 'Π<>ΠΎ<><>', 'Π<>Π»<><>', 'Π<>Π΄<><>', 'Π<>ΠΆ<><>', 'Π<>Ρ<><>', 'Π―<>Ρ<><>', 'Π§<>Ρ<><>', 'Π‘<>Ρ<><>', 'Π<>ΠΌ<><>', 'Π<>ΠΈ<><>', 'Π’<>Ρ<><>', 'Π¬<>Ρ<><>', 'Π<>Π±<><>', 'Π�<>Ρ<><>', ',<>.<><>'],
      'en': ['~<>`<><>', '!<>1<><>', '@<>2<><>', '#<>3<><>', '$<>4<><>', '%<>5<><>', '^<>6<><>', '&<>7<><>', '*<>8<><>', '(<>9<><>', ')<>0<><>', '_<>-<><>', '+<>=<><>', 'Q<>q<><>', 'W<>w<><>', 'E<>e<><>', 'R<>r<><>', 'T<>t<><>', 'Y<>y<><>', 'U<>u<><>', 'I<>i<><>', 'O<>o<><>', 'P<>p<><>', '{<>[<><>', '}<>]<><>', '|<>\\<><>', 'A<>a<><>', 'S<>s<><>', 'D<>d<><>', 'F<>f<><>', 'G<>g<><>', 'H<>h<><>', 'J<>j<><>', 'K<>k<><>', 'L<>l<><>', ':<>;<><>', '"<>\'<><>', 'Z<>z<><>', 'X<>x<><>', 'C<>c<><>', 'V<>v<><>', 'B<>b<><>', 'N<>n<><>', 'M<>m<><>', '<<>,<><>', '><>.<><>', '?<>/<><>'],
      /*'cz': ['`<>;<><>', '!<>+<><>', '@<>Δ<><>', '#<>Ε‘<><>', '$<>Δ<><>', '%<>Ε<><>', '^<>ΕΎ<><>', '&<>Γ½<><>', '*<>Γ‘<><>', '(<>Γ<><>', ')<>Γ©<><>', '_<>-<><>', '+<>=<><>', 'Q<>q<><>', 'W<>w<><>', 'E<>e<>Γ<>Γ©', 'R<>r<>Ε<>Ε', 'T<>t<><>', 'Y<>y<>Γ<>Γ½', 'U<>u<>Γ<>ΓΊ', 'I<>i<>Γ<>Γ', 'O<>o<>Γ<>Γ³', 'P<>p<><>', '{<>[<><>', '}<>]<><>', '|<>\\<><>', 'A<>a<>Γ<>Γ‘', 'S<>s<>Ε<>Ε', 'D<>d<><>', 'F<>f<><>', 'G<>g<><>', 'H<>h<><>', 'J<>j<><>', 'K<>k<><>', 'L<>l<>ΔΉ<>ΔΊ', '"<>Ε―<><>', '!<>Β§<><>', 'Z<>z<>ΕΉ<>ΕΊ', 'X<>x<><>', 'C<>c<>Δ<>Δ', 'V<>v<><>', 'B<>b<><>', 'N<>n<>Ε<>Ε', 'M<>m<><>', '<<>,<><>', '><>.<><>', '?<>/<><>'],
      'fr': ['`<>Ε<><>', '!<>&<><>', '#<>Γ©<><>', '$<>"<><>', '%<>\'<><>', '^<>(<><>', '&<>-<><>', '*<>Γ¨<><>', '@<>_<><>', '(<>Γ§<><>', ')<>Γ <><>', '_<>)<><>', '+<>=<><>', 'A<>a<><>', 'Z<>z<>Γ<>Γ«', 'E<>e<>Γ<>Γͺ', 'R<>r<>Γ<>Γ¨', 'T<>t<>ΕΈ<>ΓΏ', 'Y<>y<>Γ<>ΓΌ', 'U<>u<>Γ<>Γ»', 'I<>i<>Γ<>ΓΉ', 'O<>o<>Γ<>Γ΄', 'P<>p<><>', '{<>[<><>', '}<>]<><>', '|<>\\<><>', 'Q<>q<>Γ<>Γ ', 'S<>s<>Γ<>Γ’', 'D<>d<><>', 'F<>f<><>', 'G<>g<><>', 'H<>h<><>', 'J<>j<>Γ<>Γ�', 'K<>k<>Γ<>Γ―', 'L<>l<><>', 'M<>m<><>', '%<>ΓΉ<><>', 'W<>w<><>', 'X<>x<><>', 'C<>c<><>', 'V<>v<><>', 'B<>b<><>', 'N<>n<><>', '?<>,<><>', ';<>.<><>', '><>:<><>', '<<>!<><>'],
      'de': ['~<>`<><>', '!<>1<><>', '@<>2<><>', '#<>3<><>', '$<>4<><>', '%<>5<><>', '^<>6<><>', '&<>7<><>', '*<>8<><>', '(<>9<><>', ')<>0<><>', '_<>-<><>', '+<>=<><>', 'Q<>q<><>', 'W<>w<><>', 'E<>e<><>', 'R<>r<><>', 'T<>t<><>', 'Y<>y<><>', 'U<>u<><>', 'I<>i<><>', 'O<>o<><>', 'P<>p<><>', 'Γ<>ΓΌ<>{<>[', 'Γ<>Γ€<>}<>]', '|<>\\<><>', 'A<>a<><>', 'S<>s<><>', 'D<>d<><>', 'F<>f<><>', 'G<>g<><>', 'H<>h<><>', 'J<>j<><>', 'K<>k<><>', 'L<>l<><>', ':<>;<><>', 'Γ<>ΓΆ<>"<>\'', 'Z<>z<><>', 'X<>x<><>', 'C<>c<><>', 'V<>v<><>', 'B<>b<><>', 'N<>n<><>', 'M<>m<><>ΞΌ', '<<>,<><>', '><>.<><>', '?<>Γ<>Sch<>sch'],
      'gr': ['~<>`<><>', '!<>1<><>', '@<>2<><>', '#<>3<><>', '$<>4<><>', '%<>5<><>', '^<>6<><>', '&<>7<><>', '*<>8<><>', '(<>9<><>', ')<>0<><>', '_<>-<><>', '+<>=<><>', ':<>;<><>', 'Ξ<>Ο<><>', 'Ξ<>Ξ΅<>Ξ<>Ξ', 'Ξ‘<>Ο<><>', 'Ξ€<>Ο<>Ξ«<>Ο', 'Ξ₯<>Ο<>Ξ<>Ο', 'Ξ<>ΞΈ<>Ξͺ<>Ο', 'Ξ<>ΞΉ<>Ξ<>Ξ―', 'Ξ<>ΞΏ<>Ξ<>Ο', 'Ξ <>Ο<><>', '{<>[<><>', '}<>]<><>', '|<>\\<><>', 'Ξ<>Ξ±<>Ξ<>Ξ¬', 'Ξ£<>Ο<><>', 'Ξ<>Ξ΄<><>', 'Ξ¦<>Ο<><>', 'Ξ<>Ξ³<><>', 'Ξ<>Ξ·<>Ξ<>Ξ�', 'Ξ<>ΞΎ<><>', 'K<>ΞΊ<><>', 'Ξ<>Ξ»<><>', 'Β¨<>Ξ<><>', '"<>\'<><>', 'Ξ<>ΞΆ<><>', 'X<>Ο<><>', 'Ξ¨<>Ο<><>', 'Ξ©<>Ο<>Ξ<>Ο', 'B<>Ξ²<><>', 'N<>Ξ½<><>', 'M<>ΞΌ<><>', '<<>,<><>', '><>.<><>', '?<>/'],
      'hu': ['~<>1<><>', '@<>2<><>', '#<>3<><>', '$<>4<><>', '%<>5<><>', '^<>6<><>', '&<>7<><>', '*<>8<><>', '(<>9<><>', 'Ε°<>Ε±<><>0', 'Γ<>ΓΆ<><>', 'Γ<>ΓΌ<><>', 'Γ<>Γ³<><>', 'Q<>q<><>', 'W<>w<><>', 'E<>e<>Δ<>Δ', 'R<>r<>Ε<>Ε', 'T<>t<>Ε€<>Ε₯', 'Z<>z<>Ε½<>ΕΎ', 'U<>u<><>', 'I<>i<><>', 'O<>o<><>', 'P<>p<><>', '{<>[<><>', '}<>]<><>', '|<>\\<><>', 'A<>a<><>', 'S<>s<>Ε <>Ε‘', 'D<>d<>Δ<>Δ', 'F<>f<><>', 'G<>g<><>Γ€', 'H<>h<><>Γ', 'J<>j<><>', 'K<>k<><>', 'L<>l<><>', 'Γ<>Γ©<><>', 'Γ<>Γ‘<><>', 'Y<>y<><>', 'X<>x<><>Γ', 'C<>c<>Δ<>Δ', 'V<>v<><>Δ', 'B<>b<><>Δ', 'N<>n<>Ε<>Ε', 'M<>m<><>Γ', '<<>,<><>Γ', '><>.<><>Ε', '?<>/<><>Ε'],
      'is': ['~<>`<><>', '!<>1<><>', '@<>2<><>', '#<>3<><>', '$<>4<><>', '%<>5<><>', '^<>6<><>', '&<>7<><>{', '*<>8<><>[', '(<>9<><>]', ')<>0<><>}', 'Γ<>ΓΆ<><>', '+<>=<><>', 'Q<>q<><>', 'W<>w<><>', 'E<>e<><>', 'R<>r<><>', 'T<>t<><>', 'Y<>y<><>', 'U<>u<><>', 'I<>i<><>', 'O<>o<><>', 'P<>p<><>', 'Γ<>Γ°<><>', '?<>\'<><>', '|<>\\<><>', 'A<>a<>Γ<>Γ₯', 'S<>s<><>', 'D<>d<><>', 'F<>f<><>', 'G<>g<><>', 'H<>h<><>', 'J<>j<><>', 'K<>k<><>', 'L<>l<><>', 'Γ<>Γ¦<><>', '"<>\'<><>', 'Z<>z<><>', 'X<>x<><>', 'C<>c<><>', 'V<>v<><>', 'B<>b<><>', 'N<>n<><>', 'M<>m<><>Β΅', '<<>,<><>', '><>.<><>', 'Γ<>ΓΎ<><>'],
      'it': ['~<>`<><>', '!<>1<><>', '@<>2<><>', '#<>3<><>', '$<>4<><>', '%<>5<><>', '^<>6<><>', '&<>7<><>', '*<>8<><>', '(<>9<><>', ')<>0<><>', 'Γ<>Γ¬<><>', 'Γ<>ΓΉ<><>', 'Q<>q<><>', 'W<>w<><>', 'E<>e<><>', 'R<>r<><>', 'T<>t<><>', 'Y<>y<><>', 'U<>u<><>', 'I<>i<><>', 'O<>o<><>', 'P<>p<><>', 'Γ©<>Γ¨<><>', '}<>]<><>', '|<>\\<><>', 'A<>a<><>', 'S<>s<><>', 'D<>d<><>', 'F<>f<><>', 'G<>g<><>', 'H<>h<><>', 'J<>j<><>', 'K<>k<><>', 'L<>l<><>', 'Γ§<>Γ²<><>', 'Γ<>Γ <><>', 'Z<>z<><>', 'X<>x<><>', 'C<>c<><>', 'V<>v<><>', 'B<>b<><>', 'N<>n<><>', 'M<>m<><>', ';<>,<><>', ':<>.<><>', 'Γ<>ΓΎ<><>'],
      'pl': ['~<>.<><>Δ', '!<>1<><>Δ', '"<>2<><>Β§', '#<>3<><>Γ', 'Β€<>4<><>Γ·', '%<>5<><>Γ', '&<>6<><>', '/<>7<><>', '(<>8<><>', ')<>9<><>', '=<>0<><>', '?<>+<><>', '*<>\'<><>', 'Q<>q<><>', 'W<>w<><>', 'E<>e<>Δ<>Δ', 'R<>r<>Ε<>Ε', 'T<>t<>Ε€<>Ε₯', 'Z<>z<>Ε½<>ΕΎ', 'U<>u<>Ε�<>Ε―', 'I<>i<>Δ<>Δ', 'O<>o<><>ΕΌ', 'P<>p<><>', '<>ΕΌ<>Γ<>Γ’', '<>Ε<>Γ<>Γ�', '<>Γ³<>Γ<>Γ΄', 'A<>a<>Δ<>Δ', 'S<>s<>Ε <>Ε‘', 'D<>d<>Δ<>Δ', 'F<>f<><>', 'G<>g<><>', 'H<>h<><>', 'J<>j<><>', 'K<>k<><>', 'L<>l<><>', 'Ε<>Ε<><>', 'Δ<>Δ<><>', 'Y<>y<><>', 'X<>x<><>', 'C<>c<>Δ<>Δ', 'V<>v<><>', 'B<>b<><>', 'N<>n<>Ε<>Ε', 'M<>m<><>', '<<>,<><>', '><>.<><>', '?<>/<><>'],
      'pt': ['|<>\<><>', '!<>1<><>', '"<>2<><>', '#<>3<><>', '$<>4<><>', '%<>5<><>', '&<>6<><>', '/<>7<><>', '(<>8<><>', ')<>9<><>', '=<>0<><>', '\'<>?<><>', 'Β»<>Β«<><>', 'Q<>q<><>', 'W<>w<>Γ<>Γ©', 'E<>e<>Γ<>Γ¨', 'R<>r<>Γ<>Γͺ', 'T<>t<><>', 'Y<>y<>Γ<>Γ½', 'U<>u<>Γ<>ΓΊ', 'I<>i<>Γ<>Γ�', 'O<>o<>Γ<>Γ΅', 'P<>p<>Γ<>Γ³', '<>+<>Γ<>Γ²', '<>\'<>Γ<>Γ΄', '<>~<><>', 'A<>a<>Γ<>Γ£', 'S<>s<>Γ<>Γ‘', 'D<>d<>Γ<>Γ’', 'F<>f<>Γ<>Γ ', 'G<>g<><>', 'H<>h<>Γ<>Γ»', 'J<>j<>Γ<>ΓΉ', 'K<>k<>Γ<>Γ¬', 'L<>l<>Γ<>Γ', 'Γ<>Γ§<><>', 'Βͺ<>ΒΊ<><>', 'Z<>z<><>', 'X<>x<><>', 'C<>c<><>', 'V<>v<><>', 'B<>b<><>', 'N<>n<>Γ<>Γ±', 'M<>m<><>', ';<>,<><>', ':<>.<><>', '_<>-<><>'],
      'es': ['Βͺ<>ΒΊ<><>', '!<>1<><>', '"<>2<><>', 'Β·<>3<><>', '$<>4<><>', '%<>5<><>', '&<>6<><>', '/<>7<><>', '(<>8<><>', ')<>9<><>', '=<>0<><>', '\'<>?<><>', 'ΒΏ<>Β‘<><>', 'Q<>q<>Γ<>Γ©', 'W<>w<>Γ<>Γ«', 'E<>e<>Γ<>Γ¨', 'R<>r<><>', 'T<>t<><>ΓΏ', 'Y<>y<>Γ<>Γ½', 'U<>u<>Γ<>ΓΊ', 'I<>i<>Γ<>Γ', 'O<>o<>Γ<>Γ³', 'P<>p<>Γ<>Γ²', '^<>`<>Γ<>ΓΆ', '*<>+<><>', 'Γ<>Γ§<><>', 'A<>a<>Γ<>Γ ', 'S<>s<>Γ<>Γ‘', 'D<>d<>Γ<>Γ€', 'F<>f<><>', 'G<>g<><>', 'H<>h<>Γ<>ΓΌ', 'J<>j<>Γ<>ΓΉ', 'K<>k<>Γ<>Γ―', 'L<>l<>Γ<>Γ¬', 'Γ<>Γ±<><>', '"<>\'<><>', 'Z<>z<><>', 'X<>x<><>', 'C<>c<><>', 'V<>v<><>', 'B<>b<><>', 'N<>n<><>', 'M<>m<><>', ';<>,<><>', ':<>.<><>', '_<>-<><>'],
      'tr': ['"<>Γ©<><>', '!<>1<><>', '\'<>2<><>', '^<>3<><>', '+<>4<><>', '%<>5<><>', '&<>6<><>', '/<>7<><>', '(<>8<><>', ')<>9<><>', '=<>0<><>', '?<>*<><>', '-<>_<><>', 'Q<>q<><>', 'W<>w<><>', 'E<>e<>Γ<>Γͺ', 'R<>r<><>', 'T<>t<><>', 'Y<>y<><>', 'U<>u<>Γ<>Γ»', 'I<>i<>Γ<>Γ�', 'O<>o<>Γ<>Γ΄', 'P<>p<><>', 'Δ<>Δ<><>', 'Γ<>ΓΌ<><>', ';<>,<><>', 'A<>a<>Γ<>Γ’', 'S<>s<><>', 'D<>d<><>', 'F<>f<><>', 'G<>g<><>', 'H<>h<><>', 'J<>j<><>', 'K<>k<><>', 'L<>l<><>', 'Ε<>Ε<><>', 'Δ°<>i<>Γ<>Γ�', 'Z<>z<><>', 'X<>x<><>', 'C<>c<><>', 'V<>v<><>', 'B<>b<><>', 'N<>n<><>', 'M<>m<><>', 'Γ<>ΓΆ<><>', 'Γ<>Γ§<><>', ':<>.<><>'],
      'kr': ['~<>`<>μ<>μΌ', '!<>1<>μ<>μ', '@<>2<>μ¨<>μ§', '#<>3<>μ·<>μ€', '$<>4<>μ<>μ§', '%<>5<>μ<>μ', '^<>6<>μΈ<>μ', '&<>7<>μ<>μ', '*<>8<>μ<>μ', '(<>9<>μ<>μ ', ')<>0<>μ°<>μ―', '_<>-<>μΏ<>μ¬', '+<>=<>μ<>μ', 'γ<>γ<>μ°<>μ―', 'γ<>γ<>μ<>μ', 'γΈ<>γ·<>μ<>μ', 'γ²<>γ±<>μ¬<>μ«', '<>γ<>μ·<>μ€', '<>γ<><>μΈ', '<>γ<><>', '<>γ<><>', 'γ<>γ<><>', 'γ<>γ<><>', '{<>[<>ν<>ν¨', '}<>]<>ν<>ν', '|<>\\<>ν«<>ν', '<>γ<>ν<>ν΄', '<>γ΄<>νΏ<>ν€', '<>γ<>ν<>νΈ', '<>γΉ<>ν£<>ν', '<>γ<>ν³<>ν', '<>γ<>ν£<>ν', '<>γ<>ν<>ν΄', '<>γ<>ν<>ν', '<>γ£<>ν«<>ν', ':<>;<>νΆ<>ν', '"<>\'<>ν<>ν΄', '<>γ<>ν<>ν', '<>γ<>ν<>ν¨', '<>γ<>ν²<>ν', '<>γ<>ν<>ν¬', '<>γ <>ν<>νΌ', '<>γ<>ν¦<>ν', '<>γ‘<>ν<>νΌ', '<<>,<>ν<>ν¨', '><>.<>ν<>νΈ', '?<>/<>ν<>ν'],
      'jp': ['γ<>γ<><>γ', 'γ<>γ¬<><>γ', 'γ<>γ΅<><>γ', 'γ’<>γ<><>γ', 'γ¦<>γ<><>γ', 'γ¨<>γ<><>γ', 'γͺ<>γ<><>γ', 'γ€<>γ<><>γ', 'γ¦<>γ<><>γΌ', 'γ¨<>γ<><>Β₯', 'γ―<>γ<><>γ', 'γ<>γ»<><>γ', 'γ<>γΈ<><>γ',
        'γΏ<>γ<><>γ£', 'γ<>γ¦<><>γ', 'γ€<>γ<><>γ', 'γΉ<>γ<><>γ', 'γ«<>γ<><>γ', 'γ³<>γ<><>γ£', 'γ<>γͺ<><>γ', 'γ<>γ«<><>γ', 'γ©<>γ<><>γ', 'γ»<>γ<><>γ', 'γ<>γ<><>γ', 'γ<>γ<>γ<>γ»', 'γ <>γ<>γ<>γ',
        'γ<>γ‘<><>', 'γ<>γ¨<><>', 'γ·<>γ<><>', 'γ<>γ―<><>', 'γ<>γ<>γ<>γ ', 'γ―<>γ<>γ<>γ§', 'γ<>γΎ<>γΊ<>γ', 'γ<>γ�<>γ¬<>γ', 'γͺ<>γ<>γΌ<>γ', 'γ¬<>γ<>γ<>γ’', 'γ±<>γ<>γ<>γ©',
        'γ<>γ€<>γΈ<>γ', 'γ΅<>γ<>γ<>γ°', 'γ½<>γ<>γ�<>γ', 'γ<>γ²<>γ°<>γ', 'γ³<>γ<>γ²<>γ', 'γ<>γΏ<>γ<>γ₯', 'γ’<>γ<>γΆ<>γ', 'γ<>γ<>γΎ<>γ', 'γ«<>γ<>γ<>γ³', 'γ‘<>γ<>γ΄<>γ'
      
    ],*/
    };

    /**
     * ===================================================================================
     *  INTERNAL FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function() {
      // merge user-supplied options with the defaults
      kb.setSettings(options);

      setup();

    }

    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function() {

      // create the keyboard container 
      kb.container = $("<div unselectable='on'  class='kb-container' />");
      $('body').append(kb.container);

      // give the functionality to the close button to close the keyboard
      if (_keyboard.settings.startAs == 'hidden') kb.closeKeyboard();

      // create keyboards rows and buttons
      createKeys();

      // create the menu bar
      createMenuBar();

      // check if the given language is correct and load it
      $.each(languages, function(index, item) {
        if (_keyboard.settings.language == index) {
          kb.changeLanguage(index);
        }
      })

      // give the keyboard the ability to be draged and droped
      drag('.kb-container');

      aplyLayout(_keyboard.settings.skin);

      deBug('setup', 'ended');
    }

    /**
     * Creates keyboard keys and their functions
     */
    var createKeys = function() {
      kb.keyboard = $("<div unselectable='on' class='kb-keyboard' />");
      kb.line1 = $("<div unselectable='on' class='kb-line' />");
      kb.line2 = $("<div unselectable='on' class='kb-line' />");
      kb.line3 = $("<div unselectable='on' class='kb-line' />");
      kb.line4 = $("<div unselectable='on' class='kb-line' />");
      kb.line5 = $("<div unselectable='on' class='kb-line' />");
      kb.key = {};

      var linecount = 1;
      $.each(keys, function(index, item) {

        var k = item.split('<>');

        if (k[0] != 'func' && item != 'br') {
          kb.key[k[2]] = $("<div unselectable='on' class='kb-key kb-letter' id='key" + k[2] + "'><div unselectable='on' class='kb-upper kb-hide'>" + k[0] + "</div><div unselectable='on' class='kb-lower kb-show'>" + k[1] + "</div></div>")
            .mousedown(function(event) {
              if (event.preventDefault) event.preventDefault()
              else event.returnValue = false;

              var focused = $(':focus');

              if (focused.val() != undefined) {
                var pos = getCursorPos(focused);
                var selection = getSelected();
                if (selection != '') {
                  focused.val(focused.val().replace(selection, decodeToLetter($(this).find('.kb-show').html())));
                  setCursorPos(pos + 1);
                } else {
                  focused.val(focused.val().substr(0, pos) + decodeToLetter($(this).find('.kb-show').html()) + focused.val().substr(pos));
                  setCursorPos(pos + 1);
                }
              }

              deBug('Letter pressed', decodeToLetter($(this).find('.kb-show').html()));
              if (shiftk) shiftKey();
            });

        } else if (k[0] == 'func') {
          kb.key[k[2]] = $("<div unselectable='on' class='kb-key kb-fkey' id='key" + k[2] + "'><div unselectable='on' class='kb-itemkey'>" + k[1] + "</div></div>")
            .mousedown(function(event) {
              if (event.preventDefault) event.preventDefault()
              else event.returnValue = false;
              var focused = $(':focus');

              deBug('Key pressed', k[1]);

              if (k[1] == 'Tab') {
                if (focused.val() != undefined) {
                  var pos = getCursorPos(focused);
                  var selection = getSelected();
                  if (selection != '') {
                    focused.val(focused.val().replace(selection, '  '));
                    setCursorPos(pos + 1);
                  } else {
                    focused.val(focused.val().substr(0, pos) + '    ' + focused.val().substr(pos));
                    setCursorPos(pos + 1);
                  }
                }
              } else if (k[1] == 'CapsLock') {
                capsLockKey();
              } else if (k[1] == 'Shift') {
                shiftKey();
              } else if (k[1] == 'Backspace') {
                if (focused.val() != undefined) {
                  var pos = getCursorPos(focused);
                  var selection = getSelected();
                  if (selection != '') {
                    focused.val(focused.val().replace(selection, ''));
                    setCursorPos(pos);
                  } else {
                    focused.val(focused.val().substr(0, pos - 1) + focused.val().substr(pos));
                    setCursorPos(pos - 1);
                  }
                }

              } else if (k[1] == 'Enter') {
                if (focused.val() != undefined) {
                  var pos = getCursorPos(focused);
                  var selection = getSelected();
                  if (selection != '') {
                    focused.val(focused.val().replace(selection, '\n'));
                    setCursorPos(pos + 1);
                  } else {
                    focused.val(focused.val().substr(0, pos) + '\n' + focused.val().substr(pos));
                    setCursorPos(pos + 1);
                  }
                }
              } else if (k[1] == ' ') {
                if (focused.val() != undefined) {
                  var pos = getCursorPos(focused);
                  var selection = getSelected();
                  if (selection != '') {
                    focused.val(focused.val().replace(selection, ' '));
                    setCursorPos(pos + 1);
                  } else {
                    focused.val(focused.val().substr(0, pos) + ' ' + focused.val().substr(pos));
                    setCursorPos(pos + 1);
                  }
                }
              } else if (k[2] == '0001' || k[2] == '0002') {
                specialCharacters();
              }
            });
        }

        if (item == 'br') {
          linecount++;
        } else {
          kb['line' + linecount].append(kb.key[k[2]]);
        }

      });

      kb.keyboard.append(kb.line1).append(kb.line2).append(kb.line3).append(kb.line4).append(kb.line5);
      kb.container.append(kb.keyboard).mousedown(function(event) {
        if (event.preventDefault) event.preventDefault()
        else event.returnValue = false;
      });
    }

    /**
     * Shows symbols on keyboard
     */
    var showSymbols = function() {
      $('.kb-letter').each(function(index, item) {

        var k = keys_symbols[index].split('<>');
        $(this).find('.kb-upper').html(k[0]);
        $(this).find('.kb-lower').html(k[1]);
      });

      $('.kb-selectsymbols').addClass('kb-activekey');
      symbolkeydown = true;
    }

    /**
     * Hide symbols from keyboard and restore the selected language
     */
    var hideSymbols = function() {
      kb.changeLanguage(currentlng);
      $('.kb-selectsymbols').removeClass('kb-activekey');
      symbolkeydown = false;
    }

    /**
     * Shows Mathematic symbols on keyboard
     */
    var showMathSymbols = function() {
      $('.kb-letter').each(function(index, item) {

        var k = keys_math[index].split('<>');
        $(this).find('.kb-upper').html(k[0]);
        $(this).find('.kb-lower').html(k[1]);
      });

      $('.kb-selectmath').addClass('kb-activekey');
      mathkeydown = true;
    }

    /**
     * Hide Mathematic symbols from keyboard and restore the selected language
     */
    var hideMathSymbols = function() {
      kb.changeLanguage(currentlng);
      $('.kb-selectmath').removeClass('kb-activekey');
      mathkeydown = false;
    }

    /**
     * Show languages in the menu bar
     */
    var showLanguages = function() {
      kb.langscontainer = $('<div class="kb-langs"></div>').appendTo(kb.container);
      $.each(languages, function(index, item) {
        $('<div class="kb-lang-button" id="kblang' + index + '" title="' + item[1] + '">' + item[0] + '</div>')
          .click(function() {
            kb.changeLanguage(index);
            hideLanguages();
          })
          .appendTo(kb.langscontainer);
      })

      $('.kb-langs').addClass('kb-' + currentskin + '-langs');
      $('.kb-langs').animate({
        width: 450
      }, 500);
      langbutton = true;
    }

    /**
     * Hide languages from the menu bar
     */
    var hideLanguages = function() {
      $('.kb-langs').animate({
        width: 0
      }, 500, function() {
        $(this).remove();
      });
      langbutton = false;
    }

    /**
     * Get the selected text if there is any
     * @return selected text
     */
    var getSelected = function() {
      var t = '';
      if (window.getSelection) {
        t = window.getSelection();
      } else if (document.getSelection) {
        t = document.getSelection();
      } else if (document.selection) {
        t = document.selection.createRange().text;
      }

      return t;
    }

    /**
     * Change all element classes with the given skin color
     * @param skin, the layouts color
     */
    var aplyLayout = function(skin) {

      var isskin = false;
      $.each(skins, function(index, item) {
        if (skin == item) isskin = true;
      });
      if (!isskin) skin = 'default';

      $('.kb-container').addClass('kb-' + skin + '-container');
      $('.kb-button').addClass('kb-' + skin + '-button');
      $('.kb-key').addClass('kb-' + skin + '-key');
      $('.kb-menubar').addClass('kb-' + skin + '-menubar');
      $('.kb-menubutton').addClass('kb-' + skin + '-menubutton');
      $('.kb-langs').addClass('kb-' + skin + '-langs');
      $('.kb-show').addClass('kb-' + skin + '-show');
      $('.kb-hide').addClass('kb-' + skin + '-hide');

      currentskin = skin;
    }

    /**
     * Get the cursors position in the focused input
     * @return pos, the cursors position 
     */
    var getCursorPos = function(element) {
      if (element.val() == undefined) return 0;

      var el = element.get(0);
      var pos = 0;
      if ('selectionStart' in el) {
        pos = el.selectionStart;
      } else if ('selection' in document) {
        el.focus();
        var Sel = document.selection.createRange();
        var SelLength = document.selection.createRange().text.length;
        Sel.moveStart('character', -el.value.length);
        pos = Sel.text.length - SelLength;
      }
      deBug('Current pos', pos);
      return pos;
    }

    /**
     * Set the cursors position in the focused input to a given position
     * @param pos, the cursors position 
     */
    var setCursorPos = function(pos) {
      var focused = $(':focus');
      if (focused[0].setSelectionRange) {
        focused[0].focus();
        focused[0].setSelectionRange(pos, pos);
      } else if (focused[0].createTextRange) {
        var range = focused[0].createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    /**
     * Create the menu bar and add it to keyboard container
     */
    var createMenuBar = function() {
      kb.menubar = $("<div class='kb-menubar' />");
      kb.closebutton = $("<div class='kb-menubutton kb-closebtn' title='Close'>&#10006;</div>")
        .click(function() {
          $('.kb-menubar').trigger('mouseup');
          kb.closeKeyboard();
        });
      kb.selectlanguage = $("<div class='kb-menubutton kb-selectlanguage' title='Select Language'>" + languages[currentlng][0] + "</div>")
        .click(function() {
          if (!langbutton) showLanguages();
          else hideLanguages();
        });
      /* kb.selectsymbols = $("<div class='kb-menubutton kb-selectsymbols' title='Symbols'>&#167;</div>")
        .click(function() {
          if (symbolkeydown) hideSymbols();
          else showSymbols();
        });
     kb.selectmath = $("<div class='kb-menubutton kb-selectmath' title='Mathematical Symbols'>123</div>")
        .click(function() {
          if (mathkeydown) hideMathSymbols();
          else showMathSymbols();
        });*/

      kb.menubar.append(kb.closebutton);
      kb.menubar.append(kb.selectlanguage);
      //kb.menubar.append(kb.selectmath);
      //kb.menubar.append(kb.selectsymbols);

      kb.container.append(kb.menubar);
      deBug('Menu Bar', 'created');
    }

    /**
     * Return the character of an Ampersand Character Code
     * $param str, the Ampersand Character Code
     */
    var decodeToLetter = function(str) {
      return $("<div/>").html(str).text();
    }

    /**
     * Change the state of the letters to upper case
     */
    var capitalize = function() {
      $('.kb-show').addClass('kb-temp');
      $('.kb-hide').addClass('kb-show').addClass('kb-' + currentskin + '-show').removeClass('kb-hide').removeClass('kb-' + currentskin + '-hide');
      $('.kb-temp').addClass('kb-hide').addClass('kb-' + currentskin + '-hide').removeClass('kb-show').removeClass('kb-' + currentskin + '-show');
      $('.kb-temp').removeClass('kb-temp');
      capital = true;
      deBug('Letters status', 'upper case');
    }

    /**
     * Change the state of the letters to lower case
     */
    var deCapitalize = function() {
      $('.kb-hide').addClass('kb-temp');
      $('.kb-show').addClass('kb-hide').addClass('kb-' + currentskin + '-hide').removeClass('kb-show').removeClass('kb-' + currentskin + '-show');
      $('.kb-temp').addClass('kb-show').addClass('kb-' + currentskin + '-show').removeClass('kb-hide').removeClass('kb-' + currentskin + '-hide');
      $('.kb-temp').removeClass('kb-temp');
      capital = false;
      deBug('Letters status', 'lower case');
    }

    /**
     * The functionality of the Caps Lock key
     */
    var capsLockKey = function() {
      if (capslockk) {
        if (capital) deCapitalize();
        else capitalize();

        $('#key00').removeClass('kb-activekey');

        capslockk = false;
      } else {
        if (capital) deCapitalize();
        else capitalize();

        $('#key00').addClass('kb-activekey');
        capslockk = true;
      }
    }

    /**
     * The functionality of the Shift key
     */
    var shiftKey = function() {
      if (shiftk) {
        if (capital) deCapitalize();
        else capitalize();

        $('#key14, #key15').removeClass('kb-activekey');
        shiftk = false;
      } else {
        if (capital) deCapitalize();
        else capitalize();

        $('#key14, #key15').addClass('kb-activekey');
        shiftk = true;
      }
    }

    /**
     * Enable or disable Special chars pressing the Ctrl button
     */
    var specialCharacters = function() {
      if (specialchar) {
        kb.changeLanguage(currentlng);
        $('#key0001, #key0002').removeClass('kb-activekey');
        specialchar = false;
      } else {
        $('.kb-letter').each(function(index, item) {
          var k = lng_keys[currentlng][index].split('<>');
          $(this).find('.kb-upper').html(k[2]);
          $(this).find('.kb-lower').html(k[3]);
        });
        $('#key0001, #key0002').addClass('kb-activekey');
        specialchar = true;
      }

    }

    /**
     * Give the plugin the ability to drag and drop
     * @param element, the element to drag
     */
    var drag = function(element) {
      $('.kb-menubar').css('cursor', "move")
        .on("mousedown", function(e) {
          var $drag = $(element).addClass('kb-draggable');

          var drg_h = $drag.outerHeight(),
            drg_w = $drag.outerWidth(),
            pos_y = $drag.offset().top + drg_h - e.pageY,
            pos_x = $drag.offset().left + drg_w - e.pageX;

          $drag.parents()
            .on("mousemove", function(e) {
              $('.kb-draggable').offset({
                top: e.pageY + pos_y - drg_h,
                left: e.pageX + pos_x - drg_w
              })
            })
            .on("mouseup", function() {
              $(element).removeClass('kb-draggable');
            });

          if (e.preventDefault) e.preventDefault()
          else e.returnValue = false;
        })
        .on("mouseup", function() {
          $(element).removeClass('draggable');
        });
    }

    /**
     * Shows console.log info 
     * @param label
     * @param msg
     */
    var deBug = function(label, msg) {
      if (_keyboard.settings.debug) {
        if (typeof console == "undefined") {
          alert("Your browser does not support console debugging or you need to activate debugging mode. (F12 if ie)");
          _keyboard.settings.debug = false;
        } else {
          console.log(label);
          console.log(msg);
          var line = '';
          for (var i = 0; i < 100; i++) line += "_"
          console.log(line);
          console.log('');
        }
      }
    }

    /**
     * ===================================================================================
     *  EXTERNAL FUNCTIONS
     * ===================================================================================
     */
    /**
     * Returns all setting's options
     */
    kb.getSettings = function() {
      return _keyboard.settings;
    }

    /**
     * Marge optional settings with the defaults
     */
    kb.setSettings = function(settings) {
        _keyboard.settings = $.extend({}, defaults, settings);
      }
      /**
       * Change the shown language
       * @param lng, the given language to show  
       */
    kb.changeLanguage = function(lng) {
      var temp = currentlng;
      $.each(languages, function(index, item) {
        if (index == lng) {
          temp = lng;
        }
      })

      $('.kb-letter').each(function(index, item) {
        var k = lng_keys[temp][index].split('<>');
        $(this).find('.kb-upper').html(k[0]);
        $(this).find('.kb-lower').html(k[1]);
      });

      $('.kb-selectlanguage').html(languages[temp][0]);
      currentlng = temp;
    }

    /**
     * Remove the current layout and apply the given one
     * @param color, the layouts color
     */
    kb.changeSkin = function(color) {
      $('.kb-container').removeClass('kb-' + currentskin + '-container');
      $('.kb-button').removeClass('kb-' + currentskin + '-button');
      $('.kb-key').removeClass('kb-' + currentskin + '-key');
      $('.kb-menubar').removeClass('kb-' + currentskin + '-menubar');
      $('.kb-menubutton').removeClass('kb-' + currentskin + '-menubutton');
      $('.kb-langs').removeClass('kb-' + currentskin + '-langs');
      $('.kb-show').removeClass('kb-' + currentskin + '-show');
      $('.kb-hide').removeClass('kb-' + currentskin + '-hide');

      aplyLayout(color);
      deBug('Change skin to:', color);
    }

    /**
     * Open keyboard
     */
    kb.openKeyboard = function() {
      kb.container.toggle();
      $('.search').focus();
    }

    /**
     * Close keyboard
     */
    kb.closeKeyboard = function() {
      kb.container.hide();
      $('.search').blur();
    }

    // initialize plugin
    init();

    // returns the current jQuery object
    return this;
  }

})(jQuery);


//Keyboard  https://codepen.io/Jku/pen/bwdZzJ


var kb;
var content = false;
var content_height = 0;
jQuery(document).ready(function () {
    kb = jQuery('.kiosk_search').keyboard({
        language: 'ru',
        startAs: 'hidden',
        debug: 'false'
    });

});

// Keyboard JS

;
(function ($) {
    var defaults = {

        //LAYOUT
        startAs: 'visible', // 'hidden', 'visible'
        useImage: true, // true, false
        skin: 'default', // 'default', 'blue', 'green', 'red', 'yellow', 'black'
        language: 'ru', //'en','ru'

        //DEV
        debug: false, // true, false

    };

    $.fn.keyboard = function (options) {

        if (this.length == 0) return this;

        /**
         * ===================================================================================
         *  ПЕРЕМЕННЫЕ
         * ===================================================================================
         */

        // создаtn пространство имен, которое будет использоваться во всем плагине
        var _keyboard = {};

        // ссылка на наш элемент клавиатуры
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
            'en': ['EN', 'English']
        };
        var currentlng = 'ru';
        var langbutton = false;

        var keys = ['~<>`<>126', '!<>1<>49', '@<>2<>52', '#<>3<>51', '$<>4<>52', '%<>5<>53', '^<>6<>54', '&<>7<>55', '*<>8<>56', '(<>9<>57', ')<>0<>48', '_<>-<>45', '+<>=<>43', 'func<>Backspace<>08', 'br',
            'Q<>q<>81', 'W<>w<>87', 'E<>e<>69', 'R<>r<>82', 'T<>t<>84', 'Y<>y<>89', 'U<>u<>85', 'I<>i<>73', 'O<>o<>79', 'P<>p<>80', '{<>[<>91', '}<>]<>93', '|<>\\<>92', 'func<>Enter<>01', 'br',
            'func<>CapsLock<>00', 'A<>a<>65', 'S<>s<>83', 'D<>d<>68', 'F<>f<>70', 'G<>g<>71', 'H<>h<>72', 'J<>j<>74', 'K<>k<>75', 'L<>l<>76', ':<>;<>59', '"<>\'<>92', 'br',
            'func<>Shift<>14', 'Z<>z<>90', 'X<>x<>88', 'C<>c<>67', 'V<>v<>86', 'B<>b<>66', 'N<>n<>78', 'M<>m<>77', '<<>,<>44', '><>.<>46', '?<>/<>47', 'br',
            'func<> <>32'
        ];

        // Скрытие кнопки Enter
        // Находим индекс элемента 'func<>Enter<>01'
       var indexToRemove = keys.indexOf('func<>Enter<>01');

        // Если элемент найден, удаляем его
        if (indexToRemove !== -1) {
            keys.splice(indexToRemove, 1);
       }


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
            'ru': ['Ё<>ё<><>', '!<>1<><>', '"<>2<><>', '№<>3<><>', ';<>4<><>', '%<>5<><>', ':<>6<><>', '?<>7<><>', '*<>8<><>', '(<>9<><>', ')<>0<><>', '_<>-<><>', '+<>=<><>', 'Й<>й<><>', 'Ц<>ц<><>', 'У<>у<><>', 'К<>к<><>', 'Е<>е<><>', 'Н<>н<><>', 'Г<>г<><>', 'Ш<>ш<>', 'Щ<>щ<><>', 'З<>з<><>', 'Х<>х<><>', 'Ъ<>ъ<><>', '/<>\/<><>', 'Ф<>ф<><>', 'Ы<>ы<><>', 'В<>в<><>', 'А<>а<><>', 'П<>п<><>', 'Р<>р<><>', 'О<>о<><>', 'Л<>л<><>', 'Д<>д<><>', 'Ж<>ж<><>', 'Э<>э<><>', 'Я<>я<><>', 'Ч<>ч<><>', 'С<>с<><>', 'М<>м<><>', 'И<>и<><>', 'Т<>т<><>', 'Ь<>ь<><>', 'Б<>б<><>', 'Ю<>ю<><>', ',<>.<><>'],
            'en': ['~<>`<><>', '!<>1<><>', '@<>2<><>', '#<>3<><>', '$<>4<><>', '%<>5<><>', '^<>6<><>', '&<>7<><>', '*<>8<><>', '(<>9<><>', ')<>0<><>', '_<>-<><>', '+<>=<><>', 'Q<>q<><>', 'W<>w<><>', 'E<>e<><>', 'R<>r<><>', 'T<>t<><>', 'Y<>y<><>', 'U<>u<><>', 'I<>i<><>', 'O<>o<><>', 'P<>p<><>', '{<>[<><>', '}<>]<><>', '|<>\\<><>', 'A<>a<><>', 'S<>s<><>', 'D<>d<><>', 'F<>f<><>', 'G<>g<><>', 'H<>h<><>', 'J<>j<><>', 'K<>k<><>', 'L<>l<><>', ':<>;<><>', '"<>\'<><>', 'Z<>z<><>', 'X<>x<><>', 'C<>c<><>', 'V<>v<><>', 'B<>b<><>', 'N<>n<><>', 'M<>m<><>', '<<>,<><>', '><>.<><>', '?<>/<><>'],
        };

        /**
         * ===================================================================================
         *  INTERNAL FUNCTIONS
         * ===================================================================================
         */

        /**
         * Инициализирует настройки пространства имен, которые будут использоваться во всем плагине.
         */
        var init = function () {
            // объединяет параметры, предоставленные пользователем, со значениями по умолчанию
            kb.setSettings(options);

            setup();

        }

        /**
         * Выполняет все модификации DOM и CSS.
         */
        var setup = function () {

            // создает контейнер клавиатуры
            kb.container = $("<div unselectable='on' id='kb-container-id' class='kb-container' />");
            $('#kiosk_body-id').append(kb.container);

            // добавляет функцию кнопки закрытия, чтобы закрыть клавиатуру
            if (_keyboard.settings.startAs == 'hidden') kb.closeKeyboard();

            // создает строки и кнопки клавиатуры
            createKeys();

            // создает строку menu bar
            createMenuBar();

            // проверяет, правильный ли указанный язык, и загружает его
            $.each(languages, function (index, item) {
                if (_keyboard.settings.language == index) {
                    kb.changeLanguage(index);
                }
            })

            // дает клавиатуре возможность перетаскивания
            //drag('.kb-container');

            aplyLayout(_keyboard.settings.skin);

            deBug('setup', 'ended');
        }

        /**
         * Создает клавиши клавиатуры и их функции.
         */
        var createKeys = function () {
            kb.keyboard = $("<div unselectable='on' class='kb-keyboard' />");
            kb.keyboardWrp = $("<div unselectable='on' class='kb-keyboard-wrp' />");
            kb.line1 = $("<div unselectable='on' class='kb-line' />");
            kb.line2 = $("<div unselectable='on' class='kb-line' />");
            kb.line3 = $("<div unselectable='on' class='kb-line' />");
            kb.line4 = $("<div unselectable='on' class='kb-line' />");
            kb.line5 = $("<div unselectable='on' class='kb-line' />");
            kb.key = {};

            var linecount = 1;
            $.each(keys, function (index, item) {

                var k = item.split('<>');

                if (k[0] != 'func' && item != 'br') {
                    kb.key[k[2]] = $("<div unselectable='on' class='kb-key kb-letter' id='key" + k[2] + "'><div unselectable='on' class='kb-upper kb-hide'>" + k[0] + "</div><div unselectable='on' class='kb-lower kb-show'>" + k[1] + "</div></div>")
                        .mousedown(function (event) {
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
                        .mousedown(function (event) {
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

            kb.keyboard.append(kb.keyboardWrp.append(kb.line1).append(kb.line2).append(kb.line3).append(kb.line4).append(kb.line5));
            kb.container.append(kb.keyboard).mousedown(function (event) {
                if (event.preventDefault) event.preventDefault()
                else event.returnValue = false;
            });
        }

        /**
         * Показывает символы на клавиатуре
         */
        var showSymbols = function () {
            $('.kb-letter').each(function (index, item) {

                var k = keys_symbols[index].split('<>');
                $(this).find('.kb-upper').html(k[0]);
                $(this).find('.kb-lower').html(k[1]);
            });

            $('.kb-selectsymbols').addClass('kb-activekey');
            symbolkeydown = true;
        }

        /**
         * Скрывает символы с клавиатуры и восстанавливает выбранный язык
         */
        var hideSymbols = function () {
            kb.changeLanguage(currentlng);
            $('.kb-selectsymbols').removeClass('kb-activekey');
            symbolkeydown = false;
        }

        /**
         * Показывает математические символы на клавиатуре
         */
        var showMathSymbols = function () {
            $('.kb-letter').each(function (index, item) {

                var k = keys_math[index].split('<>');
                $(this).find('.kb-upper').html(k[0]);
                $(this).find('.kb-lower').html(k[1]);
            });

            $('.kb-selectmath').addClass('kb-activekey');
            mathkeydown = true;
        }

        /**
         * Скрывает математические символы с клавиатуры и восстанавливает выбранный язык
         */
        var hideMathSymbols = function () {
            kb.changeLanguage(currentlng);
            $('.kb-selectmath').removeClass('kb-activekey');
            mathkeydown = false;
        }

        /**
         * Показать языки в menu bar
         */
        var showLanguages = function () {
            kb.langscontainer = $('<div class="kb-langs"></div>').appendTo(kb.container);
            $.each(languages, function (index, item) {
                $('<div class="kb-lang-button" id="kblang' + index + '" title="' + item[1] + '">' + item[0] + '</div>')
                    .click(function () {
                        kb.changeLanguage(index);
                        hideLanguages();
                    })
                    .appendTo(kb.langscontainer);
            })

            $('.kb-langs').addClass('kb-' + currentskin + '-langs');
            $('.kb-langs').animate({
                width: 135
            }, 500);
            langbutton = true;
        }

        /**
         * Скрывает языки из menu bar
         */
        var hideLanguages = function () {
            $('.kb-langs').animate({
                width: 0
            }, 500, function () {
                $(this).remove();
            });
            langbutton = false;
        }

        /**
         * Получает selected text, если он есть
         * @return selected text
         */
        var getSelected = function () {
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
         * Изменчет все классы элементов с заданным skin color
         * @param skin, the layouts color
         */
        var aplyLayout = function (skin) {

            var isskin = false;
            $.each(skins, function (index, item) {
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
         * Получает положение курсоров в сфокусированном input
         * @return pos, the cursors position 
         */
        var getCursorPos = function (element) {
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
         * Устанавливает cursors position при целенаправленном input в заданную позицию
         * @param pos, the cursors position 
         */
        var setCursorPos = function (pos) {
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
         * Создает menu bar и добавляет его в контейнер клавиатуры
         */
        var createMenuBar = function () {
            kb.menubar = $("<div class='kb-menubar' />");
            kb.closebutton = $("<div class='kb-menubutton kb-closebtn' title='Закрыть'>&#10006;</div>")
                .click(function () {
                    $('.kb-menubar').trigger('mouseup');
                    kb.closeKeyboard();
                });
            kb.selectlanguage = $("<div class='kb-menubutton kb-selectlanguage' title='Выберите язык'>" + languages[currentlng][0] + "</div>")
                .click(function () {
                    if (!langbutton) showLanguages();
                    else hideLanguages();
                });
            /* kb.selectsymbols = $("<div class='kb-menubutton kb-selectsymbols' title='Символы'>&#167;</div>")
              .click(function() {
                if (symbolkeydown) hideSymbols();
                else showSymbols();
              });
           kb.selectmath = $("<div class='kb-menubutton kb-selectmath' title='Математические символы'>123</div>")
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
         * Возвращает символ Ampersand Character Code
         * $param str, the Ampersand Character Code
         */
        var decodeToLetter = function (str) {
            return $("<div/>").html(str).text();
        }

        /**
         * Изменяет состояние букв на верхний регистр
         */
        var capitalize = function () {
            $('.kb-show').addClass('kb-temp');
            $('.kb-hide').addClass('kb-show').addClass('kb-' + currentskin + '-show').removeClass('kb-hide').removeClass('kb-' + currentskin + '-hide');
            $('.kb-temp').addClass('kb-hide').addClass('kb-' + currentskin + '-hide').removeClass('kb-show').removeClass('kb-' + currentskin + '-show');
            $('.kb-temp').removeClass('kb-temp');
            capital = true;
            deBug('Letters status', 'upper case');
        }

        /**
         * Изменяет состояние букв на нижний регистр
         */
        var deCapitalize = function () {
            $('.kb-hide').addClass('kb-temp');
            $('.kb-show').addClass('kb-hide').addClass('kb-' + currentskin + '-hide').removeClass('kb-show').removeClass('kb-' + currentskin + '-show');
            $('.kb-temp').addClass('kb-show').addClass('kb-' + currentskin + '-show').removeClass('kb-hide').removeClass('kb-' + currentskin + '-hide');
            $('.kb-temp').removeClass('kb-temp');
            capital = false;
            deBug('Letters status', 'lower case');
        }

        /**
         * Функционал для клавиши Caps Lock
         */
        var capsLockKey = function () {
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
         * Функционал для клавиши Shift
         */
        var shiftKey = function () {
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
         * Включите или отключите специальные символы, нажав кнопку Ctrl
         */
        var specialCharacters = function () {
            if (specialchar) {
                kb.changeLanguage(currentlng);
                $('#key0001, #key0002').removeClass('kb-activekey');
                specialchar = false;
            } else {
                $('.kb-letter').each(function (index, item) {
                    var k = lng_keys[currentlng][index].split('<>');
                    $(this).find('.kb-upper').html(k[2]);
                    $(this).find('.kb-lower').html(k[3]);
                });
                $('#key0001, #key0002').addClass('kb-activekey');
                specialchar = true;
            }

        }

        /**
         * Предоставьте плагину возможность перетаскивания
         * @param element, the element to drag
         */
        var drag = function (element) {
            $('.kb-menubar').css('cursor', "move")
                .on("mousedown", function (e) {
                    var $drag = $(element).addClass('kb-draggable');

                    var drg_h = $drag.outerHeight(),
                        drg_w = $drag.outerWidth(),
                        pos_y = $drag.offset().top + drg_h - e.pageY,
                        pos_x = $drag.offset().left + drg_w - e.pageX;

                    $drag.parents()
                        .on("mousemove", function (e) {
                            $('.kb-draggable').offset({
                                top: e.pageY + pos_y - drg_h,
                                left: e.pageX + pos_x - drg_w
                            })
                        })
                        .on("mouseup", function () {
                            $(element).removeClass('kb-draggable');
                        });

                    if (e.preventDefault) e.preventDefault()
                    else e.returnValue = false;
                })
                .on("mouseup", function () {
                    $(element).removeClass('draggable');
                });
        }

        /**
         * Показывает console.log info 
         * @param label
         * @param msg
         */
        var deBug = function (label, msg) {
            if (_keyboard.settings.debug) {
                if (typeof console == "undefined") {
                    alert("Ваш браузер не поддерживает консольную отладку или вам необходимо активировать режим отладки. (F12 if ie)");
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
         * Возвращает все параметры настройки
         */
        kb.getSettings = function () {
            return _keyboard.settings;
        }

        /**
         * Объединяет дополнительные настройки со значениями по умолчанию.
         */
        kb.setSettings = function (settings) {
            _keyboard.settings = $.extend({}, defaults, settings);
        }
        /**
         * Изменяет отображаемый язык
         * @param lng, the given language to show  
         */
        kb.changeLanguage = function (lng) {
            var temp = currentlng;
            $.each(languages, function (index, item) {
                if (index == lng) {
                    temp = lng;
                }
            })

            $('.kb-letter').each(function (index, item) {
                var k = lng_keys[temp][index].split('<>');
                $(this).find('.kb-upper').html(k[0]);
                $(this).find('.kb-lower').html(k[1]);
            });

            $('.kb-selectlanguage').html(languages[temp][0]);
            currentlng = temp;
        }

        /**
         * Удалить текущий layout и применить данный
         * @param color, the layouts color
         */
        kb.changeSkin = function (color) {
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
         * Открывает клавиатуру
         * 
         * 
         */
        $(document).ready(function () {
            $('.kiosk_search').focus(function () {
                // При фокусе на поле ввода, показать блок
                kb.container.show();
            });

            $('.kiosk_search').blur(function () {
                // При потере фокуса на поле ввода, скрыть блок
                kb.container.hide();
            });
        });


        kb.openKeyboard = function () {
            kb.container.toggle();
            $('.kiosk_search').focus();
        }

        /**
         * Закрывает клавиатуру
         */

        kb.closeKeyboard = function () {
            kb.container.hide();
            $('.kiosk_search').blur();
        }



        // инициализация плагина
        init();

        // возвращает текущий объект jQuery
        return this;
    }

})(jQuery);
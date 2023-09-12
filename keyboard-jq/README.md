# Accent-Keyboard
Accent Keyboard is virtual multilanguage keyboard with jquery plugins

## Demo
Visit [demo here](http://htmlpreview.github.io/?https://github.com/tghazali/Accent-Keyboard/blob/master/demo.html)

## Based On
jQuery MLKeyboard

# Usage
* Download jquery.accent-keyboard.min.js and jquery.accent-keyboard.css files
* add 2 file to your project
* Activate this plugin on input fields with javascript: 
```javascript
$('input').accentKeyboard();
```
* add prefered layout to change accent to another language such as accent, en_US (English), es_ES (Spanish), it_IT (Italian), pt_PT (Portuguese), ru_RU (Russian) 
* this prefered with javascript: 
```javascript
$('input').accentKeyboard({layout: 'es_ES'});
```
* It's ready.

 Full default javascript
 ```javascript
        $('.ak-input').accentKeyboard({
            layout: 'accent',
            active_shift: true,
            active_caps: false,
            is_hidden: true,
            open_speed: 300,
            close_speed: 100,
            show_on_focus: true,
            hide_on_blur: true,
            trigger: undefined,
            enabled: true
        });
```
Style container/input/textarea (you can use bootstrap, uikit, metro ui, material css or other framework)
```css
        body{
            background: #aaa;
        }
        .ak-container{
            width: 960px;
            margin: 30px auto;
        }
        input.ak-input{
            width: 100%;
            height: 55px;
            font-size: 24pt;
            margin: 10px 0;
        }
        textarea.ak-input{
            width: 100%;
            height: 300px;
            font-size: 24pt;
            margin: 10px 0;
        }
```
## Watch Video Tutorial
[![Code Tube](https://img.youtube.com/vi/1tjw0fj669E/0.jpg)](https://www.youtube.com/watch?v=1tjw0fj669E)

or

[Code Tube (youtube channel)](https://youtu.be/1tjw0fj669E)

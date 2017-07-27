/**
 * Fonction et main script acceptation de cookies par l'utilsateur
 *
 * @category    script javascript
 * @package     accept_cookies
 * @author      DESSI Alain <contact@alain-dessi.com>
 * @copyright   2017 Dessi Alain
 * @link        http://www.alain-dessi.com
 */
(function(window) {

    var cookieName   = 'accept_cookie';
    var button       = document.getElementById('button-close');
    var displayInfos = document.getElementById('cookie-choice');

    if(!isCookieExist()) {
        displayInfos.className = "open";
    }

    button.addEventListener('click', function(){
        displayInfos.className = "close";
        setCookie();
    });

    /**
     * Create Cookie
     */
    function setCookie() {
        var expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        document.cookie = cookieName + '=1; path=/; expires=' + expiryDate.toGMTString();
    }

    /**
     * Verification existance of cookie
     * @return {Boolean} [description]
     */
    function isCookieExist() {
        if(document.cookie.indexOf(cookieName) == -1) {
            return false;
        } else {
            return true;
        }
    }
})(this);

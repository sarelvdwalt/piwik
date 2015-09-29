/*!
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
function initTopControls() {
    var $topControlsContainer = $('.top_controls'),
        left = 30;

    if ($topControlsContainer.length) {
        $('.piwikTopControl').each(function () {
            var $control = $(this);
            if ($control.css('display') == 'none') {
                return;
            }

            $control.css('left', left);

            left += $control.outerWidth(true);
        });
    }
}
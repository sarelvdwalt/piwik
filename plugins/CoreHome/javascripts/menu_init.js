$(function () {
    var isPageHasMenu = $('#secondNavBar').size();
    var isPageIsAdmin = $('#content.admin').size();
    if (isPageHasMenu) {
        piwikMenu = new menu();
        piwikMenu.init();
        if (!isPageIsAdmin) {
            piwikMenu.loadFirstSection();
        }
    }

    if(isPageIsAdmin) {
        // don't use broadcast in admin pages
        initTopControls();
        return;
    }
    if(isPageHasMenu) {
        broadcast.init();
    } else {
        broadcast.init(true);
    }
});

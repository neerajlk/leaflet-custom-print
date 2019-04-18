app.controller('printExportCtrl', function ($scope) {
    var map = L.map('map').setView([20.5937, 78.9629], 5);

    var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    $scope.changeOrientation = function (orientationParam) {
        $scope.orientation = orientationParam
    }

    $scope.ChangePageLayout = function (layoutParam) {
        $scope.page = layoutParam
    }

    $scope.exportImage = function (layout, orientation) {
        L.easyPrint({
            hidden: true,
            sizeModes: [layout + orientation],
            tileLayer: tileLayer,
            exportOnly: true
        }).addTo(map).printMap(layout + orientation + ' ' + 'page', 'MyFileName')
    }

    $scope.printMyMap = function (layout, orientation) {
        a3Size.className = 'A4' + orientation + ' ' + 'page'
        L.easyPrint({
            hidden: true,
            sizeModes: [layout + orientation],
            tileLayer: tileLayer
        }).addTo(map).printMap(layout + orientation + ' ' + 'page', 'MyFileName')
    }

})